import type {Exercise} from './models';
export const gymExercises:Exercise[]=[
  {
    "id": "machine-chest-press",
    "name": "Machine chest press",
    "muscle": "Chest",
    "secondary": "Triceps and front shoulders",
    "equipment": "Chest press machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Chest press machine"
    ],
    "pattern": "Push",
    "cue": "Press forward with wrists straight and shoulders against the pad.",
    "steps": [
      "Adjust the seat so handles sit at mid-chest; keep feet flat.",
      "Press forward with wrists straight and shoulders against the pad.",
      "Return slowly without letting the stack slam."
    ]
  },
  {
    "id": "machine-shoulder-press",
    "name": "Machine shoulder press",
    "muscle": "Shoulders",
    "secondary": "Shoulder stabilizers",
    "equipment": "Shoulder press machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Shoulder press machine"
    ],
    "pattern": "Push",
    "cue": "Press overhead without arching your back or forcing the range.",
    "steps": [
      "Adjust the seat so handles begin around shoulder height.",
      "Press overhead without arching your back or forcing the range.",
      "Lower slowly to the starting position."
    ]
  },
  {
    "id": "leg-press",
    "name": "Leg press",
    "muscle": "Legs",
    "secondary": "Glutes and core",
    "equipment": "Leg press machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Leg press machine"
    ],
    "pattern": "Squat",
    "cue": "Press the platform away without snapping knees straight.",
    "steps": [
      "Adjust the seat and safety stops; plant feet fully on the platform.",
      "Press the platform away without snapping knees straight.",
      "Bend knees only as far as you can keep pelvis and back on the pad."
    ]
  },
  {
    "id": "seated-leg-curl",
    "name": "Seated leg curl",
    "muscle": "Hamstrings",
    "secondary": "Calf muscles",
    "equipment": "Seated leg curl machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Seated leg curl machine"
    ],
    "pattern": "Knee flexion",
    "cue": "Bend knees to pull the pad back without lifting your hips.",
    "steps": [
      "Align knees with the pivot, secure the thigh pad and place ankle pad above heels.",
      "Bend knees to pull the pad back without lifting your hips.",
      "Return slowly without dropping the stack."
    ]
  },
  {
    "id": "leg-extension",
    "name": "Leg extension",
    "muscle": "Legs",
    "secondary": "Glutes and core",
    "equipment": "Leg extension machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Leg extension machine"
    ],
    "pattern": "Knee extension",
    "cue": "Straighten knees through a comfortable range without kicking.",
    "steps": [
      "Align knees with the pivot and position the roller above your ankles.",
      "Straighten knees through a comfortable range without kicking.",
      "Bend knees slowly to return."
    ]
  },
  {
    "id": "pec-deck",
    "name": "Pec deck fly",
    "muscle": "Chest",
    "secondary": "Triceps and front shoulders",
    "equipment": "Pec deck machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Pec deck machine"
    ],
    "pattern": "Fly",
    "cue": "Bring the handles together with a small, steady elbow bend.",
    "steps": [
      "Set the seat and starting arms to a comfortable chest-level position.",
      "Bring the handles together with a small, steady elbow bend.",
      "Open slowly without forcing a deep shoulder stretch."
    ]
  },
  {
    "id": "machine-preacher-curl",
    "name": "Machine preacher curl",
    "muscle": "Biceps",
    "secondary": "Forearms",
    "equipment": "Preacher curl machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Preacher curl machine"
    ],
    "pattern": "Curl",
    "cue": "Curl the handles while keeping upper arms on the pad.",
    "steps": [
      "Adjust the seat so upper arms rest on the pad and elbows align with the pivot.",
      "Curl the handles while keeping upper arms on the pad.",
      "Lower slowly without forcing elbows straight."
    ]
  },
  {
    "id": "machine-row",
    "name": "Machine seated row",
    "muscle": "Back",
    "secondary": "Biceps and rear shoulders",
    "equipment": "Seated row machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Seated row machine"
    ],
    "pattern": "Pull",
    "cue": "Pull handles toward the ribs without shrugging or leaning back.",
    "steps": [
      "Adjust the chest pad and seat so handles are within comfortable reach.",
      "Pull handles toward the ribs without shrugging or leaning back.",
      "Extend arms slowly, keeping your chest supported."
    ]
  },
  {
    "id": "hip-abduction",
    "name": "Hip abduction machine",
    "muscle": "Glutes",
    "secondary": "Hamstrings and trunk stabilizers",
    "equipment": "Hip abduction machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Hip abduction machine"
    ],
    "pattern": "Abduction",
    "cue": "Open knees outward while keeping your pelvis still.",
    "steps": [
      "Adjust the pads against outer thighs and choose a comfortable starting width.",
      "Open knees outward while keeping your pelvis still.",
      "Return slowly without bouncing the pads."
    ]
  },
  {
    "id": "seated-calf-raise",
    "name": "Machine seated calf raise",
    "muscle": "Calves",
    "secondary": "Ankle stabilizers",
    "equipment": "Seated calf raise machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Seated calf raise machine"
    ],
    "pattern": "Raise",
    "cue": "Lift your heels smoothly while keeping ankles aligned.",
    "steps": [
      "Place balls of feet on the platform and secure the thigh pads; release the safety as instructed.",
      "Lift your heels smoothly while keeping ankles aligned.",
      "Lower heels through a comfortable range; re-engage the safety before exiting."
    ]
  },
  {
    "id": "machine-triceps",
    "name": "Machine triceps extension",
    "muscle": "Triceps",
    "secondary": "Elbow stabilizers",
    "equipment": "Triceps extension machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Triceps extension machine"
    ],
    "pattern": "Elbow extension",
    "cue": "Straighten your elbows while keeping upper arms supported.",
    "steps": [
      "Set seat and arm pad so elbows align with the machine pivot.",
      "Straighten your elbows while keeping upper arms supported.",
      "Bend elbows slowly to return."
    ]
  },
  {
    "id": "machine-hip-thrust",
    "name": "Hip thrust machine",
    "muscle": "Glutes",
    "secondary": "Hamstrings and trunk stabilizers",
    "equipment": "Hip thrust machine",
    "equipmentGroup": "Machines",
    "locations": [
      "gym"
    ],
    "requires": [
      "Hip thrust machine"
    ],
    "pattern": "Hinge",
    "cue": "Lift hips by squeezing glutes without arching the lower back.",
    "steps": [
      "Follow the machine instructions to secure the padded belt over hips and plant feet.",
      "Lift hips by squeezing glutes without arching the lower back.",
      "Lower slowly and engage the safety before leaving the machine."
    ]
  },
  {
    "id": "barbell-bench",
    "name": "Barbell bench press",
    "muscle": "Chest",
    "secondary": "Triceps and front shoulders",
    "equipment": "Barbell, bench, rack with safeties",
    "equipmentGroup": "Barbell",
    "locations": [
      "gym"
    ],
    "requires": [
      "Barbell, bench, rack with safeties"
    ],
    "pattern": "Push",
    "cue": "From above the chest, lower the bar under control with wrists above elbows.",
    "steps": [
      "Set rack safeties and use a spotter; plant feet and grip the bar evenly.",
      "From above the chest, lower the bar under control with wrists above elbows.",
      "Press up without bouncing; rack securely when finished."
    ]
  },
  {
    "id": "barbell-row",
    "name": "Barbell bent-over row",
    "muscle": "Back",
    "secondary": "Biceps and rear shoulders",
    "equipment": "Barbell",
    "equipmentGroup": "Barbell",
    "locations": [
      "gym"
    ],
    "requires": [
      "Barbell"
    ],
    "pattern": "Pull",
    "cue": "Pull the bar toward lower ribs without jerking your torso.",
    "steps": [
      "Hinge at hips with soft knees, braced trunk and the bar beneath shoulders.",
      "Pull the bar toward lower ribs without jerking your torso.",
      "Lower slowly while keeping the same hip hinge."
    ]
  },
  {
    "id": "barbell-squat",
    "name": "Barbell back squat",
    "muscle": "Legs",
    "secondary": "Glutes and core",
    "equipment": "Barbell, rack with safeties",
    "equipmentGroup": "Barbell",
    "locations": [
      "gym"
    ],
    "requires": [
      "Barbell, rack with safeties"
    ],
    "pattern": "Squat",
    "cue": "Brace, bend hips and knees, and squat only as deep as you can control.",
    "steps": [
      "Set safety arms and rack height; place bar across upper back, not the neck.",
      "Brace, bend hips and knees, and squat only as deep as you can control.",
      "Stand with knees following toes; return carefully to the rack."
    ]
  },
  {
    "id": "barbell-rdl",
    "name": "Barbell Romanian deadlift",
    "muscle": "Glutes",
    "secondary": "Hamstrings and trunk stabilizers",
    "equipment": "Barbell",
    "equipmentGroup": "Barbell",
    "locations": [
      "gym"
    ],
    "requires": [
      "Barbell"
    ],
    "pattern": "Hinge",
    "cue": "Push hips back, keeping the bar close and spine steady.",
    "steps": [
      "Stand tall holding the bar near thighs, with a soft knee bend.",
      "Push hips back, keeping the bar close and spine steady.",
      "At a comfortable hamstring stretch, drive hips forward to stand."
    ]
  },
  {
    "id": "lat-pulldown",
    "name": "Lat pulldown",
    "muscle": "Back",
    "secondary": "Biceps and rear shoulders",
    "equipment": "Lat pulldown station",
    "equipmentGroup": "Cable",
    "locations": [
      "gym"
    ],
    "requires": [
      "Lat pulldown station"
    ],
    "pattern": "Vertical pull",
    "cue": "Pull toward the upper chest without swinging or pulling behind the neck.",
    "steps": [
      "Secure the thigh pad and grip the bar comfortably with arms overhead.",
      "Pull toward the upper chest without swinging or pulling behind the neck.",
      "Extend arms slowly while keeping the torso steady."
    ]
  },
  {
    "id": "cable-pushdown",
    "name": "Cable triceps pushdown",
    "muscle": "Triceps",
    "secondary": "Elbow stabilizers",
    "equipment": "High pulley, rope attachment",
    "equipmentGroup": "Cable",
    "locations": [
      "gym"
    ],
    "requires": [
      "High pulley, rope attachment"
    ],
    "pattern": "Elbow extension",
    "cue": "Straighten elbows to push the rope down without moving upper arms.",
    "steps": [
      "Stand facing a high pulley with elbows near your sides.",
      "Straighten elbows to push the rope down without moving upper arms.",
      "Return slowly with wrists neutral."
    ]
  },
  {
    "id": "cable-curl",
    "name": "Cable biceps curl",
    "muscle": "Biceps",
    "secondary": "Forearms",
    "equipment": "Low pulley, bar attachment",
    "equipmentGroup": "Cable",
    "locations": [
      "gym"
    ],
    "requires": [
      "Low pulley, bar attachment"
    ],
    "pattern": "Curl",
    "cue": "Curl the bar without leaning backward or swinging.",
    "steps": [
      "Stand facing the low pulley with arms down and elbows beside your torso.",
      "Curl the bar without leaning backward or swinging.",
      "Lower slowly until arms are comfortably extended."
    ]
  },
  {
    "id": "cable-row",
    "name": "Seated cable row",
    "muscle": "Back",
    "secondary": "Biceps and rear shoulders",
    "equipment": "Seated cable row station",
    "equipmentGroup": "Cable",
    "locations": [
      "gym"
    ],
    "requires": [
      "Seated cable row station"
    ],
    "pattern": "Pull",
    "cue": "Pull the handle toward your ribs without rocking backward.",
    "steps": [
      "Sit with feet supported, soft knees and a tall torso.",
      "Pull the handle toward your ribs without rocking backward.",
      "Reach forward with arms while keeping your spine steady."
    ]
  },
  {
    "id": "band-curl",
    "name": "Resistance band curl",
    "muscle": "Biceps",
    "secondary": "Forearms",
    "equipment": "Resistance band",
    "equipmentGroup": "Resistance bands",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [
      "Resistance band"
    ],
    "pattern": "Curl",
    "cue": "Curl your hands toward shoulders while keeping elbows still.",
    "steps": [
      "Check the band for damage; stand securely on its middle with arms down.",
      "Curl your hands toward shoulders while keeping elbows still.",
      "Lower slowly while maintaining a secure grip."
    ]
  },
  {
    "id": "band-lateral",
    "name": "Band lateral raise",
    "muscle": "Shoulders",
    "secondary": "Shoulder stabilizers",
    "equipment": "Resistance band",
    "equipmentGroup": "Resistance bands",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [
      "Resistance band"
    ],
    "pattern": "Raise",
    "cue": "Raise arms out slightly forward, no higher than a comfortable shoulder height.",
    "steps": [
      "Stand on an intact band, holding its ends with elbows softly bent.",
      "Raise arms out slightly forward, no higher than a comfortable shoulder height.",
      "Lower slowly without shrugging or releasing the band."
    ]
  },
  {
    "id": "band-row",
    "name": "Anchored band row",
    "muscle": "Back",
    "secondary": "Biceps and rear shoulders",
    "equipment": "Resistance band, rated anchor",
    "equipmentGroup": "Resistance bands",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [
      "Resistance band",
      "Rated anchor"
    ],
    "pattern": "Pull",
    "cue": "Pull hands toward ribs while keeping torso steady and elbows close.",
    "steps": [
      "Attach an intact band to a rated chest-height anchor; check it cannot move.",
      "Pull hands toward ribs while keeping torso steady and elbows close.",
      "Extend arms slowly without losing your grip."
    ]
  },
  {
    "id": "band-chest",
    "name": "Anchored band chest press",
    "muscle": "Chest",
    "secondary": "Triceps and front shoulders",
    "equipment": "Resistance band, rated anchor",
    "equipmentGroup": "Resistance bands",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [
      "Resistance band",
      "Rated anchor"
    ],
    "pattern": "Push",
    "cue": "From bent elbows, press hands forward with ribs down and stable footing.",
    "steps": [
      "Secure an intact band to a rated anchor behind you at chest height.",
      "From bent elbows, press hands forward with ribs down and stable footing.",
      "Return slowly; never use an unsecured door or furniture as an anchor."
    ]
  },
  {
    "id": "kb-deadlift",
    "name": "Kettlebell deadlift",
    "muscle": "Glutes",
    "secondary": "Hamstrings and trunk stabilizers",
    "equipment": "Kettlebell",
    "equipmentGroup": "Kettlebell",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [
      "Kettlebell"
    ],
    "pattern": "Hinge",
    "cue": "Push through your feet to stand tall with the bell close.",
    "steps": [
      "Place the bell between your feet; hinge and bend knees to grasp it with a steady spine.",
      "Push through your feet to stand tall with the bell close.",
      "Hinge and bend knees to return it gently to the floor."
    ]
  },
  {
    "id": "kb-squat",
    "name": "Kettlebell goblet squat",
    "muscle": "Legs",
    "secondary": "Glutes and core",
    "equipment": "Kettlebell",
    "equipmentGroup": "Kettlebell",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [
      "Kettlebell"
    ],
    "pattern": "Squat",
    "cue": "Bend hips and knees, keeping heels grounded and knees tracking toes.",
    "steps": [
      "Hold the bell close to your chest with feet in a comfortable stance.",
      "Bend hips and knees, keeping heels grounded and knees tracking toes.",
      "Push through the whole foot to stand."
    ]
  },
  {
    "id": "bodyweight-squat",
    "name": "Bodyweight squat",
    "muscle": "Legs",
    "secondary": "Glutes and core",
    "equipment": "Bodyweight",
    "equipmentGroup": "Bodyweight",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [],
    "pattern": "Squat",
    "cue": "Bend hips and knees to a depth you can control, keeping heels down.",
    "steps": [
      "Stand with feet in a comfortable stance and arms forward for balance.",
      "Bend hips and knees to a depth you can control, keeping heels down.",
      "Stand tall without bouncing."
    ]
  },
  {
    "id": "incline-pushup",
    "name": "Incline push-up",
    "muscle": "Chest",
    "secondary": "Triceps and front shoulders",
    "equipment": "Stable bench",
    "equipmentGroup": "Bodyweight",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [
      "Bench"
    ],
    "pattern": "Push",
    "cue": "Lower your chest toward the surface with your body in one line.",
    "steps": [
      "Place hands on a fixed, stable elevated surface and walk feet back.",
      "Lower your chest toward the surface with your body in one line.",
      "Press away without letting your hips sag."
    ]
  },
  {
    "id": "barbell-curl",
    "name": "Barbell curl",
    "muscle": "Biceps",
    "secondary": "Forearms",
    "equipment": "Barbell",
    "equipmentGroup": "Barbell",
    "locations": [
      "gym"
    ],
    "requires": [
      "Barbell"
    ],
    "pattern": "Curl",
    "cue": "Curl the bar without swinging your hips or bending wrists back.",
    "steps": [
      "Stand tall holding the bar with palms forward and elbows at your sides.",
      "Curl the bar without swinging your hips or bending wrists back.",
      "Lower slowly to a comfortable straight-arm position."
    ]
  },
  {
    "id": "barbell-bridge",
    "name": "Barbell glute bridge",
    "muscle": "Glutes",
    "secondary": "Hamstrings and trunk stabilizers",
    "equipment": "Barbell, hip pad",
    "equipmentGroup": "Barbell",
    "locations": [
      "gym"
    ],
    "requires": [
      "Barbell, hip pad"
    ],
    "pattern": "Hinge",
    "cue": "Brace and squeeze glutes to lift hips without arching your back.",
    "steps": [
      "Lie on the floor with knees bent; position a padded bar securely across hips.",
      "Brace and squeeze glutes to lift hips without arching your back.",
      "Lower gently and remove the bar safely before sitting up."
    ]
  },
  {
    "id": "bird-dog",
    "name": "Bird dog",
    "muscle": "Core",
    "secondary": "Trunk and hip stabilizers",
    "equipment": "Bodyweight",
    "equipmentGroup": "Bodyweight",
    "locations": [
      "home",
      "gym"
    ],
    "requires": [],
    "pattern": "Stability",
    "cue": "Reach one arm and the opposite leg out while keeping hips level.",
    "steps": [
      "Start on hands and knees with hands under shoulders and knees under hips.",
      "Reach one arm and the opposite leg out while keeping hips level.",
      "Return slowly and switch sides; one side counts as one repetition."
    ]
  },
  {
    "id": "incline-barbell",
    "name": "Incline barbell press",
    "muscle": "Upper chest",
    "secondary": "Triceps and front shoulders",
    "equipment": "Barbell, incline bench, rack with safeties",
    "equipmentGroup": "Barbell",
    "locations": [
      "gym"
    ],
    "requires": [
      "Barbell, incline bench, rack with safeties"
    ],
    "pattern": "Push",
    "cue": "Lower the bar toward upper chest with wrists above elbows.",
    "steps": [
      "Set a modest bench incline and rack safeties; use a spotter and plant feet.",
      "Lower the bar toward upper chest with wrists above elbows.",
      "Press up under control and rack securely when finished."
    ]
  }
];
