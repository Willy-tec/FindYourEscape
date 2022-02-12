import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from '../../../lib/prisma'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {userId} = req.query
    const id = Number(userId)
    let profil 
    if(typeof id == "number"  && !isNaN(id)) {
        profil =  await prisma.user.findUnique({
        where: {id},

    })}
  res.status(200).json({...profil })
}
