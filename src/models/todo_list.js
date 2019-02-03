import {
  TodoList
} from '../config/db';
import TodoList from '../schema/todo_list';

export default class TodoListModel {

  /**
   * 获取列表
   * @date 2019-02-03
   * @static
   * @memberof TodoListModel
   */
  static async getTodoList() {
    const todoList = await TodoList.findAll({
      order: [
        ["id", "desc"] //根据id倒序
      ]
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


}