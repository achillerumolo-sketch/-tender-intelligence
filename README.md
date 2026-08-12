# Tender Intelligence

Second brain per il monitoraggio gare e competitive intelligence — trasformatori di potenza HV/MV.

## Struttura

- `tenders/` — una nota per ogni gara/bando attivo o storico. Usa `tenders/template.md` come base.
- `competitors/` — profili concorrenti (prezzi, aggiudicazioni note, pattern di offerta).
- `daily-briefs/` — output giornaliero della pipeline di monitoraggio, un file per data.
- `scripts/` — script di automazione (es. `daily-brief.js` con commit automatico).

## Workflow

1. Nuova gara identificata → copia `tenders/template.md`, rinomina `YYYY-MM-tender-slug.md`.
2. Aggiorna il frontmatter YAML (status, scadenza, priorità) — è quello che ti permette di filtrare/cercare.
3. Log delle azioni in fondo alla nota con checkbox `- [ ]` / `- [x]`.
4. Brief giornaliero della pipeline → commit automatico in `daily-briefs/`.
5. Gara chiusa (vinta/persa/scaduta) → cambia `status` nel frontmatter, non cancellare la nota (serve da storico).

## Convenzioni tag

`tags:` nel frontmatter — usa questi valori base per restare consistente:
- Mercato: `latam`, `iberia`, `balcani`, `nord-europa`
- Tipo: `autotrasformatori`, `trasformatori-potenza`, `bess`
- Stato bandi: `attiva`, `bloccata`, `chiusa-vinta`, `chiusa-persa`, `pipeline`

## Se apri questo repo con Obsidian

Il frontmatter YAML è già compatibile con Dataview. Query di esempio per vedere tutte le gare attive ordinate per scadenza:

```dataview
TABLE ente, scadenza, priorita
FROM "tenders"
WHERE status = "attiva"
SORT scadenza ASC
```
