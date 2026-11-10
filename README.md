# Workforce 2100 (.ai) website

Commercial site for workforce2100.ai. Static files, no build step; host on GitHub Pages exactly like workforce2100.org, in a SEPARATE repository (for example `workforce2100-ai`).

- `index.html`: offers, how it works, sample charts, FAQ, request form (opens the visitor's email app addressed to hello@workforce2100.ai)
- `sample.html`: sample findings (state, county, institution structure)
- `assets/ai.css`: styles
- `CNAME`: workforce2100.ai

DNS at your registrar for workforce2100.ai: four A records for @ (185.199.108.153, .109.153, .110.153, .111.153) and CNAME www -> athalass.github.io. Then Settings > Pages > Custom domain: workforce2100.ai, and Enforce HTTPS.

Before launch: set up the hello@workforce2100.ai mailbox (or change the address in both HTML files).
