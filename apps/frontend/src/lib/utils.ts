import type { Locale } from '@/providers'
import fetches from '@siberiacancode/fetches'

export async function fetchLocale(locale: Locale) {
  const messages = await fetches.get(`/locales/${locale}.json`)

  return messages.data as Record<string, string>
}

export function startViewTransition(callback: () => void) {
  if (document.startViewTransition)
    document.startViewTransition(callback)
  else
    callback()
}
