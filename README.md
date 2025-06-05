# Scriptum UI – Spark Sophia Plattform

**Scriptum UI** ist die zentrale Web‑Oberfläche der *Scriptum AI Systems*‑Plattform.  
Sie vereint Frontend, Backend und Agent‑Hub in einem Monorepo und bietet künftig eine modular erweiterbare Umgebung für KI‑gestützte Kommunikation und Wissensmanagement.

---

## Vision

Unsere Mission ist es, Menschen und Teams mithilfe von KI‑gestützten Assistenten produktiver zu machen.  
Spark Sophia ist dabei der erste „Agent“, der über diese Oberfläche zugänglich ist.  
Langfristig sollen mehrere spezialisierte Agents (Recherche, Zusammenfassung, Datenanalyse, Code‑Review …) parallel genutzt werden können.

---

## Kernfunktionen (geplant)

| Bereich | Beschreibung |
|---------|--------------|
| **Chat‑Interface** | • Intuitive Chat‑UI mit Markdown‑Rendering, Code‑Blöcken und Rich‑Text‑Antworten.<br>• Mehrere Konversations‑Tabs und Chat‑History mit Suchfunktion. |
| **Agent‑Hub** | • Verwaltung verschiedener KI‑Agents (Spark Sophia, Data‑Analyst, Code‑Guru …).<br>• Parallele Anfragen an mehrere Agents, Ergebnis‑Vergleich. |
| **Stimmungs‑/Tonfall‑Steuerung** | • Buttons oder Slider für „Glücklich“, „Nachdenklich“, „Störung“ etc.<br>• Beeinflusst Antwortstil des Agents. |
| **Datei‑Uploads** | • PDFs, Bilder oder CSV‑Dateien hochladen und durch die KI analysieren lassen. |
| **Wissensbasis‑Integration** | • Eigene Dokumente in eine Vektor‑Datenbank (z. B. Weaviate) laden.<br>• Fragen direkt gegen dieses private Knowledge‑Base stellen. |
| **Benutzer‑Konten & Auth** | • Login via E‑Mail/Passwort, OAuth (Google, GitHub).<br>• Rollen & Rechte (Admin, User, Gast). |
| **Einstellungen & Profile** | • Persönliche API‑Keys (OpenAI, Azure …), Theme‑Auswahl (Dark/Light). |
| **Statistiken & Usage** | • Token‑Verbrauch, Kosten‑Schätzung pro User/Projekt.<br>• Export als CSV/JSON. |
| **DevOps / CI‑CD** | • Automatisierte Tests (Jest, Playwright).<br>• Build‑Pipeline mit Docker, Deployment auf Fly.io / Render. |
| **Mehrsprachigkeit** | • UI und Antworten in DE/EN (später weitere Sprachen). |
| **Barrierefreiheit** | • Tastatur‑Navigation, Screen‑Reader‑Support, Farbkontraste. |

---

## Technologie‑Stack

| Schicht | Tech |
|---------|------|
| **Frontend** | React + Vite, TypeScript, TailwindCSS, Zustand (State‑Management) |
| **Backend** | Node.js, Express, TypeScript, OpenAI‑SDK |
| **Datenbank** | PostgreSQL (User‑Daten), Redis (Session‑Cache), Weaviate (Vektor‑DB) |
| **Auth** | OAuth 2.0, JWT |
| **CI/CD** | GitHub Actions, Docker, Fly.io / Render |
| **Testing** | Jest, React Testing Library, Playwright (E2E) |

---

## Lokale Entwicklung

```bash
# 1. Repo klonen
git clone https://github.com/ScriptumAISystems/scriptum-ui.git
cd scriptum-ui

# 2. Frontend starten
cd frontend
npm install
npm run dev

# 3. Backend starten
cd ../backend
npm install
npm run dev
```

Frontend läuft anschließend auf <http://localhost:5173>, Backend auf <http://localhost:3000>.

---

## Roadmap

1. **MVP Chat‑Interface**  
   * Basis‑Chat mit Spark Sophia, Stimmungs‑Buttons, einfache History.
2. **Agent‑Hub & Multi‑Agent‑Routing**  
   * Mehrere Agents parallel, UI‑Auswahl.
3. **Datei‑Uploads & Knowledge‑Base**  
   * Vektor‑DB‑Integration, semantische Suche.
4. **Benutzer‑Konten & Billing**  
   * Login, Token‑Verbrauch, Kosten‑Übersicht.
5. **Mobile‑Optimierung & PWA**  
   * Offline‑Support, Push‑Notifications.

---

## Beiträge

Pull‑Requests sind willkommen!  
Bitte vorab ein Issue öffnen, um größere Features abzustimmen.

---

## Lizenz

MIT License – siehe [LICENSE](LICENSE).
