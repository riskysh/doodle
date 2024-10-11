import NextAuth from "next-auth"
import { db } from "./db"
import {DrizzleAdapter} from "@auth/drizzle-adapter"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [Google],
})