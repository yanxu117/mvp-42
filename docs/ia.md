# IA

## Pages
- / : product landing + CTA + lead form

## API
- POST /api/lead : receives lead payload and returns a queued response

## Data contracts
- lead: { email, note, sourceUrl, userJudgment }

## External services
- Supabase (default stack target; schema wiring deferred)
- Vercel (default deployment target)
