const Planner = require("../models/planner");

const PlannerController = {
  Show: (req, res) => {

    Planner.
      find({user_id: req.params.id}).
      populate('plan.recipe_id').
      exec(function (err, plan) {
        if (err) throw err;
        res.json(plan);
      }) 
  },

  Create: (req, res) => {
    const planner = new Planner({
      user_id: req.user._id,
      plan: req.body.planner.plan
    });
    planner.save((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  },

};

module.exports = PlannerController;
