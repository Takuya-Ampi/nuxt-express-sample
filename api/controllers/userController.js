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
        data: []
      })
    }
  },

  // 新しいユーザーを作成する。
  create_user : async (req, res) => {
    const user = new User()
    user.name = req.body.name
    await user.save()
      .then(result => {
        res.json({ message: "User created"})
      })
      .catch(err => {
        res.send(err)
        console.error(err)
      })
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
      // res.status(200).send("success")
    } catch (error) {
      console.log(error)
      return res.json({
        status: 400,
        data: []
      })
    }
  },

  // 特定のユーザーを更新する。
  update_user : async (req, res) => {
    const result =  await User.findById(req.params.user_id)
      .then(user => {
        user.name = req.body.name
        return user
      })
      .catch(err => {
        res.send(err)
      })
      await result.save()
      .then(result => {
        res.json({ message: "User created"})
      })
      .catch(err => {
        res.send(err)
      })
  },

  // 特定のユーザーを削除する。
  delete_user : async (req, res) => {
    await User.deleteOne({
      _id: req.params.user_id
    })
      .exec()
      .then(() => res.json({ message: "Successfully deleted"}))
      .catch(err => res.send(err))
  }
}
