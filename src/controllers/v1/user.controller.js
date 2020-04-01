import httpStatus from 'http-status'
import createError from 'http-errors'
import userRepo from '../../repositories/user.repository';

const get = async (req, res, next) => {
  try {
    if (req.params.uuid) {

      const user = await userRepo.find(req.params.uuid)

      if (!user) {
        throw (createError(httpStatus.NOT_FOUND, '사용자를 찾을 수 없습니다.'))
      }

      return res
        .status(httpStatus.OK)
        .json(user)
    } else {
      // const users = await models.User.findAll()
      const users = await userRepo.all()

      return res.json(users)
    }
  } catch (e) {
    next(e)
  }
}

// const insert = async (req, res, next) => {
//   try {
//     const { userName } = req.body
//     return res.json({ result: true, message: 'insert success', data: req.body })
//   } catch (e) {
//     next(e)
//   }
// }

// const update = async (req, res, next) => {
//   try {
//     return res.json({ result: true, message: 'update success' })
//   } catch (e) {
//     next(e)
//   }
// }

// const remove = async (req, res, next) => {
//   try {
//     return res.json({ result: true, message: 'delete success' })
//   } catch (e) {
//     next(e)
//   }
// }

export {
  get
}