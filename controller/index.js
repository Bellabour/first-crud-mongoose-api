const Users = require("../models/users");

// Find All users
async function findAll(req, res) {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json;
    console.log(err);
  }
}

function gettingOne(req, res) {
  res.json(res.user);
}

async function creatingOne(req, res) {
  try {
    const users = new Users({
      Username: req.body.Username,
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
    });
    const newUser = await users.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updatingOne(req, res) {
  if (req.body.Username != null) {
    res.users.Username = req.body.Username;
  }
  if (req.body.Name != null) {
    res.users.Name = req.body.Name;
  }
  if (req.body.Email != null) {
    res.users.Email = req.body.Email;
  }
  if (req.body.Password != null) {
    res.users.Password = req.body.Password;
  }
  try {
    const updatedUsers = await res.users.save();
    res.json(updatedUsers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
async function deletingOne(req, res) {
  try {
    await res.users.remove();
    res.json({ message: "User has been deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
// async function getUsers(req, res, next) {
//   try {
//     const response = await Users.findById(req.params.id);
//     if (response == null)
//       if (response == undefined) {
//         return res.status(404).json({ message: "User Not Found" });
//       }
//     res.user = response;
//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// }

async function getUsers(req, res, next) {
  let users;
  try {
    users = await Users.findById(req.params.id);
    if (users == null)
      if (users == undefined) {
        return res.status(404).json({ message: "Cannot find user" });
      }
    res.user = users;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  findAll,
  gettingOne,
  creatingOne,
  updatingOne,
  deletingOne,
  getUsers,
};
