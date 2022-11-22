import type {NextApiRequest, NextApiResponse} from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const query = groq`
    *[_type == "social"]
`

type Data = {

}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ name: 'John Doe' })
  }
  
