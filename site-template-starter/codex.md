# New Client Site Spin-Up (Runbook)

## Goals
- Duplicate this template into a bespoke, **non–cookie-cutter** site for the client defined in `site-template-starter/intake/client.yaml`.
- Use the client’s logo, colors, and social links to infer tone and visuals.
- Vary layout by picking from our component catalog (`site-template-starter/catalog/sections.json`).
- Generate unique copy (with “near me/near you” mentions + neighborhoods).
- Ensure build passes; commit to a new branch.

---

## Steps

1. **Read intake**
   - Parse `site-template-starter/intake/client.yaml` for:  
     `name`, `domain`, `phone`, `email`, `city/region`, `socials`, `tone`, `neighborhoods`, `niche`.

2. **Prepare template**
   - Use `duplicate.sh` to create a new client folder (`./client-<slug>`).  
     Example:
     ```bash
     bash site-template-starter/scripts/duplicate.sh \
       --out "./client-<slug>" \
       --intake "site-template-starter/intake/client.yaml" \
       --init-git
     ```
   - Or, if already inside the copy, run `setup.sh` directly to patch configs:
     ```bash
     bash site-template-starter/scripts/setup.sh
     ```

3. **Assets**
   - Ensure `public/logo.png` exists (copy from `assets.logo` in intake if provided).
   - Reference logo in Nav/Hero as needed.
   - Optional: drop in `public/og-image.jpg`, `public/favicon.png`.

4. **Layout choice**
   - Choose a hero component and a services layout from `catalog/sections.json`.
   - Pick one that differs from the most recent project (to avoid sameness).
   - Add a comment in the chosen component noting the selection.

5. **Content generation**
   - Use prompt files in `site-template-starter/prompts`:
     - `home.md`: Generate H1/H2/intro, 3–5 bullets, CTA band, 6–8 FAQs.  
       Rules:
       - Exactly one “near you/near me” in headings.  
       - Exactly one in body copy.  
       - Mention 1–2 neighborhoods if present in intake.
     - `service.md`: For each service (slugs from `niche`), generate:  
       H1, 60–90 word intro, 3 bullets, micro-CTA, 4 FAQs.
     - `faq.md`: General FAQs if none provided.

6. **Structured data**
   - Home page: `LocalBusiness` JSON-LD with `telephone`, `address`, `geo`.  
   - Each service page: `Service` JSON-LD with `areaServed`, `@id`, `url`.

7. **Navigation/footer**
   - Update links to reflect new service slugs.  
   - Confirm socials in footer match intake.

8. **Verify build**
   ```bash
   npm i
   npm run dev
