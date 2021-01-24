const User = require('../models/user')
module.exports = {
  // 全てのユーザーを取得する。
  find_users : async (req, res) => {
    try {
      const user = await User.find({}).exec()
      return res.json({
        status: 200,
        msg: 'success',
        data: user
      })
    } catch (error) {
      console.log(error)
      return res.json({
        status: 400,
        msg: 'failed',
        data: []
      })
    }
  },
  // 新しくユーザーを作成する。
  create_user : async (req, res) => {
    const { name } = req.body
    try {
      const user = new User()
      user.name = name
      await user.save()
      return res.json({
        status: 200,
        msg: 'success',
        data: user
      })
    } catch (error) {
      console.log(error)
      return res.json({
        status: 400,
        msg: 'failed',
        data: []
      })
    }
  },
  // 特定のユーザーを取得する。
  find_user : async (req, res) => {
    try {
      const user = await User.findById(req.params.user_id).exec()
      return res.json({
        status: 200,
        msg: 'success',
        data: user
      })
    } catch (error) {
      console.log(error)
      return res.json({
        status: 400,
        msg: 'failed',
        data: []
      })
    }
  },

  // 特定のユーザーを更新する。
  update_user : async (req, res) => {
    const { name } = req.body.params
    try {
      const user = await User.findOneAndUpdate({_id: req.params.user_id}, { $set: { name: name } }, { new: true })
      return res.json({
        status: 200,
        msg: 'success',
        data: user
      })
    } catch (error) {
      console.log(error)
      return res.json({
        status: 400,
        msg: 'failed',
        data: []
      })
    }
  },

  // 特定のユーザーを削除する。
  delete_user : async (req, res) => {
    try {
      const user = await User.deleteOne({ _id: req.params.user_id }).exec()
      return res.json({
        status: 200,
        msg: 'success',
      })
    } catch (error) {
      return res.json({
        status: 400,
        msg: 'failed',
        data: []
      })
    }
  }
}
