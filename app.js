// @ts-check

const Koa = require('koa');
const app = new Koa();
const PORT = 4500;

// koa의 장점 : async를 사용할 수 있음
app.use(async (ctx, next) => {
  console.log(ctx.request);
  console.log(ctx.response);
  ctx.body = 'Hello, koa world!'; // res.send와 비슷한 기능을 하는 코드
});
app.listen(PORT, () => {
  console.log(`koa서버 ${PORT}에서 작동되고 있음`);
});
