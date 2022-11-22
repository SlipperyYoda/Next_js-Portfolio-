import type {NextApiRequest, NextApiResponse} from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const query = groq`
    *[_type == "social"]
.

type Data = {

}
