import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Apple from "next-auth/providers/apple"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "./lib/utils"
import { getUserFromDb } from "./actions/auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    // Apple,
    // Credentials({
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize: async (credentials) => {
    //     let user = null

    //     // logic to salt and hash password
    //     if (!credentials || typeof credentials.password !== "string" || typeof credentials.email !== "string") {
    //       throw new Error("Invalid credentials.")
    //     }
    //     const pwHash = saltAndHashPassword(credentials.password)

    //     // logic to verify if the user exists
    //     user = await getUserFromDb(credentials.email, pwHash)

    //     if (!user) {
    //       // No user found, so this is their first attempt to login
    //       // Optionally, this is also the place you could do a user registration
    //       throw new Error("Invalid credentials.")
    //     }

    //     // return user object with their profile data
    //     return user
    //   },
    // }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // 可以在這裡添加自定義登入邏輯
      // console.log('User signed in:', user)
      return true
    },
    async session({ session, token }) {
      // 可以在這裡修改 session 資料
      // console.log('Session data:', session)
      return session
    },
  },
})