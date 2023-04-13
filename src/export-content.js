import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import request from 'request';
import { buildClient } from '@datocms/cma-client-node';

dotenv.config();
const client = buildClient({ apiToken: process.env.DATO_API_TOKEN });


let date = new Date();
date = date.toISOString();
const backupFolder = `./backups`;


if (!fs.existsSync(`${backupFolder}/${date}`)) fs.mkdirSync(`${backupFolder}/${date}`);
if (!fs.existsSync(`${backupFolder}/assets`)) fs.mkdirSync(`${backupFolder}/assets`);

console.log('Downloading records...');
// this iterates over every page of results:
const records = [];
for await (const record of client.items.listPagedIterator()) {
  records.push(record);
}
fs.writeFileSync(`${backupFolder}/${date}/records.json`, JSON.stringify(records, null, 2));
console.log('Records downloaded!');


const site = await client.site.find();
// this iterates over every page of results:
for await (const upload of client.uploads.listPagedIterator()) {
  try {
    const imageUrl = 'https://' + site.imgix_host + upload.path;
    console.log(`Downloading ${imageUrl}...`);
    const stream = fs.createWriteStream(`${backupFolder}/assets/` + path.basename(upload.path));
    request(imageUrl).pipe(stream);
  } catch (e) {
    console.log(e);
  }
}

console.log('Done!');