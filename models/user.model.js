'use strict'

import { uuid } from '../src/utils/uuid';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      allowNull: false,
      unique: true,
      type: 'BINARY(16)',
      defaultValue: () => Buffer.alloc(16, uuid(), 'hex'),
      get: function () {
        return Buffer.from(this.getDataValue('uuid')).toString('hex')
      }
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'users',
    timestamps: true,
  })

  User.associate = function (models) {
    // associations
  }

  // hooks

  return User
}