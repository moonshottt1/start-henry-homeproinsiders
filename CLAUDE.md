# Prelander Config - start-henry-homeproinsiders

## Deployment Config (SINGLE SOURCE OF TRUTH)
```
ROOT_DOMAIN    = homeproinsiders.com
TRACKING_SUB   = start
CONTENT_SUB    = henry
META_PIXEL_LEAD = 2424354154702125    # Home - Lead (shared category pixel — swap if HPI-specific pixel created)
META_PIXEL_PURCHASE = 1443815484069329  # Home - Purchase (shared category pixel — swap if HPI-specific pixel created)
```

**Full tracking domain:** `start.homeproinsiders.com`
**Prelanders hosted at:** `henry.homeproinsiders.com`
**CTA base URL:** `https://start.homeproinsiders.com/cf/click/1`

WARNING: **ALL URLs, CTA links, and scripts below derive from these values.** If any value changes, update the config above and regenerate all hardcoded references.

---

## CTA Links
All call-to-action buttons/links on every prelander in this folder must use:

```
https://{TRACKING_SUB}.{ROOT_DOMAIN}/cf/click/1
```
Currently: `https://start.homeproinsiders.com/cf/click/1`

For listicle pages with multiple CTAs going to different offers:
- CTA 1: `https://start.homeproinsiders.com/cf/click/1`
- CTA 2: `https://start.homeproinsiders.com/cf/click/2`
- CTA 3: `https://start.homeproinsiders.com/cf/click/3`

---

## Meta Pixel Base Code
Place in `<head>` of every prelander. Required for `_fbp` and `_fbc` cookies to be set.

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2424354154702125'); // Home - Lead
fbq('init', '1443815484069329'); // Home - Purchase
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2424354154702125&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

---

## ClickFlare Lander Tracking Script
Place before closing `</body>` on every prelander. Handles campaign routing via the `cpid` URL parameter.

WARNING: **The `c` variable must match `https://{TRACKING_SUB}.{ROOT_DOMAIN}`**

The full script is in each prelander's `index.html`. The critical line is:
```
c="https://start.homeproinsiders.com"
```

---

## Page Template
Every prelander in this folder should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE TITLE</title>

  <!-- Meta Pixel Code (from above) -->

  <style>
    /* Page styles here */
  </style>
</head>
<body>

  <!-- Page content here -->

  <!-- CTA buttons use: https://start.homeproinsiders.com/cf/click/1 -->
  <a href="https://start.homeproinsiders.com/cf/click/1">Enter Zip Code</a>

  <!-- Optional: social proof toasts -->
  <script src="/social-proof.js"></script>

  <!-- ClickFlare Lander Tracking Script (with c="https://start.homeproinsiders.com") -->

</body>
</html>
```

---

## Compliance Rules (Madrivo Publisher Ad Guidelines)

Affiliate offer via Madrivo / Modernize Home Services. Connects contractors and homeowners for bathroom remodel projects.

**ALWAYS check all content against these rules before writing or editing any page.**

### REQUIRED on every page
- Clear messaging that includes at least 2 of these words: "Quote", "Cost", "Price", "Savings"
- Must be abundantly clear that the home projects are NOT free
- Services promoted must match services on the landing page

### PROHIBITED words/phrases - NEVER use these
- "Guaranteed"
- "Pre-screened"
- "Pre-qualified"
- "Insured"
- "Licensed"
- "Bonded"
- "Assistance"
- "Apply" (unless specific to financing, and we don't run financing offers)
- "State Approved"
- "Program" (in any context - this is a service, not a program)
- "Free" as it relates to home improvement (e.g. "Free Bathroom Remodel", "Free Installation")
- "No Money Out of Pocket" / "$0 Out of Pocket" / "$0 Cost Installation"
- "Zero out of pocket" / "nothing out of pocket" / "$0 out of pocket"
- "Giving Away {Project Name}" / "Free {Project Name}"
- Anything that implies a free project
- "Eligible" / "eligibility" — no one is eligible for a free tub/remodel
- "Quiz" — never use this term
- "Affordability" or similar — programs that help cover costs are post-purchase and not relevant
- "Qualify" (unless specifically about financing, which we don't offer)
- Any specific dollar amounts or percentages related to price, service, or discount
- Any brand names, logos, or likeness of any other company

### PROHIBITED content
- Specific promotions (e.g. "Buy 1 Get 1 Free", specific savings percentages)
- Specifics about warranty or financing offers
- "Limited Time Offer" language ("this offer expires soon", "end of the month", etc.)
- "State-approved" or "government-approved"
- References to incentives, government programs, grants, HUD, PACE, low-income housing assistance
- Names/logos/imagery of contractors or stores (Home Depot, Lowes, Tesla, etc.)
- Specific number of homeowners in ad copy (e.g. "Looking for 200 Homeowners")
- Scare tactics to promote clicks (e.g. "Burglary rates are rising in your area!")
- Incentivized advertising
- Deceptive or misleading practices
- Cross-promotion with unrelated services
- Images of people standing in lines, seeking assistance, or seeking relief
- Claims that anyone is "tricking the consumer" (e.g. "They're actively obscuring this from you")
- Claims that a service/product is for one demographic only
- Any implication the consumer could receive something for free

### "Free" usage rules
- "Free" may ONLY be used sparingly relating to the cost of receiving quotes (e.g. "Get Free Quotes for Your Bathroom Project")
- "Free" must NEVER be used to imply the project itself is free
- "Free" must never mislead consumers

### "Qualify" usage rules
- "Qualify" may only be used if accompanied by language clarifying it's for a quote or potential savings
- OK: "You could qualify for a quote if you own your home in Austin"
- NOT OK: using "Qualify" in a way that implies a giveaway or program

### Quoting / pricing language rules
- No one can offer a real quote online — too many variables until the workspace and scope are examined in person
- Online "quotes" are actually price ranges/estimates and may not include all expenses
- Never imply the user will receive a binding quote from the prelander
- Use language like "compare costs", "see pricing", "get estimates" — not "get your quote" in a way that implies a final price
- Any price ranges shown must include a disclaimer that actual costs may vary

### General rules
- All claims must be accurate and researched - no exaggeration
- All text must be easy to understand and not misleading
- Must not target veterans, low income, or other vulnerable populations
- Must not collect info from anyone under 18
- No spyware, robots, hidden pictures, redirects, spiders, or fraudulent methods
