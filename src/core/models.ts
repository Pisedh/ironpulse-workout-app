export interface Profile { id:string; name:string; weight:number; height:number; targetWeight:number; calorieTarget:number; proteinTarget:number; goal:string; theme:'dark'|'light'; reducedMotion:boolean }
export interface SetLog { id:string; exerciseId:string; reps:number; kg:number }
export interface Session { id:string; name:string; start:number; end?:number; day:string; exerciseIds:string[]; sets:SetLog[]; restEnd:number|null; pausedRest:number|null }
export interface Meal { id:string; day:string; name:string; category:string; calories:number; protein:number; carbs:number; fat:number }
export interface Weight { id:string; day:string; kg:number }
export interface CheckIn { id:string; day:string; energy:number; sleep:number; soreness:number }
export interface Exercise { id:string; name:string; muscle:string; secondary:string; equipment:string; equipmentGroup:string; locations:string[]; requires:string[]; pattern:string; cue:string; steps:string[] }
export interface Routine { id:string; name:string; exerciseIds:string[] }
export interface Snapshot { profile:Profile; sessions:Session[]; meals:Meal[]; weights:Weight[]; checkins:CheckIn[]; routines:Routine[]; favorites:string[]; workoutDraft?:{name:string;exerciseIds:string[]} }
