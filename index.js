const Koa = require('koa');
const KoaRouter = require("koa-router");
const app = new Koa();
const router = new KoaRouter();
// response
router.get("/", ctx=>(ctx.body = "index sayfasına hoş geldiniz."));

router.get("/hakkimda", ctx=>(ctx.body = "hakkimda sayfasına hoş geldiniz."));
router.get("/iletisim", ctx=>(ctx.body = "iletisim sayfasına hoş geldiniz."));

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);