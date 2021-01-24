const { Router } = require('express')

const router = Router()

// Test route
router.use('/test', (req, res) => {
  return res.json({
    status: 200,
    msg: 'success',
    data: 'test'
  })
})

module.exports = router
