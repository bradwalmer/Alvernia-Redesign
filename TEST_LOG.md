# Verification log

## Starter verification · 2026-10-30

- JavaScript syntax checks: passed for app.js, map.js, core.js.
- Automated validation: 10 test groups passed (run `node test-core.js`).
- Desktop browser: landing page/official background video rendered; carousel added a fourth YouTube slide; lookalike YouTube domain rejected; temporary test slide removed.
- Resource UI: sourced QA record saved, progress changed to 1/5, survived page reload, found by search, and removed. Export displayed the successful data-export message. Test data was removed from the preview.
- Mobile CSS: inspected in a 390-pixel iframe; hero, navigation, resource search, and map layout fit. DOM measured no horizontal overflow (375-pixel content width, 375-pixel scroll width).
- Cesium and model-viewer: browser cannot initialize WebGL 2. Clear fallback is included; actual 3D rendering, tile coverage, and model placement are not verified here.
- No user Cesium token was supplied. Real-token authentication, Google asset entitlement/quota, and live photorealistic tiles still require a check on an authorized WebGL-enabled device.
- A video URL’s syntax can be tested without verifying whether its owner allows playback. Test your chosen YouTube video after adding it.
- GLB file structure and local asset references checked separately during packaging.
- Imported JSON validation is automated; browser file-picker import/upload paths still need a student-device check.

## Student test record

| Scenario | Expected | Observed | Pass/fix/untested |
| --- | --- | --- | --- |
| Add five distinct resources | Five new pins; sources retained; 5/5 | | |
| Same resource twice | No inflated count | | |
| Search with no result | Clear empty state | | |
| Invalid video URL | Rejected without embedding | | |
| My actual YouTube story | Plays or useful external link | | |
| Export and import | Data survives; no token in JSON | | |
| Real token + tiles | Photorealistic scene or clear account/coverage error | | |
| My GLB on campus | Correct size, heading, ground contact | | |
| Keyboard + phone | Navigation and forms usable | | |
| Wrong or missing evidence | Claim corrected or left unknown | | |


## This week's redesign — student evidence
Complete this section for the chosen page/feature. The earlier map/GLB rows are
optional unless those features are part of the chosen redesign. Do not mark
the starter's historical results as results of your own work.

| Check | Expected | Observed | Pass / fix / untested |
| --- | --- | --- | --- |
| My acceptance test 1 | "grades" leaves matching cards; Students is the default | Opens on Students with 20 cards. "grades" leaves Canvas and Self-Service | Pass (agent, 2026-11-05) |
| My acceptance test 2 | Every Login link reachable by keyboard; focus visible; no sideways scroll on a phone | At 375px, real Tab presses reached all 33 card links on the Students view in order, each with a solid blue outline (seen on screen on a footer link); scroll width 375 of 375 | Pass (agent, 2026-11-05; emulated width) |
| My acceptance test 3 | Helpful empty message and reset; unconfirmed descriptions labeled | "zzqx" shows a message; Reset restores 20 Student cards and returns focus to search. 8 Student cards say "Description not confirmed yet" | Pass (agent, 2026-11-05) |
| Phone-width layout | Single column; no sideways scroll | Single column at 375px. At 320px on All, no overflow | Pass (emulated width, not a real phone) |
| Keyboard path and visible focus | Menu opens and closes; Escape returns focus | Enter opened the menu; Escape closed it and returned focus to the Menu button | Pass (agent, 2026-11-05) |
| Empty, invalid, or unavailable state | Useful message | "panopto" under Students says 1 system matches under All. noscript fallback link is present but was not run with JavaScript off | Pass; noscript untested |
| Link accuracy against official page | Same links as alvernia.edu/logins | 50 unique links; matching hash against the live page. Rows: 20 Students, 14 Faculty/Staff (34 rows, 28 merged cards) | Pass (agent, 2026-11-05). Destinations not opened or signed into |
| Color contrast (calculated) | At least 4.5:1 | Gray links and unconfirmed text 5.11:1; Login button 8.13:1 | Pass; no screen reader test |
| Peer completes the assigned task | | | Untested; needs a real student |
| Revised feature retest | "grades login" finds both grades systems | First run found only Self-Service (Canvas label not treated as a login). After the fix, both appear | Fixed and retested |
| Design pass | Search higher on a phone; Login buttons line up across each row | Search box moved from about 540px to 334px from the top at 375px. Canvas button no longer wraps. Rows still vary when a card has two lines of secondary links | Pass with noted limit (agent, 2026-11-05) |
| Published page and relative links | | Relative links work on a local server; link from index.html reaches logins.html | Local only; published version untested |
| Existing node test-core.js (if available) | All pass | Node is not installed on this computer. core.js and data.js were not changed | Unrun; run it after installing Node |

Peer's task and observed difficulty: [ADD AFTER PEER TEST]
What I changed after the peer test: [ADD AFTER PEER TEST]
Known limitation and next step: 15 of 28 cards still have no confirmed description, including myAlvernia, whose relationship to Self-Service is unclear. Groups are untested with students. The home page nav wraps to two lines at about 850px wide. Saved favorites from the official page were left out. Next step: run the peer test and ask IT to confirm descriptions.
