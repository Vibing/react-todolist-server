import TodoListDB from '../config/db';
const TodoList = TodoListDB.import('../schema/todo_list')

export default class TodoListModel {

  /**
   * 获取列表
   * @date 2019-02-03
   * @static
   * @memberof TodoListModel
   */
  static async getTodoList(params) {
    const todoList = await TodoList.findAll({
      order: [
        ["id", "desc"] //根据id倒序
      ],
      where: params
    })
    return todoList;
  }

  /**
   * 添加一条数据
   * @date 2019-02-03
   * @static
   * @param {*} text
   * @memberof TodoListModel
   */
  static async addTodoList(text) {
    await TodoList.create({
      text
    });
    return true;
  }

  /**
   * 修改状态
   * @date 2019-02-03
   * @static
   * @param {*} state
   * @returns
   * @memberof TodoListModel
   */
  static async toggleTodo(id, state) {
    await TodoList.update({
      done: state
    }, {
      'where': {
        'id': id
      }
    });
    return true;
  }

  /**
   * 删除数据
   * @date 2019-02-11
   * @static
   * @param {*} id
   * @memberof TodoListModel
   */
  static async deleteTodo(id) {
    await TodoList.destroy({
      where: {
        id
      }
    })
    return true;
  }


}