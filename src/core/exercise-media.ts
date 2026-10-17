import {gymExercises} from './gym-exercises';
export interface ExerciseIllustration {src:string;viewBox:string;kind:'generated-two-position';positions:[{label:string;cue:string},{label:string;cue:string}];returnCue:string}
const rects=['2 2 623 623','629 2 623 623','2 629 623 623','629 629 623 623'];
const sheets=['arms-chest','shoulders-back','legs-glutes','bodyweight'];
const entries:[string,number,number,string,string,string,string,string][]=[
 ['db-curl',0,0,'Arms down','Stand tall, elbows beside your body and palms facing forward.','Curl up','Bend your elbows to raise the weights without swinging.','Lower slowly to the starting position.'],
 ['hammer-curl',0,1,'Arms down','Hold the weights at your sides with palms facing inward.','Curl up','Keep that neutral grip as you curl the weights toward your shoulders.','Lower slowly, keeping your upper arms still.'],
 ['floor-press',0,2,'Weights lowered','Lie on the floor with knees bent. Keep forearms upright and upper arms lightly on the floor.','Press up','Press the weights above your chest without bouncing.','Lower gently until your upper arms meet the floor.'],
 ['incline-press',0,3,'Weights lowered','Use a stable modest incline. Keep feet planted and weights beside the upper chest.','Press up','Press above your upper chest with wrists stacked over your elbows.','Lower through a comfortable, controlled range.'],
 ['lateral-raise',1,0,'Arms down','Stand tall with light weights and a small bend in your elbows.','Raise out','Lift out to the sides, slightly forward, without shrugging or swinging.','Lower slowly to your sides.'],
 ['overhead-press',1,1,'Shoulder level','Hold weights near your shoulders, keeping your ribs over your pelvis.','Press overhead','Press upward without leaning back or forcing a painful range.','Lower under control to shoulder level.'],
 ['db-row',1,2,'Arms lowered','Hinge at the hips, keep a steady spine and let your arms hang below you.','Pull up','Pull your elbows back and weights toward your lower ribs.','Lower the weights while keeping your torso still.'],
 ['reverse-fly',1,3,'Arms lowered','Hinge at the hips with light weights below your chest.','Open out','Lift your arms out to the sides with a small elbow bend.','Lower slowly without shrugging or swinging.'],
 ['goblet-squat',2,0,'Stand tall','Hold one dumbbell close to your chest. Keep your whole foot grounded.','Lower down','Bend hips and knees together through a comfortable range, knees following toes.','Push through your feet to stand tall again.'],
 ['db-rdl',2,1,'Stand tall','Hold the weights in front of your thighs with a soft bend in your knees.','Hinge down','Push your hips back. Keep your spine steady and weights close to your legs.','Stop at a comfortable hamstring stretch, then stand using your hips.'],
 ['reverse-lunge',2,2,'Stand tall','Begin with feet hip-width apart and your torso upright.','Step back & lower','Step one foot back and bend both knees while keeping the front foot flat.','Push through the front foot to return. Repeat on the other side.'],
 ['glute-bridge',2,3,'Hips lowered','Lie on your back with knees bent and feet planted.','Lift hips','Squeeze your glutes to raise your hips without arching your lower back.','Lower your hips gently to the floor.'],
 ['push-up',3,0,'Arms straight','Place hands slightly wider than shoulders and keep your body in a straight line.','Lower chest','Bend your elbows and lower your chest while keeping your trunk steady.','Press back up as one unit. Use a stable elevated surface if needed.'],
 ['close-pushup',3,1,'Arms straight','Place hands near shoulder-width under your chest; keep your trunk firm.','Lower chest','Bend your elbows toward your sides without forcing your wrists.','Press back up without letting your hips sag.'],
 ['calf-raise',3,2,'Heels down','Stand near a stable support with your feet flat on the floor.','Heels up','Rise onto the balls of your feet without rolling your ankles outward.','Lower your heels slowly to the floor.'],
 ['dead-bug',3,3,'Arms & knees up','Lie on your back with arms raised and hips and knees bent.','Extend opposites','Extend one arm and the opposite leg only as far as you can without arching your back.','Return to the start and switch sides. Keep your trunk still.']
];
export const exerciseIllustrations:Record<string,ExerciseIllustration>=Object.fromEntries(entries.map(([id,sheet,cell,a,ac,b,bc,returnCue])=>[id,{src:`/media/positions-${sheets[sheet]}-v2.png`,viewBox:rects[cell],kind:'generated-two-position',positions:[{label:a,cue:ac},{label:b,cue:bc}],returnCue}]));

const dividers=[627,592,575,570,598,550,597,597];
gymExercises.forEach((e,i)=>{const sheet=Math.floor(i/4),cell=i%4,y=cell<2?2:dividers[sheet]!+4,h=cell<2?dividers[sheet]!-6:1252-y;exerciseIllustrations[e.id]={src:`/media/gym-${sheet+1}-v3.png`,viewBox:`${cell%2?629:2} ${y} 623 ${h}`,kind:'generated-two-position',positions:[{label:'Start & setup',cue:e.steps[0]!},{label:'Move with control',cue:e.steps[1]!}],returnCue:e.steps[2]!};});
