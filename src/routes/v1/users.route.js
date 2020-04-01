import express from 'express'
import { get } from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/:uuid?')
  .get(get)
// .post(insert)
// .put(update)
// .delete(remove)

export default router