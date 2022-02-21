// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        name : 'airconic',
        description: 'The lightest ever'
      },
      {
        name : 'mojaris',
        description: 'The lightest ever'
      }
    ]);
}
