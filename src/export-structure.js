import dotenv from 'dotenv';
dotenv.config();

import { buildClient } from '@datocms/cma-client-node';

async function run() {
  const client = buildClient({ apiToken: process.env.DATO_API_TOKEN });

  const itemTypes = await client.itemTypes.list();

  itemTypes.forEach((itemType) => {
    console.log(itemType);
  });
}
run();