import type {Snapshot} from './models';
import {exercises} from './exercises';
const enc=new TextEncoder(),dec=new TextDecoder();
const b64=(v:Uint8Array)=>btoa(Array.from(v,x=>String.fromCharCode(x)).join(''));
function unb64(s:string){return Uint8Array.from(atob(s),x=>x.charCodeAt(0));}
async function key(password:string,salt:Uint8Array){const base=await crypto.subtle.importKey('raw',enc.encode(password),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:600000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);}
export async function encryptBackup(data:Snapshot,password:string){if(password.length<12)throw Error('Use a backup password of at least 12 characters.');const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));const encrypted=await crypto.subtle.encrypt({name:'AES-GCM',iv},await key(password,salt),enc.encode(JSON.stringify(data)));return JSON.stringify({format:'ironpulse-encrypted',version:1,salt:b64(salt),iv:b64(iv),payload:b64(new Uint8Array(encrypted))});}
export function validateSnapshot(d:any):asserts d is Snapshot {
 const fail=()=>{throw Error('Backup contents are invalid or incompatible.');};
 const number=(v:any,min=0,max=1e15)=>typeof v==='number'&&Number.isFinite(v)&&v>=min&&v<=max;
 const string=(v:any,max=200)=>typeof v==='string'&&v.length<=max;
 const date=(v:any)=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v+'T12:00:00'));
 const ids=new Set(exercises.map(e=>e.id));const exerciseList=(v:any)=>Array.isArray(v)&&v.length<=500&&v.every(x=>ids.has(x));
 if(!d||!d.profile||!['sessions','meals','weights','checkins','routines','favorites'].every(k=>Array.isArray(d[k])&&d[k].length<100000))fail();
 const p=d.profile;if(p.id!=='personal'||!string(p.name,60)||!p.name.trim()||!number(p.weight,0,400)||!number(p.height,0,250)||!number(p.targetWeight,0,400)||!number(p.calorieTarget,0,10000)||!number(p.proteinTarget,0,500)||!string(p.goal,100)||!['light','dark'].includes(p.theme)||typeof p.reducedMotion!=='boolean')fail();
 if(!exerciseList(d.favorites))fail();
 if(d.workoutDraft!==undefined&&(!d.workoutDraft||!string(d.workoutDraft.name,80)||!exerciseList(d.workoutDraft.exerciseIds)))fail();
 let active=0;const seen=new Set<string>();
 for(const s of d.sessions){if(!string(s.id)||seen.has(s.id)||!string(s.name,80)||!date(s.day)||!number(s.start)||!(s.end===undefined||number(s.end,s.start))||!exerciseList(s.exerciseIds)||!s.exerciseIds.length||!Array.isArray(s.sets)||s.sets.length>100000||!(s.restEnd===null||number(s.restEnd))||!(s.pausedRest===null||number(s.pausedRest,0,86400)))fail();seen.add(s.id);if(!s.end)active++;for(const x of s.sets)if(!string(x.id)||!s.exerciseIds.includes(x.exerciseId)||!Number.isInteger(x.reps)||!number(x.reps,1,500)||!number(x.kg,0,1000))fail();}
 if(active>1)fail();
 for(const m of d.meals)if(!string(m.id)||!date(m.day)||!string(m.name,100)||!['Breakfast','Lunch','Dinner','Snack'].includes(m.category)||!number(m.calories,0,10000)||!number(m.protein,0,1000)||!number(m.carbs,0,2000)||!number(m.fat,0,1000))fail();
 for(const w of d.weights)if(!string(w.id)||!date(w.day)||!number(w.kg,20,400))fail();
 for(const c of d.checkins)if(!string(c.id)||!date(c.day)||!number(c.energy,1,5)||!number(c.soreness,1,5)||!number(c.sleep,0,24))fail();
 for(const r of d.routines)if(!string(r.id)||!string(r.name,80)||!exerciseList(r.exerciseIds))fail();
}
export async function decryptBackup(text:string,password:string):Promise<Snapshot>{if(text.length>20_000_000)throw Error('Backup is too large (20 MB maximum).');let b;try{b=JSON.parse(text);}catch{throw Error('This file is not a valid backup.');}if(b.format!=='ironpulse-encrypted'||b.version!==1||typeof b.salt!=='string'||typeof b.iv!=='string'||typeof b.payload!=='string')throw Error('Unsupported backup format.');let data;try{const salt=unb64(b.salt),iv=unb64(b.iv);if(salt.length!==16||iv.length!==12)throw Error();data=JSON.parse(dec.decode(await crypto.subtle.decrypt({name:'AES-GCM',iv},await key(password,salt),unb64(b.payload))));}catch{throw Error('Incorrect password or damaged backup.');}validateSnapshot(data);return data;}
