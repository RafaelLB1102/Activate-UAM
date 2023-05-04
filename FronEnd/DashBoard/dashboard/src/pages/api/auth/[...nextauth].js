import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

require("dotenv").config();

export default NextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],
    secret : process.env.JWT_SECRET
})
