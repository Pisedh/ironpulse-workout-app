import type {Exercise} from './models';
export const equipmentGroups=['All equipment','Bodyweight','Dumbbells','Barbell','Machines','Cable','Resistance bands','Kettlebell'];
export const homeEquipment=['Dumbbells','Bench','Resistance band','Rated anchor','Kettlebell'];
export function matchesEquipment(e:Exercise,location:string,group:string,available:string[]){return (location==='all'||e.locations.includes(location))&&(group==='All equipment'||e.equipmentGroup===group)&&(location!=='home'||e.requires.every(item=>available.includes(item)));}
export function sameMuscle(a:Exercise,b:Exercise){return a.id!==b.id&&a.muscle===b.muscle;}
export function replaceExercise(ids:string[],oldId:string,newId:string){return [...new Set(ids.map(id=>id===oldId?newId:id))];}
