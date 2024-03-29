import passport from 'passport'
import bcrypt from 'bcrypt-nodejs'

import models from '../../models/index'
import { createToken } from '../../lib/jwt'

export const signup = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password)
    req.body.password = hash

    await models.User.create(req.body)

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}

export const login = (req, res, next) => {
  passport.authenticate('local', function authenticateByLocal(err, user, ex) {
    if (err) {
      next(new Error('아이디와 비밀번호를 확인해주세요.'))
    } else {
      if (ex) {
        next(ex)
      } else {
        const token = createToken(user)
        user.token = token
        res.json(user)
      }
    }
  })(req, res)
}
