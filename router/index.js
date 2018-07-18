const router = require('koa-router')()
const MinderController = require('../controller/minder')
module.exports = (app) => {
  router.get( '/', MinderController.index )
  app.use(router.routes())
    .use(router.allowedMethods())
}