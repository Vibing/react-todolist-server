export default function (sequelize, DataTypes) {
  return sequelize.define('todo_list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    done: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'todo_list'
  })

}