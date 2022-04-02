const mongoose = require("mongoose");
require("../mongodb_helper");

const Recipe = require("../../models/recipe");

describe("Recipe model", () => {
  // beforeEach((done) => {
  //   // removes the recipe collection from the database
  //   mongoose.connection.collections.recipe.drop(() => {
  //     done();
  //   });
  // });

  it("has a name", () => {
    const recipe = new Recipe({
      name: "bacon and eggs"
    });
    expect(recipe.name).toEqual("bacon and eggs");
  });

});
