const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ipk = process.argv[2];
if (!ipk) throw new Error('Usage: node scripts/gen-manifest.js <ipk>');
const app = JSON.parse(fs.readFileSync('app/appinfo.json', 'utf8'));
const stat = fs.statSync(ipk);
const sha256 = crypto.createHash('sha256').update(fs.readFileSync(ipk)).digest('hex');
const base = path.basename(ipk);
const tag = process.env.GITHUB_REF_NAME || ('v' + app.version);

const manifest = {
  id: app.id,
  version: app.version,
  type: app.type || 'web',
  title: app.title || 'WiFi Watch',
  appDescription: 'Wi-Fi diagnostics and monitoring for rooted LG webOS TVs.',
  iconUri: 'https://raw.githubusercontent.com/poiedk/webos-wifi-watch/main/app/icon.svg',
  sourceUrl: 'https://github.com/poiedk/webos-wifi-watch',
  rootRequired: true,
  ipkUrl: 'https://github.com/poiedk/webos-wifi-watch/releases/download/' + tag + '/' + base,
  ipkHash: { sha256 },
  ipkSize: stat.size
};

fs.writeFileSync('dist/org.webosbrew.wifiwatch.manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify(manifest, null, 2));
