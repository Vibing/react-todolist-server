console.log(__dirname);
import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import router from './routes/index';

const app = new Koa();
app.use(cors());
app.use(logger())
app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(9527, () => {
  console.log(`server running success....`)
})