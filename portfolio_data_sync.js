import { execSync } from 'child_process';
import fs from 'fs';

const SHEET_ID = '14LhJtDbJrInI-Dn_n4zNVJoRSpS_YVK5b0v0J8Hn51U';
const GID = '0';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;
const OUTPUT_FILE = './public/portfolio_data_sync.json';

function parseCSV(csvText) {
    const lines = csvText.split(/\r?\n/);
    if (lines.length === 0) return [];

    const result = [];
    const headers = splitCSVLine(lines[0]);

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const row = splitCSVLine(line);
        const obj = {};
        headers.forEach((header, index) => {
            let key = header.trim().replace(/^"|"$/g, '');
            if (!key) key = `col_${index}`;
            let value = (row[index] || "").trim().replace(/^"|"$/g, '');
            obj[key] = value;
        });
        result.push(obj);
    }
    return result;
}

function splitCSVLine(line) {
    const result = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
            inQuotes = !inQuotes;
        } else if (c === ',' && !inQuotes) {
            result.push(cur);
            cur = '';
        } else {
            cur += c;
        }
    }
    result.push(cur);
    return result;
}

try {
    console.log('Fetching data from Google Sheets using curl...');
    const csvData = execSync(`curl -L "${CSV_URL}"`, { encoding: 'utf-8' });
    
    const projects = parseCSV(csvData);
    const mappedProjects = projects.map(p => ({
        name: p['PROJECT'] || p['프로젝트명'],
        link: p['링크'],
        tech: p['Front-Framework'] || p['기술스택'],
        start: p['START'],
        end: p['END'],
        role: p['참여도'],
        client: p['발주처']
    })).filter(p => p.name && p.name !== 'PROJECT'); // Filter header duplication if any

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mappedProjects, null, 2), 'utf-8');
    console.log(`Successfully synced ${mappedProjects.length} projects to ${OUTPUT_FILE}`);
} catch (error) {
    console.error('Error:', error.message);
}
