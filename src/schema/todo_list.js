export default function (sequelize, DataTypes) {
  const todo_list = sequelize.define('todo_list', {
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
  });

  todo_list.sync();

  return todo_list;

}