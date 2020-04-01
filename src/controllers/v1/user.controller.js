import { models } from '../../../models';

const get = async (req, res, next) => {
  try {
    const users = await models.User.findAll()
    // return res.json(users);
    return res.json({ result: true, message: 'get success', data: users })
  } catch (e) {
    next(e)
  }
}

const insert = async (req, res, next) => {
  try {
    const { userName } = req.body
    return res.json({ result: true, message: 'insert success', data: req.body })
  } catch (e) {
    next(e)
  }
}

const update = async (req, res, next) => {
  try {
    return res.json({ result: true, message: 'update success' })
  } catch (e) {
    next(e)
  }
}

const remove = async (req, res, next) => {
  try {
    return res.json({ result: true, message: 'delete success' })
  } catch (e) {
    next(e)
  }
}

export {
  get, insert, update, remove
}