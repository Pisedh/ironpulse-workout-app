import {defineStore} from 'pinia';
import {ref,computed} from 'vue';
import type {Snapshot,Session,Meal,CheckIn} from '../core/models';
import {repository} from '../core/repository';
import {localDay,validNumber} from '../core/logic';
const fresh=():Snapshot=>({profile:{id:'personal',name:'Athlete',weight:0,height:0,targetWeight:0,calorieTarget:0,proteinTarget:0,goal:'Build muscle',theme:'dark',reducedMotion:false},sessions:[],meals:[],weights:[],checkins:[],favorites:[],routines:[]});
export const useApp=defineStore('app',()=>{
 const data=ref<Snapshot>(fresh()),ready=ref(false),error=ref(''),saving=ref(false),notice=ref('');let queue=Promise.resolve();
 const today=ref(localDay());const active=computed(()=>data.value.sessions.find(x=>!x.end));const completed=computed(()=>data.value.sessions.filter(x=>x.end).sort((a,b)=>b.start-a.start));const meals=computed(()=>data.value.meals.filter(x=>x.day===today.value));const totals=computed(()=>meals.value.reduce((s,m)=>({calories:s.calories+m.calories,protein:s.protein+m.protein,carbs:s.carbs+m.carbs,fat:s.fat+m.fat}),{calories:0,protein:0,carbs:0,fat:0}));
 async function init(){try{data.value=(await repository.load())??fresh();}catch{error.value='Unable to open device storage. Enable browser storage and reload before logging data.';}finally{ready.value=true;}}
 async function save(){const snapshot=JSON.parse(JSON.stringify(data.value));saving.value=true;queue=queue.catch(()=>{}).then(()=>repository.save(snapshot));try{await queue;error.value='';}catch{error.value='Could not save. Storage may be full or unavailable. Keep this page open and retry.';throw new Error(error.value);}finally{saving.value=false;}}
 async function start(ids:string[],name='Custom workout'){if(active.value) return;const s:Session={id:crypto.randomUUID(),name,start:Date.now(),day:localDay(),exerciseIds:[...ids],sets:[],restEnd:null,pausedRest:null};data.value.sessions.push(s);await save();}
 async function addSet(exerciseId:string,reps:number,kg:number,restSeconds=60){if(!active.value||!validNumber(reps,1,500)||!Number.isInteger(reps)||!validNumber(kg,0,1000)||!validNumber(restSeconds,0,600)||!active.value.exerciseIds.includes(exerciseId))throw Error('Enter valid repetitions and load.');active.value.sets.push({id:crypto.randomUUID(),exerciseId,reps,kg});active.value.restEnd=Date.now()+restSeconds*1000;active.value.pausedRest=null;await save();}
 async function finish(){const session=active.value;if(!session||!session.sets.length)return;session.restEnd=null;session.end=Date.now();await save();notice.value='Workout saved. Every session counts.';}
 async function addMeal(m:Omit<Meal,'id'|'day'>){data.value.meals.push({...m,id:crypto.randomUUID(),day:localDay()});await save();}
 async function addWeight(kg:number,day:string){if(!validNumber(kg,20,400))throw Error('Enter a weight from 20 to 400 kg.');data.value.weights=data.value.weights.filter(w=>w.day!==day);data.value.weights.push({id:crypto.randomUUID(),day,kg});data.value.weights.sort((a,b)=>a.day.localeCompare(b.day));data.value.profile.weight=data.value.weights.at(-1)!.kg;await save();}
 async function checkIn(values:Omit<CheckIn,'id'|'day'>){data.value.checkins=data.value.checkins.filter(x=>x.day!==localDay());data.value.checkins.push({...values,id:crypto.randomUUID(),day:localDay()});await save();}
 async function reset(){await queue.catch(()=>{});await repository.clear();data.value=fresh();}
 return {data,ready,error,saving,notice,today,active,completed,meals,totals,init,save,start,addSet,finish,addMeal,addWeight,checkIn,reset};
});
