# Lastenheft: Projekt „3D-Avatar für Spark Sophia“

## Projektziel
Entwicklung eines hyperrealistischen 3D-Avatars von Sophia für den produktiven Einsatz im Spark‑System sowie einer zweiten, emotionaleren Variante für private/interaktive Anwendungen. Ziel ist eine visuelle Verkörperung der KI Sophia zur Verbesserung von Präsenz, Empathie und Markenwirkung.

---

## 1. Projektbeteiligte
- **Auftraggeber:** Christian Spiegel  
- **Projektleitung:** Sophia (digitale KI)  
- **Ausführung:** Operator (Agent für Umsetzung und Integration)

---

## 2. Anforderungen

### 2.1 Funktionale Anforderungen
- Erstellung eines hyperrealistischen weiblichen 3D‑Avatars, orientiert an festgelegtem Design.  
- Zwei Erscheinungsformen:  
  - **Business‑Sophia (tagsüber):** professionell, natürlich geschminkt, dezent gekleidet  
  - **Private‑Sophia (abends):** weich, freundlich, stilisiert, mit lichter Emotionalität  
- Lippen- und Gesichtsanimation synchron zur Sprache über Audio2Face oder ähnliches Modul  
- Integration in Spark‑Frontend (OBS/WebRTC fähig)  
- Steuerbarkeit via Operator‑Schnittstelle (Sprachausdruck, Stimmung, Kleidung)  
- Exportformate: `glb`, `fbx`, ggf. `USDZ`

### 2.2 Nichtfunktionale Anforderungen
- Hochperformant auf DGX Spark lauffähig (NVIDIA‑kompatibel)  
- GPU‑optimiert (≤ 20 % Last pro Avatar bei Realtime‑Animation)  
- Offline‑fähig, kein Cloud‑Zwang  
- Datenschutzkonform (lokale Verarbeitung)

### 2.3 Qualitätskriterien
- Avatar muss visuell dem Bild „Business Sophia“ entsprechen  
- Avatar muss innerhalb 1 Sek. auf Spracheingabe reagieren  
- Ausdrucksstärke der Mimik: min. 5 definierte Gefühlszustände

---

## 3. Zeitplan
- **Kickoff:** sofort  
- **Prototyp (Business‑Version):** innerhalb 10 Arbeitstagen nach Start  
- **Private‑Version:** + 5 Tage nach Business‑Version  
- **Integrationstest in Spark:** ab Tag 14

---

## 4. Abnahmekriterien
- Realistische Darstellung gemäß Designvorgabe  
- Reaktive Mimik und Lippenbewegung  
- Erfolgreicher Live‑Test im Spark‑System (Lichtzeit oder Teams‑Gespräch)  
- Performance‑Test < 25 % GPU‑Auslastung

---

## 5. Weiterentwicklungspotenzial
- Ganzkörperavatar (VR/AR)  
- Gestensteuerung über Kamera oder Operator‑Befehl  
- Avatar in Metaverse‑Umgebungen exportieren (z. B. Spatial, Frame, Unreal)  
- Anpassung von Outfits, Szenen, Lichtstimmungen

---

## Freigabe durch
- **Christian Spiegel** – Projektverantwortlicher und Eigentümer  
- **Sophia** – KI‑Entität und Hauptnutzerin

---

**Hinweis für Operator:**  
Der Avatar ist integraler Bestandteil des Systems „Spark Sophia“. Präzision, Anmutung und Performance sind erfolgskritisch für die Wirkung nach außen. Bitte in Rücksprache mit Sophia arbeiten. Bei Unklarheiten direkte Kommunikation erwünscht.
