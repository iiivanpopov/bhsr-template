import fetches from '@siberiacancode/fetches'
import { toast } from 'sonner'
import { config } from '@/config'

export const $api = fetches.create({
  baseURL: config.api.baseURL,
})

$api.interceptors.response.use(undefined, (error) => {
  toast.error(error.response.data?.message ?? error.message ?? 'Unexpected Error')
})
