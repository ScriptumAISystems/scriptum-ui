# scriptum-ui
Monorepo for Scriptum UI app with frontend, backend, agent hub, and devops.

## Staging Deploy

Der automatische Staging‑Workflow (`staging-deploy.yml`) wird ausgelöst, sobald der **CI‑Build** erfolgreich abgeschlossen ist.
Damit das Deployment funktioniert, müssen folgende Repository‑Secrets gesetzt sein:

| Secret | Beschreibung |
|--------|--------------|
| `NETLIFY_AUTH_TOKEN` | Persönlicher Netlify‑Access‑Token (Deploy‑Rechte) |
| `NETLIFY_SITE_ID`    | ID der Netlify‑Site für die Staging‑Umgebung |

**Einrichtung:**

1. GitHub → *Settings* → *Secrets and variables* → *Actions*
2. **New repository secret** → Name + Wert eintragen
3. Änderungen speichern – der nächste erfolgreiche Build deployt automatisch nach Netlify.

**Lokales Testen:**

```bash
npm ci
npm run build
npm run preview   # oder npm run dev
```
