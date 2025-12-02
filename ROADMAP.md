+ [x] Check GitHub page docs/ folder as root
+ [ ] remove index.html from root
+ [ ] Fix pdf des sections en fr+en qui se coupent entre deux pages
    + break-inside: avoid, orphans, widows
+ [ ] Fix pdf fr du titre en overflow
+ [ ] CONTENT
    + [ ] Changer les formules (wording)
    + [ ] Ajouter CI/CD
    + [ ] Formation / R&D / standards
    + [ ] Content shape
    + Content modernization (tailored to your current role) crisp, modern phrasing
    + Current role (title, company, dates) - current title (Commerce Backend Technical Architect)
    + Top 3 achievements with measurable impact (performance, cost, reliability, delivery)?
    + Primary stack (Node/TypeScript, Java, Python; cloud provider; messaging; DBs)?
    + Preferred contact (keep phone only in PDFs?).
+ [ ] Add external references
        + to cvplaza.com / jobseeker.com
        + [developer....ozilla.org], [w3.org]
        + [validator.w3.org], [jigsaw.w3.org], [webaim.org]
        + [schema.org]
        + puppeteer (print pdf) [pptr.dev], [blog.risingstack.com]
+ [ ] Add JSON‑LD Person for discoverability (name, jobTitle, email, sameAs). [schema.org]
+ [ ] contact form
+ [ ] Link "Request full CV"
      + If you're interested by my profile, please don't hesitate to contact me to ask for the full version with unpublished sensitive data such as address, phone, unobfuscated email or DNI (date of birth, national ID, full street address, phone number).
+ [ ] script to add sensitive information from sensitive.json (not versioned)
+ [ ] GIT
    + [ ] protect main branch
    + [ ] make gh-pages only commitable from build action
    + [ ] debug pipelines / Check GitHub action
+ [ ] Run linkchecker: fix dead links
      + Replace Magento > AdobeCommerce
+ [ ] make print result as close as possible to pdf from print.html
+ [ ] Actualiser le readme (link to cv plaza..etc.)
+ [ ] Indicate in CHANGELOG Multilingual refactor (English, Spanish, French) without duplicating templates
+ [ ] links other sites (book)
+ [ ] Add book de mes sites perso?
+ [ ] dark mode

Required (content)

Required (git)

nice-to-have


### Content shape:

#### Summary (3–4 lines)

* Focus on e‑commerce platforms, API design (REST/GraphQL), event‑driven & microservices, cloud (AWS/Azure/GCP), observability (OpenTelemetry), and performance.

#### Core skills (bulleted)

* Architecture: Domain‑driven design (DDD), event sourcing, CQRS, API governance
  Backend: Node.js/TypeScript, Java (if applicable), Python; frameworks (NestJS, Spring)
* Data: PostgreSQL/MySQL, Redis, Kafka/RabbitMQ; caching strategies
  Cloud/Infra: AWS (ECS/EKS/Lambda), , Docker, CI/CD (GitHub Actions)
* Security & Compliance: OAuth2/OIDC, PCI considerations, secrets management
* Commerce: Magento (legacy), integrations (payments, fraud, tax), OMS, PIM

#### Experience entries

* Use impact metrics: “Reduced checkout latency by 35%”, “Cut infra costs 20% with autoscaling”, “Designed API that serves X req/sec”.
* Keep recent 10–12 years; summarize older roles briefly.

#### Education & Certifications

* École Polytechnique (highlight), and any recent AWS/GCP certs.

#### Languages

* English, Spanish, French (levels).



#### Investigation / learn about:

+ What is headless Chrome. 
+ official Actions for pages
+ WCAG 2.2 basics
+ visible focus / keyboard nav
+ semantic HTML vs ARIA overuse
+ Structured data uses Person.sameAs for public profiles.
+ mitigate bias
+ Terraform
+ OpenTelemetry


### Automated PDFs in CI (recommended)

Puppeteer script (excerpt):
```js
// scripts/make-pdf.js
import puppeteer from 'puppeteer';
const lang = process.argv[2] || 'en';
const out = `assets/pdf/cv-${lang}.pdf`;
const url = `https://micheeell.github.io/cv/?lang=${lang}`;
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0' });
await page.pdf({  path: out,  format: 'A4',  printBackground: true,  margin: { top: '16mm', right: '16mm', bottom: '16mm', left: '16mm' }});
await browser.close();
```





BFF
EDS
AEM
ACCS
Shopify
composable
AdobeCommerce
CI/CD
BI
VPN / GlobalProtect
API Rest / GraphQL / Mesh
Authentication ID provider 
AWS lambda function
netlify
cdn cloudflare
DNS

kubernetes
debugbear
newrelic
datadog
atlassian
AI


Share those, and I’ll draft updated English/Spanish/French content and (if you want) provide a PR‑ready branch layout + workflow file.
If you prefer, I can also sanitise the uploaded print.html and produce a new standards‑compliant version with the sensitive fields removed and the modern sections added.


+ [ ] ✅ Sanitization Goals
    + Remove age, date of birth, DNI, full address, phone number.
    + Remove Twitter link.
    + Keep email, LinkedIn, GitHub, city/country.
    + Ensure semantic structure and responsive design.
    + Prepare for multilingual integration (later step).

+ [ ] ✅ Current Issues in index.html
    + Sensitive data:
      + Bustamante 119, LANÚS OESTE Prov. de Buenos Aires, ARGENTINA 
      + +54 9 11 3148 6078 
      + 40 años (nacido el 26 de febrero 1980)
      + DNI: 94.249.530 
    + Outdated links: Twitter. 
    + Navigation includes redundant links (desktop version, print, PDF). 
    + No responsive meta tags or modern layout classes. 
    + Uses inline navigation with anchors instead of semantic <nav>.


+ [ ] ✅ Next Step 
  + I’ll create a sanitized, responsive HTML template based on your file:

Keep header, sections, content but remove sensitive info.
Add responsive meta tag and basic CSS classes.
Keep Spanish text for now (we’ll later factor multilingual).
Add placeholders for language switch and PDF download.
Remove Twitter and unnecessary links.


✅ Folder Structure for Migration
```
cv/
├── index.html            # Responsive template (base)
├── assets/
│   ├── css/
│   │   ├── styles.css    # Screen styles
│   │   └── print.css     # Print styles
│   ├── js/
│   │   └── i18n.js       # Language switch logic
│   └── pdf/              # Generated PDFs
├── locales/
│   ├── en.json
│   ├── es.json
│   └── fr.json
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions for Pages + PDF
```


✅ GitHub Actions Plan

Validate HTML/CSS (W3C).
Generate PDFs via Puppeteer for each language.
Deploy to gh-pages.


Now, I’ll sanitize and refactor your index.html into a responsive template.
Do you want:

Minimal CSS inline for now (just to make it responsive)?
Or link to external CSS file (we’ll create styles.css next)?

Once you confirm, I’ll produce the new HTML file and share it here.
👉 Which option do you prefer for this first step?
Inline minimal CSS or external CSS file setup?
