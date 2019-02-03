import Router from 'koa-router';
import TodoListController from '../controllers/todo_list';

const router = new Router({
  prefix: '/api'
});

router.get('/todo', TodoListController.getTodoList); //获取todolsit
router.post('/todo', TodoListController.addTodoList)

export default router;