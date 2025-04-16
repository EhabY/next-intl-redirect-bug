import { redirect } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { hasLocale } from "next-intl"

export async function GET(req: Request): Promise<Response | undefined> {
  const { searchParams } = new URL(req.url)
  const locale = searchParams.get("locale")
  if (!hasLocale(routing.locales, locale)) {
    return new Response("Insufficient search params", { status: 404 })
  }
  redirect({ href: "/", locale })
}
