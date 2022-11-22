import type {NextApiRequest, NextApiResponse} from 'next'
import {createClient, groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
