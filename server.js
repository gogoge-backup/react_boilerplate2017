const Koa = require('koa');
const app = new Koa();

const webpackConfig = require('./webpack.config.js')
const webpack = require('webpack')
const bundle = webpack(webpackConfig)


// var webpackMiddleware = require("webpack-dev-middleware")
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware')
// const mount = require('koa-mount')

const devMiddlewareConfig = {
  // // publicPath is required, whereas all other options are optional
  // noInfo: false,
  // // display no info to console (only warnings and errors)

  // quiet: false,
  // // display nothing to the console

  // lazy: true,
  // // switch into lazy mode
  // // that means no watching, but recompilation on every request

  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: true
  // },
  // // watch options (only lazy: false)

  publicPath: webpackConfig.output.publicPath,
  // // public path to bind the middleware to
  // // use the same as in webpack

  // index: "index.html",
  // // The index path for web server, defaults to "index.html".
  // // If falsy (but not undefined), the server will not respond to requests to the root URL.

  // headers: { "X-Custom-Header": "yes" },
  // // custom headers

  // mimeTypes: { "text/html": [ "phtml" ] },
  // // Add custom mime/extension mappings
  // // https://github.com/broofa/node-mime#mimedefine
  // // https://github.com/webpack/webpack-dev-middleware/pull/150

  stats: {
    colors: true
  },
  // // options for formating the statistics

  // reporter: null,
  // // Provide a custom reporter to change the way how logs are shown.

  // serverSideRender: false,
  // // Turn off the server-side rendering mode. See Server-Side Rendering part for more info.
}

// const expressToKoa = require('koa-connect')
const expressToKoa = require('express-to-koa')
// var koaRouter = require('koa-router')
// const static = require('koa-static')

// const frontend = new Koa();
// const frontend = new koaRouter()

// frontend.get('/', static(__dirname + '/dist/index.html'))

// app
//   .use(frontend.routes())
//   .use(frontend.allowedMethods())
// app.use(mount('/', ctx => {
//   console.warn((ctx.request))

//   return static(__dirname + '/dist/index.html')
//   }
// ))
app.use(devMiddleware(bundle, devMiddlewareConfig))
app.use(hotMiddleware(bundle, {
  // log: console.log,
  // path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
}))
// app.use(ctx => {
//   ctx.body = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="UTF-8">
//         <title>Webpack App</title>
//       </head>
//       <body>
//       <script type="text/javascript" src="dist/bundle.js"></script></body>
//     </html>
//   `
// })
// app.use(mount('/', frontend));

// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.listen(3000)
