import { createFactory } from 'hono/factory'

export interface Env {
  Variables: undefined
}

export const factory = createFactory<Env>()
