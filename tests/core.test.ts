import 'fake-indexeddb/auto';
import {describe,it,expect,beforeEach} from 'vitest';
import {createPinia,setActivePinia} from 'pinia';
import {useApp} from '../src/stores/app';
import {repository} from '../src/core/repository';
import {encryptBackup,decryptBackup,validateSnapshot} from '../src/core/backup';
import {remaining,volume,coachAdvice,localDay} from '../src/core/logic';
beforeEach(async()=>{await repository.clear();setActivePinia(createPinia());});
describe('Offline records',()=>{
 it('recovers an interrupted session and preserves its sets and rest deadline',async()=>{const a=useApp();await a.init();await a.start(['db-curl'],'Arms');await a.addSet('db-curl',10,12);const id=a.active!.id,end=a.active!.restEnd;setActivePinia(createPinia());const b=useApp();await b.init();expect(b.active!.id).toBe(id);expect(b.active!.sets).toHaveLength(1);expect(b.active!.restEnd).toBe(end);await b.finish();expect(b.active).toBeUndefined();expect(b.completed).toHaveLength(1);expect(volume(b.completed)).toBe(120);});
 it('stores meals and replaces same-day weigh-ins',async()=>{const a=useApp();await a.init();await a.addMeal({name:'Test label',category:'Lunch',calories:500,protein:30,carbs:60,fat:15});await a.addWeight(55,'2026-10-10');await a.addWeight(56,'2026-10-10');await a.addWeight(54,'2026-10-09');expect(a.data.weights).toHaveLength(2);expect(a.data.profile.weight).toBe(56);expect(a.totals.calories).toBe(500);expect((await repository.load())!.meals[0].protein).toBe(30);});
 it('uses local calendar components for log dates',()=>{const d=new Date(2026,0,1,23,59);expect(localDay(d)).toBe('2026-01-01');});
 it('calculates timer catch-up after suspension, never going negative',()=>{expect(remaining(61000,1000)).toBe(60);expect(remaining(61000,50000)).toBe(11);expect(remaining(61000,80000)).toBe(0);});
 it('prioritizes reported fatigue over workout history',()=>{expect(coachAdvice([],{id:'a',day:'2026-10-17',energy:1,sleep:8,soreness:2}).title).toContain('recovery');});
 it('rejects invalid set inputs before saving',async()=>{const a=useApp();await a.init();await a.start(['db-curl']);await expect(a.addSet('db-curl',-1,5)).rejects.toThrow();await expect(a.addSet('db-curl',10,NaN)).rejects.toThrow();expect(a.active!.sets).toHaveLength(0);});
});
describe('Encrypted backup recovery',()=>{
 it('round-trips real records and rejects an incorrect password',async()=>{const a=useApp();await a.init();await a.start(['db-curl']);await a.addSet('db-curl',12,10);const encrypted=await encryptBackup(a.data,'correct password 123');expect(encrypted).not.toContain('db-curl');const restored=await decryptBackup(encrypted,'correct password 123');expect(restored.sessions[0].sets[0].reps).toBe(12);await expect(decryptBackup(encrypted,'incorrect password')).rejects.toThrow('Incorrect password');});
 it('rejects corrupted ciphertext',async()=>{const a=useApp();await a.init();const b=JSON.parse(await encryptBackup(a.data,'correct password 123'));b.payload=(b.payload[0]==='A'?'B':'A')+b.payload.slice(1);await expect(decryptBackup(JSON.stringify(b),'correct password 123')).rejects.toThrow();});
 it('rejects unknown exercise references and malformed numeric data',async()=>{const a=useApp();await a.init();const data=structuredClone(JSON.parse(JSON.stringify(a.data)));data.profile.weight='NaN';expect(()=>validateSnapshot(data)).toThrow();data.profile.weight=55;data.favorites=['not-an-exercise'];expect(()=>validateSnapshot(data)).toThrow();});
});
