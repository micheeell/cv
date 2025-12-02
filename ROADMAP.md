+ [x] ~~Check GitHub page has `docs/` folder as root~~
+ [x] ~~remove index.html from root~~
+ [ ] Fix pdf des sections en fr+en qui se coupent entre deux pages
    + break-inside: avoid, orphans, widows
+ [ ] Fix pdf fr du titre en overflow
+ [ ] CONTENT
    + [ ] Changer les formules (wording)
    + [ ] Ajouter CI/CD
    + [ ] Formation / R&D / standards
    + [ ] Content shape
    + Content modernization (tailored to current role) crisp, modern phrasing
    + Current role (title, company, dates) - current title (Commerce Backend Technical Architect)
    + Top 3 achievements with measurable impact (performance, cost, reliability, delivery)?
    + Primary stack (Node/TypeScript, Java, Python; cloud provider; messaging; DBs)
    + Preferred contact (keep phone only in PDFs?).
    + [ ] Add external references
        + [ ] to [cvplaza.com](https://www.cvplaza.com/cv-basics/write-a-cv-in-9-simple-steps/)
        + [ ] [jobseeker.com](https://www.jobseeker.com/en/cv/articles/cv-english)
        + [ ] [developer.mozilla.org](https://developer.mozilla.org/en-US/)
        + [ ] [w3.org](https://www.w3.org/)
        + [ ] [validator.w3.org](https://validator.w3.org/)
        + [ ] [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/)
        + [ ] [webaim.org](https://webaim.org/)
        + [ ] [schema.org](https://validator.schema.org/)
        + [ ] puppeteer (print pdf) [pptr.dev](https://pptr.dev/guides/what-is-puppeteer) /  [blog.risingstack.com](https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/)
        + [ ] list own sites / portfolio / gallery
        + [ ] link to [polytechnique profile](https://ax.polytechnique.org/person/michael-ayoul/40834)
        + [ ] Run linkchecker: fix dead links
          + Replace Magento > AdobeCommerce
        + <abbr title="Backend For Frontend">BFF</abbr>
        + <abbr title="Adobe Experience Manager">AEM</abbr>
        + <abbr title="Adobe Commerce as a Cloud Service">ACCS</abbr>
        + Shopify
        + composable
        + Analytics (google, adobe)
        + <abbr title="Continuous Integration / Continuous Development">CI/CD</abbr>
        + <abbr title="Business Intelligence">BI</abbr>
        + <abbr title="Virtual Private Network">VPN</abbr>
        + API Rest / GraphQL / Mesh
        + Authentication ID provider
            + <abbr title="Single Sign-On">SSO</abbr>
            + <abbr title="Identity Provider">IdP</abbr>
            + <abbr title="Service Provider">SP</abbr> (SAML/OAuth context)
            + <abbr title="Identity and Access Management">IAM</abbr>
            + <abbr title="Multi-Factor Authentication">MFA</abbr>
            + <abbr title="Two-Factor Authentication">2FA</abbr>
            + <abbr title="OpenID Connect">OIDC</abbr>
            + <abbr title="Open Authorization">OAuth</abbr>
            + <abbr title="JSON Web Token">JWT</abbr>
            + <abbr title="Security Assertion Markup Language">SAML</abbr>
            + <abbr title="Security Token Service">STS</abbr>
            + <abbr title="Access Control List">ACL</abbr>
            + <abbr title="System for Cross-domain Identity Management">SCIM</abbr>
        + <abbr title="Content Delivery Network">cdn</abbr> / cloudflare
        + <abbr title="Domain Name System">DNS</abbr>
        + AWS Services: S3, lambda functions..etc.
        + AI tools
        + Galoisian obstructions to non-Hamiltonian integrability

| Platform            | Description                                                   | URL                                                                           |
|---------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Netlify**         | Modern web deployment platform with serverless functions and global CDN. | https://www.netlify.com/                                                      |
| **Kubernetes**      | Open-source system for automating deployment, scaling, and management of containerized apps. | https://kubernetes.io/                                                        |
| **DebugBear**       | Web performance monitoring and Core Web Vitals tracking for developers. | https://www.debugbear.com/                                            |
| **New Relic**       | Full-stack observability platform for applications and infrastructure. | https://newrelic.com/platform                                                 |
| **Datadog**         | Monitoring, security, and analytics platform for cloud applications. | https://www.datadoghq.com/                                            |
| **Metabase**        | Open-source business intelligence and data visualization tool. | https://www.metabase.com/learn/metabase-basics/overview/ |
| **Forest Admin**    | Secure back-office and admin panel solution for your applications. | https://www.forestadmin.com/      |
| **Ngrok**           | Secure tunneling and API gateway platform for exposing local services. | https://ngrok.com/                                                            |
| **Atlassian Tools** | Collaboration and productivity tools like Jira, Confluence, and Bitbucket. | https://www.atlassian.com/                                                    |
+ [ ] Add JSON‑LD Person for discoverability (name, jobTitle, email, sameAs). [schema.org]
+ [ ] contact form
    + Maybe using [formspree.io](formspree.io)
+ [ ] Link "Request full CV"
      + If you're interested by my profile, please don't hesitate to contact me to ask for the full version with unpublished sensitive data such as address, phone, unobfuscated email or DNI (date of birth, national ID, full street address, phone number).
+ [ ] Write a script that would build a full CV (html then pdf) with sensitive information (from sensitive.json - not versioned)
+ [ ] GIT
    + [ ] protect main branch
    + [ ] make gh-pages only commitable from build action
    + [ ] debug pipelines / Check GitHub action
    + [ ] move print.html from docs/ to dist/ to generate the pdf
    + [ ] rename main.css to styles.css
    + [ ] merge print.css & pdf.css to one css file
+ [ ] Clean README.md (link to cv plaza..etc.)
+ [ ] Create CHANGELOG Multilingual refactor (English, Spanish, French) without duplicating templates
+ [ ] refactor styles & CSS files
    + [ ] make print result as close as possible to pdf from print.html
    + [ ] Add dark mode
    + [ ] redraw flag icons with colored [svg](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)


### Reshape Content:

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



+ [ ] ✅ Sanitization Goals
    + Create a full CV with sensitive data (not versioned in git) including DNI, full address, phone number (date of birth?).
    + Obfuscate email.
    + Ensure semantic structure and responsive design.

+ [ ] ✅ Current Issues in index.html
    + No responsive meta tags or modern layout classes. 
    + Uses inline navigation with anchors instead of semantic <nav>.


✅ Folder Structure for Migration
```
docs/
├── index.html          # CV in Spanish (default)
├── en/
│   └── index.html      # CV in English
├── fr/
│   └── index.html      # CV in French
├── assets/
│   ├── css/
│   │   ├── icons/
│   │   ├── styles.css  # Screen styles
│   │   └── print.css   # Print styles
│   └── pdf/            # Generated PDFs
cv/
├── src/
│   ├── scripts/
│   │   ├── build.mjs
│   │   └── pdf.mjs
│   ├── styles/
│   │   ├── styles.css
│   │   └── print.css
│   └── templates/
│       ├── index.html
│       └── print.html
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
