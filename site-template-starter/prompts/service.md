# Service Page Content Brief
Given one service (slug, title, summary, bullets) and the intake brand info, produce:
- 1–2 sentence intro tailored to the niche and city
- Improve/expand bullets to 5 items
- Optional FAQ (2–3 Q/A)

Return JSON:
{
  "intro":"...",
  "bullets":["...","...","...","...","..."],
  "faq":[{"q":"...","a":"..."},{"q":"...","a":"..."}]
}
