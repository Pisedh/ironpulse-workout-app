import type { Session, CheckIn } from './models';
export function localDay(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function volume(sessions:Session[]){return sessions.reduce((v,s)=>v+s.sets.reduce((n,x)=>n+x.reps*x.kg,0),0);}
export function remaining(end:number|null,now=Date.now()){return end===null?0:Math.max(0,Math.ceil((end-now)/1000));}
export function timeLabel(seconds:number){return `${Math.floor(seconds/60).toString().padStart(2,'0')}:${Math.floor(seconds%60).toString().padStart(2,'0')}`;}
export function coachAdvice(sessions:Session[],check?:CheckIn){
 if(check&&(check.energy<=2||check.soreness>=4))return {title:'Make room for recovery.',body:'You reported low energy or high soreness. Consider a rest day or a shorter, easier session. Avoid movements that cause pain.',why:'Based on your latest check-in.'};
 if(check&&check.sleep<6)return {title:'Keep today manageable.',body:'You logged a short night of sleep. Consider lowering the effort today and prioritizing rest.',why:'Based on your logged sleep, not a medical assessment.'};
 if(!sessions.length)return {title:'Your first session starts here.',body:'Choose a few familiar movements and a load you can control. Log your repetitions so your next session has a useful reference.',why:'There are no completed workouts yet.'};
 const recent=sessions[0];return {title:'Build on your last session.',body:`You logged ${recent.sets.length} sets in ${recent.name}. Review those numbers before training again. Repeat a comfortable load before considering a small increase.`,why:'Based on your most recent completed workout. No automatic load changes.'};
}
export function validNumber(value:unknown,min:number,max:number){return typeof value==='number'&&Number.isFinite(value)&&value>=min&&value<=max;}
