// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

export default async function handler(req, res) {
  let modelFileNameList = await fs.promises.readdir("data/models");
  let modelDataList = [];
  for(let i = 0; i < modelFileNameList.length; ++i) {
    const modelFileName = modelFileNameList[i];
    const modelData = await fs.promises.readFile(`data/models/${modelFileName}`, 'utf-8');
    modelDataList.push(JSON.parse(modelData));
  }
  res.status(200).json(modelDataList);
}
