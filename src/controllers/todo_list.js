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
    const {
      state
    } = ctx.request.query;
    console.log('-->>', state);

    let params = {}
    if (state == 2) {
      params = {
        done: 0
      }
    } else if (state == 3) {
      params = {
        done: 1
      }
    }

    try {
      const list = await TodoListModel.getTodoList(params);
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

  static async toggleTodo(ctx) {
    let id = ctx.params.id;
    let state = ctx.request.body.state;

    try {
      await TodoListModel.toggleTodo(id, state);
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

  static async deleteTodo(ctx) {
    const {
      id
    } = ctx.params

    try {
      await TodoListModel.deleteTodo(id);
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