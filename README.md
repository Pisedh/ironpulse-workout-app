## Gym and home expansion — 0.3.0

48 exercises with two-position AI illustrations and written setup / movement / return instructions. Explore includes All workouts, At home, and At the gym; seven equipment categories; and a home equipment checklist. Home results require every listed accessory. Use All workouts for a full home gym with barbells or machines.

Movement guides offer same-primary-muscle alternatives, mark similar movement patterns, and allow explicit replacement in the workout draft. These are training choices, not equivalent loads or individualized prescriptions. Existing exercise IDs, saved routines, session history and backups remain compatible. Machine load entries refer to that particular machine's label.

All 12 illustration sheets are bundled for offline use after the service worker finishes downloading. The initial offline download is approximately 24 MB. Images are AI illustrations, not certified technique demonstrations; real machine designs vary. Browser/device interaction and offline behavior still need real-device verification.

# IRONPULSE AI — Visual training release 0.2.0

Train Smarter. Grow Stronger. Own Your Progress.

A runnable Vue 3 / TypeScript / Vite application with Tailwind, Pinia, Vue Router, Dexie IndexedDB and a generated offline service worker. This is an initial connected release, NOT completion of the full 29-section master specification.

## Run in VS Code

Use Node 22.12+ (Node 22 LTS recommended) and npm. Extract this project into a normal directory, open that directory in VS Code, then run:

```bash
npm ci
npm run dev
```

Open the localhost address printed by Vite. If Windows PowerShell blocks npm.ps1, use VS Code's Command Prompt terminal or `npm.cmd ci` / `npm.cmd run dev`.

To check and run the production PWA:

```bash
npm test
npm run build
npm run preview
```

Open the printed **localhost** preview URL. Service workers are not enabled in the development server. An HTTP LAN IP on your phone is not a secure context; host `dist/` with HTTPS for phone installation. Do not double-click index.html or open it through file://.

For static hosting, upload the contents of `dist/` to an HTTPS origin root. Hash routes remove the need for server-side SPA rewrites. Do not embed the app inside an unrelated origin's iframe when testing installation. This code has no fitness-data backend.

## First use

1. Open Profile & settings and enter a display name and optional goals. Blank optional metrics use 0. All nutrition targets are manually chosen.
2. Go to Training. Filter by muscle/equipment, inspect text cues, select movements with +, reorder and save a routine.
3. Start a session. Enter actual reps and **total external load** (both dumbbells combined). Log each set. A 60-second rest starts after logging; pause, resume, extend or skip it.
4. Finish and save. Closing during a session preserves saved sets and the rest deadline. Elapsed workout time includes time while the app is closed.
5. Nutrition accepts your own food-label/portion totals. Log all four macro/energy values; use the date selector to inspect prior days.
6. Progress records one weight per date and shows your actual logs. Adding a historical entry does not overwrite a newer current weight.
7. AI Coach is an explicit, deterministic rule engine. A check-in changes its explanation; it never changes loads automatically.
8. Export an encrypted backup. Test decrypt-and-preview, inspect counts, then explicitly choose Replace & restore only when ready.

## Implemented now

- Responsive dark and light interfaces, reduced motion, desktop sidebar and mobile navigation.
- Separate route bundles and original lightweight SVG body artwork; no external font or image dependency.
- Single local personal workspace, versioned Dexie database, atomic snapshot saves and visible storage failure messages.
- 16 named exercises with generated two-position 3D-style still illustrations, authored text guidance, primary/secondary muscles, strict equipment filters, favorites and detail dialogs. Both start and finish positions appear in the library, details and active workout, with two written position cues and a return instruction.
- Routine selection, naming, reordering, persistence, deletion and session start.
- Manual rep/load recording, set removal, restart recovery, timestamp-based rest timer, completion and history.
- Custom meal entries, energy/macronutrient totals, reuse of existing entries and deletion.
- Weight logging, date-range chart, exact-values table, session/volume summaries.
- Daily energy/soreness/sleep check-ins and explainable local rules.
- AES-256-GCM encrypted backup with PBKDF2-SHA-256 (600,000 iterations), random salt/IV, authenticated integrity, validation, preview and replacement restore.
- Manifest, PNG icons, service worker and precached app/route assets; persistence request and platform installation instructions.

## Explicitly not complete

- Local password/PIN accounts, multi-profile isolation, onboarding wizard and encryption of the live database. This release is a **single unencrypted device workspace**. Backup encryption does not encrypt IndexedDB.
- 150-exercise reviewed dataset, videos, 3D human model/animations, media packs and technique certification. The 16-entry reference set has generated still images and text, not an adequate substitute for instruction by a qualified coach.
- Automatic training programs, supersets/circuits, advanced progression, warm-up/interval modes and PR detection.
- Bundled verified foods/recipes, budget planning, calorie equations, automatic dietary targets and forecasting.
- Progress photos/body circumferences, achievements, translation packs and imperial input.
- Native Capacitor projects, SQLite adapter, notifications, APK/AAB/IPA or signing.
- Full automated browser E2E, UI screenshot review, accessibility audit, and real Android/iPhone or thermal testing.

These are tracked in `docs/ARCHITECTURE.md`; they are not represented by fake working controls.

## Offline and device limitations

The service worker must finish installing online. Reopen the application and test every screen in airplane mode before relying on offline use. Core records never require a server request. A host outage does not invalidate an already installed cache; fresh installation, missing files, and updates still require the host. Browser storage may be deleted or evicted, including by clearing site data. Persistence requests are not a durability guarantee. Export backups regularly.

Private-host access/session handling is separate from the app's local data. The hosted private link's mobile install and outage behavior has not been tested; for distribution, validate an independent HTTPS static host or native package.

Timers recover from timestamps; browsers can suspend JS while backgrounded, so this release does not promise background alerts or continuous on-screen countdowns while closed. No closed-app notifications are implemented. Changing the system clock can affect elapsed/rest calculations.

Native iOS packaging requires Apple's toolchain and signing. Windows is suitable for web and Android development; do not expect this source archive to contain a signed iOS app.

## Security and backups

Live records are not encrypted. A local PIN would not by itself stop someone with device/browser access from reading IndexedDB. Secure your device. No credentials or health data are transmitted by application code. Static hosting can observe ordinary page requests.

Encrypted backups require a password of at least 12 characters. Use a strong unique passphrase and keep it separately; there is no recovery service. AES-GCM verifies integrity before parsing records. Import is capped at 20 MB, restricts the format version and validates known exercise references, types and numeric ranges. Restore is a replacement, not a merge. The previous database stays intact until the replacement write succeeds. Do not import untrusted files.

The app uses an atomic single-row snapshot for this small first release. It is unsuitable for a large media collection or long-lived multi-user history; normalize and migrate before scaling. Avoid using two tabs at the same time until conflict handling is added.

## Verification

See `docs/VERIFICATION.md` for actual executed checks, limits, and the manual phone checklist. Source code and a successful build are not proof of clinical accuracy, device compatibility or production readiness.

## Exercise images (0.1.1)

All 16 exercises now display their corresponding illustration. A shared local PNG is displayed through per-exercise SVG viewports; no external image request is needed. The original AI-generated artwork is included at `public/media/exercises-3d-v1.png`. The production service worker precaches it. These are still images, not videos, animated models or technique-certified demonstrations. To update an already installed PWA, reopen online and then close all app/browser tabs for this origin before opening it again, so the waiting worker can activate. Preserve site data; do not clear browser storage to update.

## User-friendly visual training (0.2.0)

- **Explore:** large exercise image cards, search, labeled muscle/equipment filters, favorites, reset filters and an optional collapsible body guide. Each card has View steps and Add/Added controls.
- **My workout:** your selected exercises, naming, move up/down, removal and a persistent draft. Draft changes save automatically; existing records are retained. Save as routine keeps a reusable copy.
- **Saved:** readable routine cards with previews and a Use this routine action.
- **Movement guide:** both positions of each exercise, written instructions for position 1 and position 2, and Return & repeat instructions. These are static generated images, not motion capture, videos or certified demonstrations.
- **Live session:** previous/next exercise controls, both-position guide, logged sets for the current exercise, manual actual repetitions/total external load, selectable rest duration, and separate finish/discard review dialogs.
- **Home:** a three-step first-workout introduction. Mobile controls have larger targets and more readable labels.
- **Updates:** new installations show offline readiness and future update prompts. Updating is disabled during an active session; saved workouts and drafts remain on the device.

Image sheets are `public/media/positions-*-v2.png`, four sheets with four exercises each. Their 16 display regions are defined in `src/core/exercise-media.ts`. Position captions remain accessible as text outside the images. The original generated artwork is preserved; browser SVG viewports select each exercise. The older one-position sheet is retained in source but excluded from the new precache. The production precache is approximately 7.51 MiB including new images; allow the initial download to finish before disconnecting.

Backups made before workout drafts existed remain valid. The optional draft field is validated when present. Saved sets can only reference an exercise in the active session.
