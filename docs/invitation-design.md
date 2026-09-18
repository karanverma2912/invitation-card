# Layered wedding invitation

The invitation keeps the existing maroon, cream and gold palette, family details,
ceremony schedule, mobile opening artwork and original photos.

## Responsive experience

- Hinged 3D doors introduce the invitation. The exit animation finishes before
  focus moves to the invitation heading.
- The couple portrait, hometown backdrop, gold arches, petals, date plaque and
  seal occupy separate depth planes. Fine mouse input adds a spring-driven tilt;
  touch input uses scroll-driven 3D rotation and parallax without intercepting native scrolling.
- The desktop hero places the invitation beside the portrait. Phones use a
  vertical composition with fluid image sizes and room for browser controls.
- Reduced-motion preferences disable the tilt, scroll movement and particles.
- Gallery photographs open in a native modal dialog with swipe, arrow-key and
  Escape support. Focus returns to the triggering photograph on close.
- Music starts synchronously when the guest taps Open our invitation. The persistent audio player can then be paused or resumed using the music control. Location and promise
  details work with touch and keyboard controls.

## Confirm the wedding date

The countdown targets **11 February 2027 at midnight in India**, assuming the upcoming February wedding. This fixed date is configured as `countdownDateISO` in `src/data/wedding.ts`; it does not roll into another year after expiry. The ceremony timestamp `dateISO` stays `null` until its exact time is confirmed, so no midnight ceremony calendar event is offered.

After confirming the year and time, set `dateISO` to an ISO 8601 date-time with
an explicit offset for India (`+05:30`). The calendar link uses that ceremony timestamp. The countdown separately targets the start of the wedding day. After that instant, the copy
says “Our forever has begun” rather than calling every following day the wedding
day. The calendar event currently lasts three hours; confirm that duration too.

The map link intentionally identifies Omkareshwar as a town. Add the exact
wedding venue once it has been confirmed.

## Photo asset

Original photos remain unchanged. `public/images/couple/couple-cutout.png` is a
new transparent derivative of `public/images/couple/together.jpeg`, prepared
with the built-in image-generation tool for the foreground scene. Review the
likeness before publishing; generative extraction may alter fine details.

Prompt used:

> Use case: background-extraction. Edit target: the provided original couple photograph. Asset type: a transparent PNG foreground layer for their personal wedding website. Remove ONLY the wall/background behind and between the two people, keeping both people together in exactly their original side by side positions. Preserve their actual identities, facial features, expressions, gaze, hair, skin, body shapes, pose, hands, red sari with gold details, jewelry, beige shirt and dark trousers EXACTLY as in the original. No beauty retouching or stylization. Keep original photographic texture. Crop excess empty space above heads and preserve both people down to the original bottom crop, no invented feet or changes of clothes. Clean accurate hair and fabric edges. Actual transparent alpha background, no solid backdrop, no checkerboard printed into the image. No text or other added objects.

## Local checks

Use the existing Yarn lockfile and package manager to install dependencies, then
run `yarn lint` and `yarn build`. Native CSS scrolling replaces the unused Lenis
wrapper, which relied on React 18 types despite the app using React 19.

Preview with `yarn dev` or `yarn start` after a production build. Check the opening,
hero, navigation, schedule, gallery, music control and RSVP at phone and laptop
widths, including landscape and reduced-motion mode.

## Verification performed

Production build, TypeScript, ESLint and whitespace checks passed. Automated
Chromium checks passed at 320×740, 390×844, 768×1024, 1366×768 and 844×390,
plus 390×844 with reduced motion. Checks covered opening-button visibility,
focus and scroll restoration, horizontal overflow across the main sections,
opening-triggered audio, pause/resume, ticking countdown, scroll-driven depth, location and promise controls, gallery navigation and
synthetic touch swipes, Escape, focus return, image loads, and suppressed
calendar actions while the ceremony time is unknown. No browser runtime errors or
HTTP failures were recorded. Desktop and mobile screenshots were inspected.
These are browser emulations, not physical-device or Safari tests.

## Additional animation pass

- 36 drifting rose/gold petals on desktop; 18 on phones, with varied sizes and drift directions.
- A route line draws between hometowns and location pins arrive in sequence.
- Countdown digits flip when their value changes; vow cards stagger into view and respond to taps.
- The baraat photo moves independently as guests scroll, clipped inside its frame.
- Mandap and closing sparkles pause outside the viewport. Reduced-motion preferences suppress these effects.
