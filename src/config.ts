import {config} from 'dotenv'

config()

export const llaveStripe = process.env.STRIPE_SECRET_KEY