const Router = require('express')
const router = new Router()

const modules = ['products', 'categories', 'manufacturer', 'users', 'comments', 'likes']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router