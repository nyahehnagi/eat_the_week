const Planner = require("../models/planner");

const PlannerController = {
  Show: (req, res) => {
    Planner.findOne({ user_id: req.user._id })
      .populate("plan.recipe_id")
      .exec(function (err, plan) {
        if (err) throw err;
        res.json(plan);
      });
  },

  Create: (req, res) => {
    // Remove any existing plans for this user
    // We currently only ever have one plan for a user
    // Ideally we would update an existing plan for better
    // performance and pure CRUD.
    Planner.deleteOne({
      user_id: req.user._id,
    }).exec((err, _) => {
      if (err) throw err;
    });

    const planner = new Planner({
      user_id: req.user._id,
      plan: req.body.planner.plan,
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
