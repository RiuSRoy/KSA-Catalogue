// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

export default async function handler(req, res) {
    const models = await fs.promises.readFile(`data/index.json`, 'utf-8');
    res.status(200).json(models);
}
