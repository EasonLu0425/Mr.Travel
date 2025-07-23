import { auth } from "@/auth";
import HomePage from "./components/home-page"


const Page = async () => {
  const session = await auth()
  console.log("Session data:", session)
  return (
    <HomePage />
  )
}

export default Page;