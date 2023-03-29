import { createReader } from "@keystatic/core/reader"
import keystaticConfig from "../../keystatic.config"

const reader = createReader("", keystaticConfig)

export async function getHomePage() {
  const data = await reader.singletons.homepage.read()
  return data
}
