import * as fs from 'fs';


export default async function handler(req, res) {

    const modelData = await fs.promises.readFile(`data/models/${req.query.slug}.json`, 'utf-8');
    res.status(200).json(modelData);
}
  