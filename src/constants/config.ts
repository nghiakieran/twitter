import ms from 'ms'

interface JWTConfig {
  ACCESS_TOKEN_EXPIRES_IN: number
  REFRESH_TOKEN_EXPIRES_IN: number
  JWT_SECRET: string
}

const parseExpiration = (envValue: string | undefined, fallbackSeconds: number): number => {
  if (!envValue) return fallbackSeconds

  const result = ms(envValue as any)
  return typeof result === 'number' ? Math.floor(result / 1000) : fallbackSeconds
}

export const JWT_CONFIG: JWTConfig = {
  ACCESS_TOKEN_EXPIRES_IN: parseExpiration(process.env.ACCESS_TOKEN_EXPIRES_IN, 900), // 15 minutes
  REFRESH_TOKEN_EXPIRES_IN: parseExpiration(process.env.REFRESH_TOKEN_EXPIRES_IN, 8640000), // 100 days
  JWT_SECRET: process.env.JWT_SECRET || ''
}
