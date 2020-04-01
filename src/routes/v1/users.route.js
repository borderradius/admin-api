import express from 'express'
import { get, insert, update, remove } from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/')
  .get(get)
  .post(insert)
  .put(update)
  .delete(remove)

export default router