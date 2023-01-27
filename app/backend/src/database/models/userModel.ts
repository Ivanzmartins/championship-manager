import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export default class User extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;
}

User.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: STRING(55),
    allowNull: false,
  },
  role: {
    type: STRING(55),
    allowNull: false,
  },
  email: {
    type: STRING(55),
    allowNull: false,
  },
  password: {
    type: STRING(55),
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});
