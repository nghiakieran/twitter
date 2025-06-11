import { config } from 'dotenv'
import ms from 'ms'
config()
interface JWTConfig {
  ACCESS_TOKEN_EXPIRES_IN: number
  REFRESH_TOKEN_EXPIRES_IN: number
  EMAIL_VERIFY_TOKEN_EXPIRES_IN: number
}

const parseExpiration = (envValue: string | undefined, fallbackSeconds: number): number => {
  if (!envValue) return fallbackSeconds

  const result = ms(envValue as any)
  return typeof result === 'number' ? Math.floor(result / 1000) : fallbackSeconds
}

export const JWT_CONFIG: JWTConfig = {
  ACCESS_TOKEN_EXPIRES_IN: parseExpiration(process.env.ACCESS_TOKEN_EXPIRES_IN, 900), // 15 minutes
  REFRESH_TOKEN_EXPIRES_IN: parseExpiration(process.env.REFRESH_TOKEN_EXPIRES_IN, 8640000), // 100 days
  EMAIL_VERIFY_TOKEN_EXPIRES_IN: parseExpiration(process.env.EMAIL_VERIFY_TOKEN_EXPIRES_IN, 604800) // 7 days
}
