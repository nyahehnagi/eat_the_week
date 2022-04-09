const Planner = require("../models/planner");

const PlannerController = {
  Show: (req, res) => {
    
    Planner.find((err, plan) => {
      if (err) {
        throw err;
      }
      res.json(plan);
    });
  },

};

module.exports = PlannerController;
