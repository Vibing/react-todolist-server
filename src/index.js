import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import router from './routes/index';

const app = new Koa();
app.use(logger())
app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(9527, () => {
  console.log(`server running success....`)
})

console.log(__dirname);