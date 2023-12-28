const koa = require("koa");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new koa();

    server.use(async (context, next) => {
        await handle(context.req, context.res);
        context.respond = false;
    });

    server.listen(3000, () => {
        console.log("koa listening on 3000.")
    });
});