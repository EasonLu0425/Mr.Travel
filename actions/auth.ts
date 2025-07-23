"use server"

import { signIn, signOut } from "@/auth"

export const login = async (method: string) => {
  await signIn(method, { redirectTo: "/" })
}

export const logout = async () => {
  await signOut({ redirectTo: "/login" })
}

export const getUserFromDb = async (email: string, pwHash: string) => {
  return {
    id: "12345",
    name: "John Doe",

  }
}
