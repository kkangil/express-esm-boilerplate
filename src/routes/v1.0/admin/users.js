import models from '../../../models'

export const get = async (req, res, next) => {
  const page = req.page
  const pageSize = req.pageSize

  try {
    const result = await models.User.findAll({
      attributes: {
        exclude: ['password']
      },
      offset: (page - 1) * pageSize,
      limit: pageSize
    })

    res.set('x-page', page)
    res.set('x-page-size', pageSize)
    res.set('x-total-count', result.count)
    res.json(result.rows)
  } catch (err) {
    next(err)
  }
}

export const update = async (req, res, next) => {
  const userId = req.params.id
  const body = req.body

  try {
    await models.User.update(body, {
      where: {
        id: userId
      }
    })

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}

export const remove = async (req, res, next) => {
  const userId = req.params.id

  try {
    await models.User.update(
      {
        deleted: true
      },
      {
        where: {
          id: userId
        }
      }
    )

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}
