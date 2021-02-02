const { Router } = require('express')
const { signupUser, loginUser, logoutUser } = require('../controller/auth')
const { getUser } = require('../controller/helper/middleware')


const router = Router()

router.post('/signup', signupUser)
router.get('/user', getUser)
router.get('/logout', logoutUser)
router.post('/login', loginUser)

module.exports = router