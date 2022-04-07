const User = require("../models/user");
const jwt = require("jsonwebtoken");

const UsersController = {
  Create: async (req, res) => {
    const userExists = await User.findOne({ email: req.body.user.email })
    if (userExists) {
      return res.status(401).json({ error: "email already in use"})
    } else {
        const user = new User(req.body.user);
        user.save((err, result) => {
        if (err) {
          res.status(500).send("Error registering new user please try again.");
          throw err;
        }
        
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.AUTH_KEY, {
          expiresIn: "1h",
        });
        
        const payload = { id: result._id, name: result.name };
        
        res.cookie("token", token);
        res.cookie("name", result.name);
        res.json(payload);
      }
    )} 
  },
};

module.exports = UsersController;
