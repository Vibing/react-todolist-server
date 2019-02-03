import TodoListModel from '../models/todo_list';

export default class TodoListController {


  /**
   * 获取todolist
   * @date 2019-02-03
   * @static
   * @param {*} ctx
   * @memberof TodoListController
   */
  static async getTodoList(ctx) {
    try {
      const list = await TodoListModel.getTodoList();
      ctx.body = {
        code: 1,
        data: {
          list
        },
        message: '成功'
      }
    } catch (error) {
      ctx.body = {
        code: -1,
        message: JSON.stringify(error)
      }
    }
  }

  /**
   * 添加
   * @date 2019-02-03
   * @static
   * @param {*} ctx
   * @memberof TodoListController
   */
  static async addTodoList(ctx) {
    let todo = ctx.request.body;
    console.log('todo-->', todo);

    try {
      await TodoListModel.addTodoList(todo.text);
      ctx.body = {
        code: 1,
        message: '成功'
      }
    } catch (error) {
      ctx.body = {
        code: -1,
        message: JSON.stringify(error)
      }
    }
  }
}