const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const sinon = require("sinon")

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });
  
  it("has a name", () => {
    const user = new User({
      email: "someone@example.com",
      password: "Password1",
      name: "test name",
    });
    expect(user.name).toEqual("test name");
  });

  it("has an email address", () => {
    const user = new User({
      email: "someone@example.com",
      password: "Password1",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      email: "someone@example.com",
      password: "Password1",
    });
    expect(user.password).toEqual("Password1");
  });

  it("can save a user", (done) => {
    const user = new User({
      email: "someone@example.com",
      password: "Password1",
      name: "test name",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          email: "someone@example.com",
          name: "test name",
        });
        done();
      });
    });
  });

  it("password should be hashed", async () => {
    const spy = sinon.spy(bcrypt, 'hash');
    await User.create({
      email: "someone@example.com",
      password: "Password1",
      name: "test name",
    });

    expect(spy.called).toEqual(true);
  })
});
