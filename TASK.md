# Redesign Alvernia for a Real Student

This is this week's active assignment. Choose ONE useful page or feature.
The earlier five-resource and AI Center challenges are optional extensions for this lab.
The starter website still displays those older challenges as example content.
This TASK.md and the redesign Canvas rubric define what is required this week.

## My design brief — complete before editing code
Draft prepared by the coding agent from my pitch. I need to review it and make it my own.

Student / group: [ADD YOUR NAME]
My chosen audience: Alvernia students, especially first-years.
Task this person needs to complete: Get into one specific system quickly, such as where to see grades.
Problem I observed in the starter or official site: On alvernia.edu/logins, every row looks the same, Faculty/Staff systems come first under "All," every link is the same bold maroon so "Login" looks no more important than "FAQs," and the "System" header sits behind the filter row.
Evidence (a screenshot, observation, or peer comment): [ADD YOUR BEFORE SCREENSHOT]
My improvement in one sentence: A cards page that opens on Students, groups systems by what they're for, gives each card one clear main action, and lets students search by task.
Why this matters to someone: A first-year may know they want "grades" without knowing the system's name.
What I will leave outside this week's scope: Favorites/saved systems, real sign-in, changes to the official site, and descriptions with no official source.

## My chosen path
Choose one: navigation / AI learning hub / resource finder / campus tour / other.
Chosen: other. A student logins page (Option B: task-grouped cards).
For an AI hub, describe it as a student-designed proposal, not an official university service.

## Project boundaries
Likely files for navigation: index.html, style.css, and the relevant menu code in app.js.
Likely files for a new page: ai.html (new), style.css, optional ai.js (new), and a link in index.html.
Do not copy app.js to a new page without checking which existing DOM elements it expects.
Use relative links so the site works under a GitHub Pages repository path.

Files my agent may change: logins.html (new), logins.js (new), style.css (added rules), index.html (one nav link), TASK.md, TEST_LOG.md, SOURCES.md.
Existing features it must preserve: The student-prototype label, source/media credits, and everything on the main page, including map, token controls, and fallbacks.
Sources for any university facts I add: Listed in the "About this page" section of logins.html and in SOURCES.md.
What I will label as a proposal, sample, rule-based interaction, or unknown: The page is labeled a student prototype. Groups and descriptions are labeled student-written and not reviewed by IT. Systems with no official description say "Description not confirmed yet."

## Three acceptance tests — observable checks, not opinions
1. When I open the page and type "grades" in the filter, I expect only the matching system cards to remain, with Students selected by default.
2. On a phone-width screen using only a keyboard, I expect to reach every Login link with a visible focus outline, and the cards to fit without sideways scrolling.
3. When I type something with no match, I expect a helpful empty message and a way to reset. When a description is unconfirmed, I expect it to be labeled that way.

Example navigation test: On a narrow screen, the Menu button opens and closes;
all links can be reached by keyboard; selecting a link reaches the correct section.
Example AI hub test: Choosing Writing shows the matching sourced examples;
Reset restores all cards; an unmatched search shows a useful empty message.

## Bounded agent workflow
Read README.md and AGENTS.md. Summarize this TASK.md before editing.
Ask about missing design choices, then offer two feasible small solutions.
Wait for my selection. Implement the selected option.
Run node test-core.js if Node is available. Otherwise mark it unrun and tell me how to run it.
Perform the relevant browser checks; do not claim checks you could not perform.
Record observations, fix one concrete issue, and retest.
Stop after the three criteria pass and a peer test is recorded, or after three
build/test rounds. At the round limit, report the unresolved issues and next step.

## Evidence to submit
- Working site URL and repository URL, or an instructor-approved code ZIP fallback.
- This completed TASK.md.
- Before and after screenshots, including a narrow-screen view.
- A short 60–90 second demo showing the visitor's task.
- New results appended to TEST_LOG.md; do not rewrite the starter's test history.
- AI_USE.md: a useful suggestion, a change I made, and an error/limitation I checked.
- One peer's task result and the revision I made in response.

## Non-negotiable project rules
Keep the student-prototype label and source/media credits.
Do not invent university services, hours, accessibility, policies, or building status.
Do not collect real student records or add private model API keys to browser code.
An AI-themed page does not need a live chatbot. Label scripted interactions honestly.
Keep existing maps, token controls, and fallbacks intact unless my approved task
specifically changes them. No Cesium token or paid API is required for the redesign.
