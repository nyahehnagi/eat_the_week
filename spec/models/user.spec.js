const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  it("has a name", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      name: "test name",
    });
    expect(user.name).toEqual("test name");
  });

  it("has an email address", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
    });
    expect(user.password).toEqual("password");
  });

  // it("can save a user", (done) => {
  //   const user = new User({
  //     email: "someone@example.com",
  //     password: "password"
  //   });

  //   user.save((err) => {
  //     expect(err).toBeNull();

  //     User.find((err, users) => {
  //       expect(err).toBeNull();

  //       expect(users[0]).toMatchObject({
  //         email: "someone@example.com",
  //         password: "password"
  //       });
  //       done();
  //     });
  //   });
  // });
});
