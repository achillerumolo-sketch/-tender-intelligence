/**
 * Snippet da aggiungere in coda a daily-brief.js
 * Committa e pusha automaticamente il brief giornaliero nel repo tender-intelligence.
 *
 * Presuppone che daily-brief.js scriva già il file in daily-briefs/YYYY-MM-DD.md
 * dentro la working copy locale del repo.
 */

const { execSync } = require('child_process');
const path = require('path');

const REPO_PATH = '/percorso/locale/tender-intelligence'; // <-- da configurare

function commitDailyBrief() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const briefPath = `daily-briefs/${today}.md`;

  try {
    execSync(`git add ${briefPath}`, { cwd: REPO_PATH });
    execSync(`git commit -m "Brief ${today}"`, { cwd: REPO_PATH });
    execSync('git push', { cwd: REPO_PATH });
    console.log(`Brief del ${today} committato e pushato.`);
  } catch (err) {
    // Se non ci sono modifiche da committare, git commit fallisce: non è un errore bloccante
    if (err.message.includes('nothing to commit')) {
      console.log('Nessuna modifica da committare oggi.');
    } else {
      console.error('Errore durante il commit del brief:', err.message);
    }
  }
}

module.exports = { commitDailyBrief };

// Uso in daily-brief.js, dopo aver scritto il file del brief:
// const { commitDailyBrief } = require('./scripts/daily-brief-git-commit');
// commitDailyBrief();
