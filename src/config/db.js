import Sequelize from 'sequelize';

export const TodoList = new Sequelize('todo_list', 'chenLong', 'BBcl1991...', {
  host: '47.110.130.242',
  port: '3306',
  dialect: 'mysql',
  pool: { //连接池设置
    max: 5, //最大连接数
    min: 0, //最小连接数
    idle: 10000
  },
  // 数据库默认参数,全局参数
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true
  }
})