# AI Plugin Proxy

This Supabase Edge Function is the server-side AI slot proxy for the app.

Enabled in phase 1:

- `thermal-ghost-scan`: turns in-app thermal anomaly scan data into a structured ghost record.
- `ootd-style-card`: scores outfit color, balance, layering, and occasion fit, then creates a cartoon character from the submitted reference photo. The original photo is processed in memory and is not stored by the function.

Reserved for later:

- `skill-market-daily-scan`
- `skill-stock-suggestion`
- `skill-stock-explain`
- `relationship-analysis`
- `task-planning`
- `invoice-summary`

Do not put AI API keys in `app.js`, `graduation-game-v2/app.js`, or any browser code.
Set the key as a Supabase Edge Function secret instead:

```bash
supabase secrets set OPENAI_API_KEY=...
```

Future skill-market AI can connect to official wage data, recruiting-market job counts,
skill keyword demand, and AI market interpretation. A later pricing direction can combine:

- personal task completion
- wage trend
- job posting heat
- skill keyword demand
- AI market interpretation

Phase 1 does not fetch real labor-market data, does not change skill stock prices,
and does not create new skill stocks.
