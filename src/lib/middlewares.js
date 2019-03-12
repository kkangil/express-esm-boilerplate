import { validateToken } from './jwt'
import config from '../../config'

export const authenticate = async (req, res, next) => {
  const token = req.get(config.header.token)

  if (token) {
    try {
      const payload = await validateToken({ token })
      req.user = payload
      next()
    } catch (err) {
      next(err)
    }
  } else {
    next(new Error('No Token'))
  }
}

export const validateAdmin = async (req, res, next) => {
  const token = req.get(config.header.token)

  if (token) {
    try {
      const payload = await validateToken({ token })
      if (payload.isAdmin) {
        req.user = payload
        next()
      } else {
        const error = new Error('권한이 없습니다.')
        error.status = 402
        next(error)
      }
    } catch (err) {
      next(err)
    }
  } else {
    next(new Error('No Token'))
  }
}

export const paginate = (req, res, next) => {
  req.page = Number(req.query['x-page']) || config.pagination.defaultPage
  req.pageSize =
    Number(req.query['x-page-size']) || config.pagination.defaultPageSize
  next()
}