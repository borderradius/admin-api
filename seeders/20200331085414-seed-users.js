'use strict';

import moment from 'moment'
import { uuid } from '../src/utils/uuid';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          uuid: Buffer.alloc(16, uuid(), 'hex'),
          email: 'test@test.com',
          password: 'test1234',
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
          uuid: Buffer.alloc(16, uuid(), 'hex'),
          email: 'test1@test.com',
          password: 'test1234',
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        {
          uuid: Buffer.alloc(16, uuid(), 'hex'),
          email: 'test2@test.com',
          password: 'test1234',
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
