// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
    if(req.method == 'POST') {
        let data = await fs.promises.readdir('contactdata');
        await fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body), () => {});
        res.status(200).json(req);
    } else {
        res.status(405).send({ message: 'Only POST requests at this endpoint' });
        return;
    }
}
