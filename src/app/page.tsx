import { getHomePage } from "@/lib/getPost"

export async function generateMetadata() {
  const data = await getHomePage()
  return { title: data?.title || "Default title" }
}

export default async function Home() {
  const data = await getHomePage()
  return (
    <main>
      <h1>{data?.title}</h1>
    </main>
  )
}
