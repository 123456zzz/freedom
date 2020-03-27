import koa from "koa";
import router from "koa-router";
import json from "koa-json";
import koajwt from "koa-jwt";
import serve from "koa-static";
import bodyparser from "koa-bodyparser";

const app = new koa();

app.use(serve("../static"));
app.use(json());
app.use(bodyparser());
app.use(
  koajwt({ secret: "token" }).unless({ path: [/\/register/, /\/login/] })
);
app.use(new router().routes());

app.listen("3000", () => {
  console.log("koa is listening in 3000");
});
