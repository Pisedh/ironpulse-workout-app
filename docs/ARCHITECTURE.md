# Product specification and architecture

## Delivery boundary

The first two requested phases define the system and establish a functioning app shell. This release also implements a connected subset of training, nutrition, progress, coaching and backup to validate the local data architecture. Later phases remain explicit work, not completed screens.

## Product feature map

| Area | This release | Full target / next deliverable |
|---|---|---|
| Application foundation | Vue, TS, Vite, Tailwind, Pinia, Router; offline manifest/caching | Native packaging and release lifecycle |
| Accounts | Single personal workspace | Offline multi-user login, salted slow hashes, per-profile keys, lock lifecycle |
| Onboarding | Editable profile and manual targets | Multi-step consent/preferences, equipment, schedule, exclusions |
| Knowledge | 16 authored exercise references and generated two-position illustrations; primary target and equipment filters | 150+ reviewed entries, detailed anatomy, evidence and license ledger |
| Anatomy | Original stylized 2D artwork and accessible muscle buttons | Interactive optimized 3D body, front/back/side, multi-selection |
| Tutorials | Two-position still illustrations and step cues in library, details and live workout; video/3D unavailable | Reviewed local video/GLB packs, install manifest and storage validation |
| Workouts | Ordered saved routines and completed-session records | Program generator, calendar, supersets/circuits, substitutions |
| Live training | Reps/load logging, rest pause/extend/skip, resume and finish | Timed exercises, intervals, PRs, effort and pain handling |
| Nutrition | Manual food-label entries; daily totals and history | Verified food database, serving conversion, recipes, budget/meal planning |
| Progress | Weight chart/table, session count and volume | More body measures, photos, strength series, robust trend forecasts |
| Coach | Explainable fatigue/sleep/history rules | Rule coverage, adherence, balanced recommendations, optional local inference |
| Reminders | None | PWA in-app due states; native OS local notification adapter |
| Data protection | Atomic saves, encrypted export/import and deletion | Encrypted live records, migration fault tests and conflict detection |
| Motivation | Neutral completion feedback | Optional milestones that do not punish recovery |
| Localization | English, kg/cm, local calendar dates | Translation keys, Khmer, imperial display/input |
| Accessibility | Labels, keyboard controls, contrast-aware themes, reduced motion | Formal keyboard/screen-reader audit and larger text controls |

## Final architecture decisions

- Keep the frontend and fitness logic independent of server runtime. Static hosting distributes files only.
- Vue 3 Composition API with strict TypeScript. Route bundles are lazy-loaded. Pinia exposes shared state and actions; views do not write directly to IndexedDB.
- Dexie provides browser schema versioning and atomic IndexedDB writes. A repository boundary (`load/save/clear` now, entity methods later) enables a future SQLite adapter without changing fitness rules.
- Browser cache stores application assets; IndexedDB stores records. Media packs will use a manifest, content hashes, verified asset sizes and platform-specific file stores. Never mix media blobs into the current JSON snapshot.
- Do not load Three.js or a model on the dashboard. Future media components load on demand, cap device pixel ratio, stop when hidden and explicitly dispose resources. This release uses zero continuously rendered 3D scenes.
- Rule engine first; no on-device LLM until measured benefit justifies model size and heat. Current advice is deterministic and described as such.
- Use native local notifications only in a future Capacitor adapter. Web timers are UI aids, not a closed-app scheduling service.
- No cloud account, telemetry, inference API, remote font, embedded streaming tutorial or nutrition API.

## Data flow

View inputs → typed Pinia actions → repository → IndexedDB atomic write.
Stored sessions/check-ins → pure local rules → explanation → optional user action.
Stored meals/weights/sessions → computed aggregates → dashboard/charts.
Explicit export → snapshot → PBKDF2 key derivation → AES-GCM file.
Import → format/size check → decrypt/authenticate → content validation → preview → explicit replacement → atomic write.

## Actual v1 schema

Database: `ironpulse-local-v1`, version 1. Store: `workspace`, primary key `id`.
One row `personal` holds a typed Snapshot of Profile, Session[], Meal[], Weight[], CheckIn[], Routine[], favorites[], and an optional workoutDraft (name + ordered exercise IDs). Old snapshots remain compatible without that field. An individual Session embeds ordered exercise IDs and set logs. This intentionally permits one atomic save across current entities. It is a foundation trade-off, not the full normalized schema from the request.

## Planned normalized schema (not implemented)

All personal tables use UUIDs and `userId` indexes. Dates store an explicit local day and timestamps use epoch milliseconds. Exercise and food references use stable IDs.

| Store | Keys / indexes | Relationships |
|---|---|---|
| Users | id, unique normalized username | Owns profile, preferences and personal records |
| UserProfiles | userId | 1:1 User; physical/preferences fields |
| UserPreferences | userId | 1:1 User; units, accessibility, schedule |
| Exercises | id, equipment, pattern, difficulty | Static seed version + custom content |
| ExerciseMuscles | [exerciseId+muscleId], muscleId | Primary/secondary/stabilizer role |
| ExerciseMedia | id, exerciseId, packId, status | Local path, type, bytes, digest, license |
| WorkoutPrograms | id, userId | Schedule and program weeks |
| WorkoutTemplates | id, userId, programId | Ordered exercises with set/rep/rest rules |
| WorkoutSessions | id, userId, [userId+startedAt], status | Snapshot template; preserve historical names |
| ExerciseSetLogs | id, sessionId, exerciseId | Reps, total load, RIR, completed time |
| PersonalRecords | [userId+exerciseId+recordType] | Derived from completed valid sets |
| FoodItems | id, name, sourceId | Bundled licensed nutrition data |
| CustomFoods | id, userId | User portion and nutrient values |
| Recipes | id, userId | Ingredient references and yields |
| MealLogs | id, userId, [userId+localDay] | Snapshotted nutrients and source |
| BodyMeasurements | id, userId, [userId+localDay] | Type, normalized value, unit |
| DailyCheckIns | [userId+localDay] | Subjective energy, sleep and soreness |
| NutritionTargets | id, userId, effectiveDate | Formula inputs/version or manual override |
| Recommendations | id, userId, createdAt | Rule ID, input references, explanation |
| CoachFeedback | id, userId, recommendationId | Accepted/dismissed/user correction |
| NotificationPreferences | userId | Permission state, quiet hours, local IDs |
| Achievements | [userId+achievementId] | Optional local milestone evidence |
| AppSettings | key | Seed versions, media registry, app version |
| DatabaseVersions | version | Migration journal and verification metadata |

Dexie relations are application-enforced, not SQL foreign keys. Deleting a user must cascade all user-scoped stores in a transaction. Migration from the snapshot must copy/verify counts in one transaction and retain export recovery. Do not erase old stores before successful verification. Native SQLite should use explicit foreign keys and a tested adapter contract.

## Security model

Assets and local device access are trusted only within the limits of the OS/browser. Main threats: device loss, browser data deletion, malicious backup input, XSS, dependency compromise and users confusing a local profile with a cloud account.

Current defenses: no HTML injection for user text, no remote scripts at runtime, no external fitness-data requests, authenticated encrypted export, restore validation and destructive-action confirmation. Live data is plaintext. Multiple tabs can last-write-win; use one tab in v0.1.

Future local accounts need separate encryption keys per user, slow password verification and explicit recovery limitations. Hashing a PIN is not equivalent to securing the database. Prefer secure native key storage where possible; a web lock does not protect against malicious same-origin script. Never store a password or raw secret key in localStorage. Session locking must survive lifecycle events without requiring a server.

## UI specification

- Charcoal background #111410, surface #1a1e18, electric lime #c4f568, blue and amber macro accents.
- System font stack, no remote font call. Large editorial workout headline, small uppercase section captions, strong numeric hierarchy.
- Desktop sidebar / mobile bottom navigation: Home, Train, Nutrition, Progress, AI Coach. Profile settings accessible from the avatar.
- Cards use 12–15 px corner radii and 18–24 px internal spacing. Grid spacing follows 8 px multiples where practical; fine optical spacing adjusts labels.
- Touch inputs at least 44 px tall; compact secondary icons need expansion during accessibility hardening.
- Motion limited to short hover/fill transitions; respect OS and user reduced-motion setting. No fake charts, readiness scores or fabricated history.
- Empty states explain how to create real data. No loading skeletons for synchronous values.

## Staged continuation plan

| Phase | Next complete increment / acceptance gate |
|---|---|
| 1 Architecture | This document, schema and constraints delivered |
| 2 Initial project | Working shell, routes, design tokens, storage and PWA build delivered; device installation verification outstanding |
| 3 Accounts/onboarding | Multi-profile encrypted storage, password/PIN lifecycle, migration and onboarding; offline create/reopen/delete tests |
| 4 Exercise library | 150 distinct reviewed entries, source/license ledger and all requested metadata; strict equipment fixtures |
| 5 Muscle explorer | Accurate anatomy mapping, front/back, accessible multi-selection, optional 3D fallback |
| 6 Tutorials | Reviewed essential media pack; every advertised tutorial plays offline; hashes/size/license verified |
| 7 Planning | Balanced equipment-aware generators and editable templates; time/volume/recovery constraints tested |
| 8 Live tracker | Expand current session tracker with RPE, PRs, circuits and timed movement modes; crash/restart/device gates |
| 9 Nutrition | Verified food seeds, gram/serving conversion, formulas and safe applicability guards; recipes and targets |
| 10 Analytics | Body measures, photos, trends and clear uncertainty; derived-data cross-checks |
| 11 Coach | Expanded explainable rules using actual history, conflict handling and user overrides |
| 12 Reminders | Native local scheduling, permissions, quiet hours, cancel/reschedule; real OS delivery tests |
| 13 Hardening | Entity migration, security/dependency review, backup corruption cases, accessibility and thermal budgets |
| 14 Distribution | Capacitor projects, Android release signing, macOS/Xcode iOS signing; airplane-mode regression on real phones |

## Performance budgets

Targets, not device measurements: core application JS below 120 KB gzip; each initial feature route below 30 KB gzip; app precache below 1 MB excluding optional media; no 3D loop on main views; timer refresh at 1 Hz only in training route. Snapshot writes are acceptable only while measured latency remains under 100 ms for realistic personal history; normalize before reaching larger histories.

Must measure later: midrange Android cold start, input delay, scroll FPS, peak heap, thermal/battery impact, SQLite/IndexedDB write latency, media-pack install/eviction behavior. No claims are made for these unmeasured properties.

## Primary implementation references

- https://vite.dev/guide/ — setup/build environment.
- https://dexie.org/docs/Version/Version.stores() — schema declaration/versioning.
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation — service-worker cache and lifecycle constraints.
- https://capacitorjs.com/docs/ios — future Apple native platform setup.
- https://www.cdc.gov/physical-activity-basics/adding-adults/what-counts.html — general muscle-strengthening context, not a review of this exercise catalog.

Exercise reference text is independently authored and has not received professional technique review. AI-generated still illustration artwork is included; no verified video or interactive 3D tutorial media is included.

## 0.2 UX decisions

Separate browsing, draft editing, saved routines and active sessions so the user sees the actions relevant to their current task. Keep exercise names and muscle/equipment labels visible. Show both positions together instead of autoplay, allowing comparison without timing pressure or continuous rendering. Each visual is accompanied by text so the cue does not depend on reading an image. Native dialogs contain focus for exercise instructions and destructive decisions. Avoid a generic up/down label where it does not fit: push-ups lower then return; reverse fly opens outward; dead bug extends opposite limbs.

New diagrams add approximately 7.18 MiB. This deliberately exceeds the original essential-shell-only media budget while keeping each image under the Workbox default 2 MiB limit. No model inference or 3D rendering loop was added. Mobile thermal and visual QA remain outstanding.

PWA update prompt follows https://vite-pwa-org.netlify.app/frameworks/vue and saves state before the user-initiated update. No update is triggered during an active workout.
