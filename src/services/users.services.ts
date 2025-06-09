import User from '~/models/schemas/User.schemas'
import databaseService from './database.services'
import { RegisterReqBody } from '~/models/requests/User.requests'
import { signToken } from '~/utils/jwt'
import { TokenType } from '~/constants/enums'
import { hashPassword } from '~/utils/crypto'
import { JWT_CONFIG } from '~/constants/config'

class UsersService {
  private signAccessToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.AccessToken
      },
      options: {
        expiresIn: JWT_CONFIG.ACCESS_TOKEN_EXPIRES_IN
      }
    })
  }
  private signRefreshToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.RefreshToken
      },
      options: {
        expiresIn: JWT_CONFIG.REFRESH_TOKEN_EXPIRES_IN
      }
    })
  }
  async register(payload: RegisterReqBody) {
    const result = await databaseService.users.insertOne(
      new User({
        ...payload,
        date_of_birth: new Date(payload.date_of_birth),
        password: hashPassword(payload.password)
      })
    )
    const user_id = result.insertedId.toString()
    const [accessToken, refreshToken] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])

    return {
      accessToken,
      refreshToken
    }
  }
  async checkEmailExists(email: string) {
    const user = await databaseService.users.findOne({ email })
    return !!user
  }
}

const usersService = new UsersService()
export default usersService
