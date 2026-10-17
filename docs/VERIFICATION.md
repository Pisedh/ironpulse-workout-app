# Version 0.3.0 verification

Production TypeScript/Vite build and 19 automated tests cover catalog IDs, home equipment requirements, location/category filters, primary-muscle alternatives, non-mutating draft replacement, persisted drafts, backward-compatible backups, session set validation, timer behavior and all 48 image mappings. Original PNG sheets are included with a 3 MiB per-file precache budget. New images were visually inspected as generated; illustrations do not certify technique. No browser automation surface was available, so responsive interactions, native dialog focus, actual service-worker updates and mobile installation remain unverified on a real device.

# Verification record

## Executed in this environment

- TypeScript / Vue template typecheck via `vue-tsc --noEmit`.
- Vite production build with generated PWA manifest and Workbox precache.
- Vitest tests in Node using fake-indexeddb for repository behavior. This simulates IndexedDB; it is not a substitute for browser persistence testing.
- Tests cover interrupted-session recovery, completed volume, meal persistence, historical weight ordering, same-day replacement, local calendar dates, timer catch-up, fatigue recommendation priority, invalid set inputs, encrypted round-trip, incorrect passwords, corrupted ciphertext and invalid imported values/references.

The terminal test result is authoritative. No Playwright/browser E2E, mobile screenshots, clinical review, signing, real-device benchmarks or thermal tests were performed. A supported browser automation surface was unavailable in this environment.

## Manual acceptance checklist — not yet run

1. On desktop Chrome, create a profile, switch light/dark, set reduced motion and reload.
2. Filter Dumbbells + Biceps; confirm no bench/cable/barbell exercise appears. Open cues; favorite a movement; clear/reapply filters.
3. Build and reorder a routine. Save it. Start, log two sets, close/reopen and check recovery. Finish and check aggregate volume.
4. Start rest, pause, reload, resume, leave for 90 seconds and return; expired timer should show zero. No closed-app sound is promised.
5. Add breakfast/lunch/dinner/snack. Reload; compare sums to a manual calculation. Delete and reuse an entry.
6. Add weights out of date order and two values for one day; latest date determines current weight. Compare chart table and range filter.
7. Check in with low energy and then higher energy; confirm explanation changes without altering any loads.
8. Export; reject wrong password; preview correct backup; replace in a fresh origin/device and compare records.
9. Deny storage or fill available quota; confirm visible failure and no false saved message.
10. Install through Android Chrome and iPhone Safari on HTTPS. Open all routes once, disconnect, close and relaunch. Exercise all core controls.
11. Remove connectivity / simulate static-host outage after cache completion; verify installed app launch. Repeat with cleared cache to document expected failure.
12. Test keyboard focus, screen-reader names, text zoom, narrow screens, safe areas and reduced motion.
13. Confirm Network tab contains no fitness-data upload, external API, analytics, fonts or images.
14. Before distributing: dependency vulnerability review, multi-tab conflict behavior, migration failure/rollback and native platform test suites.

## Master acceptance scenarios

A: account login not implemented; local workspace persistence unit-tested.
B: filtering/routines/manual sets implemented; tutorial asset requirement not satisfied.
C: manual meals implemented and persistence tested; real airplane-mode browser test outstanding.
D: weight records/chart implemented; visual device QA outstanding.
E: simple fatigue/sleep/history rules implemented; full adaptation engine outstanding.
F: generated offline precache built; airplane-mode phone launch unverified.
G: stored session restart recovery tested with fake-indexeddb.
H: no continuous 3D or ML inference; low-end-phone benchmark unverified.
I: encrypted export/decryption integrity tested; cross-device UI restore unverified.
J: no native local reminders implemented.

## Latest local result

All 9 Vitest tests passed after correcting session finalization to hold a stable session reference before changing its completion status. The Vue/TypeScript check and production build passed. The generated PWA precache contains 19 entries, approximately 304 KiB before compression. Core application JavaScript is approximately 80 KiB gzip. These are build artifact sizes, not phone performance benchmarks.

## Image integration update (0.1.1)

Production Vue/TypeScript build passed after adding images. Static checks confirm all 16 exercise IDs have an illustration viewport and the PNG is present in both the production output and generated service-worker precache. Image crop coordinates use the original 1254 × 1254 sheet. Browser visual inspection remains unperformed because the supported browser automation surface is unavailable. The original 304 KiB cache figure above predates images; this update adds approximately 1.83 MiB of local image data.


## Two-position / UX update (0.2.0)

All 16 exercises have two labeled poses, two distinct text cues and a return cue. Four AI-generated image sheets were visually inspected in the generation output; artwork is illustrative rather than professionally technique-verified. Each image is under 2 MiB. Checks cover image-to-exercise completeness, valid viewport boundaries, offline file sizes, draft persistence through reload, backward-compatible backup validation, chosen rest duration and rejection of set logs for exercises outside the current session.

Browser layout, real-device offline use and assistive technology validation remain unverified. No new browser availability is claimed. Manual follow-up: exercise the three training sections, change filters, add/remove/reorder, leave and return to a draft, open/close the two-position guide by keyboard, complete or discard a session, and test the update prompt after an additional release.

Final 0.2.0 result: Vue/TypeScript and Vite production build passed; all 14 automated tests passed. The generated offline manifest contains all four new sheets and excludes the older single-position sheet. Total precache: 23 entries, approximately 7,694 KiB. No browser/device benchmarks were performed.
