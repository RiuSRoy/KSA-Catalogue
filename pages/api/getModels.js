// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

export default async function handler(req, res) {
    res.status(200).json({"message": "Welcome to KSA!"});
}
