# DragonForge 2026 — attendee website

Private retreat site for people who are already coming.
22–24 September 2026, Domaine de Valbonne.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

## Update content

| What | File |
| --- | --- |
| Participants | `data/participants.ts` |
| Agenda | `data/agenda.ts` |
| Transport / parking | `data/transport.ts` |
| Event name, dates, tagline | `data/site.ts` |
| Domaine photo slots | `data/venue.ts` |

## Add images

- Logo: `public/brand/`
- Headshots: `public/people/firstname-lastname.jpg` (see the `image` path on each participant)
- Domaine photos: `public/venue/aerial.jpg`, `courtyard.jpg`, `pool.jpg`, `landscape.jpg`
- Activity photos: `public/activities/` (`hiking.jpg`, `canoeing.jpg`, `run.jpg`, `yoga.jpg`)

Until a file exists, the site shows an initials or “photo to come” placeholder.

To add a Google Maps link for drivers, set `driving.googleMapsUrl` in `data/transport.ts`.
