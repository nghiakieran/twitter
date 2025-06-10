import jwt, { SignOptions } from 'jsonwebtoken'
import { JWT_CONFIG } from '~/constants/config'

export const signToken = ({
  payload,
  privateKey = JWT_CONFIG.JWT_SECRET,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  privateKey?: string
  options?: SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token as string)
      }
    })
  })
}

export const verifyToken = ({
  token,
  secretOrPublicKey = JWT_CONFIG.JWT_SECRET
}: {
  token: string
  secretOrPublicKey?: string
}) => {
  return new Promise<jwt.JwtPayload>((resolve, reject) => {
    jwt.verify(token, secretOrPublicKey, (err, decoded) => {
      if (err) {
        throw reject(err)
      } else {
        resolve(decoded as jwt.JwtPayload)
      }
    })
  })
}
