import Sequelize from 'sequelize';

export default new Sequelize('todo_list', 'chenLong', 'BBcl1991...', {
  host: '47.110.130.242',
  port: '3306',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  // 数据库默认参数,全局参数
  define: {
    timestamps: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    }
  }
})