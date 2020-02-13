const User = require('../models/User');

module.exports = {
  async index(req, res){
    try {
      const user = await User.find();

      return res.json(user);

    } catch (error) {
      console.log(error)
    }
  },

  async store(req, res){
    try {
      const user = await User.create(req.body);

      return res.json(user);

    } catch (error) {
      console.log(error)
    }
  },

  async show(req, res){
    try {
      const user = await User.findById(req.params.id);

      return res.json(user);

    } catch (error) {
        console.log(error)
    }
  },

  async update(req, res){
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

      return res.json(user);

    } catch (error) {
        console.log(error)
    }
  },

  async destroy(req,res){
    try {
      await User.findByIdAndRemove(req.params.id);

      return res.send('Deletado');

    } catch (error) {
        console.log(error)
    }
  }
};
