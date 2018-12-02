const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaMount = require('koa-mount');
const path = require('path');

const app = new Koa();

app.use(KoaStatic(path.resolve(__dirname, '../dist')));

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
