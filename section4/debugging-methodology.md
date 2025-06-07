# Practical Problem-Solving & Debugging Guide
## Step-by-Step Debugging Process
- **Gather info and reproduce the issue**
  - Get details from users (browser, device, time, what they were doing)
  - Try to recreate it yourself (test in Chrome/Firefox/mobile/incognito)
  - Look for patterns (CAPTCHA fails? Cache timing issues? Plugin conflicts?)

- **Browser detective work**
  - Check the Network tab for failed requests (look for 403/500 errors)
  - Scan the Console for red error messages (JavaScript or plugin issues)
  - Watch what data gets sent when submitting forms (and check security tokens)

- **Server log investigation**
  - Enable WordPress debug log (`wp-content/debug.log`) and check for clues
  - Review server logs for blocked requests, security rules, or PHP crashes
  - Check plugin-specific logs (like contact form or email plugin records)

- **Narrow down the causes**
  - Turn off non-essential plugins and switch to default theme
  - Test with different accounts (admin vs guest) and network conditions
  - Try scheduled submissions to catch timing-related issues

- **Keep stakeholders updated**
  - Acknowledge the report and give a rough timeline
  - Share what you've found and next steps
  - Offer temporary fixes if possible (alternative contact methods)
  - Confirm when fixed and verify with reporter

## Smart AI Assistance
- **How to ask AI effectively**
  - Provide full context: which plugin, error logs, security token behavior, submission URLs
  - Ask AI to suggest likely causes based on Weeks 8-11 course material (CMS lessons)

- **Key course concepts to mention**
  - Security tokens (`wp_nonce_field()`, `check_ajax_referer()`)
  - Important hooks (`wp_enqueue_scripts`, `wp_verify_nonce`)

- **Vetting AI suggestions**
  - Reject unsafe shortcuts (like disabling security checks)
  - Cross-check against course labs and WordPress standards

- **Examples of correcting AI**
  - "That skips nonce validation - use `check_ajax_referer()` like Week 8 taught"
  - "Remember to sanitize with `sanitize_text_field()` per course standards"

- **When to seek human help**
  - If AI gives vague or conflicting advice
  - Consult WordPress docs, plugin forums, or course instructors

## Prevention & Better Processes
- **Development upgrades**
  - Use a staging site for testing before going live
  - Implement code review for form-related changes

- **Testing for tricky issues**
  - Set up automated form testing (like Cypress)
  - Simulate slow connections during testing

- **Better monitoring**
  - Add error tracking (Sentry/New Relic)
  - Centralize logs for form submissions and errors

- **Team coordination**
  - Define who handles what when issues arise
  - Use shared tracking (Trello/Jira) for visibility