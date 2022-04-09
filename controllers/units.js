const Unit = require("../models/unit");

const UnitsController = {
  Index: (req, res) => {
    Unit.find((err, units) => {
      if (err) {
        throw err;
      }
      res.json(units);
    });
  },

  Create: (req, res) => {
    const unit = new Unit({
      name: req.body.unit.name,
    });
    unit.save((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  },
};

module.exports = UnitsController;
