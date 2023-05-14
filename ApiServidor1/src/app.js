const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.port || 3001;

const app = express();

app.use(bodyParser.json());

//Array
const users = [
  {
    nameServer: "Hola servidor 1",
    ip: "192.168.50.3",
  },
  {
    id: 1,
    nombre: "Pedro",
    email: "pedro@email.com",
  },
  {
    id: 2,
    nombre: "Isabella",
    email: "isabela@email.com",
  },
  {
    id: 3,
    nombre: "Juan",
    email: "juan@email.com",
  },
];

//Routas
app.get("/", (req, res) => {
  res.send("Welcome to the ApiUsers Server 1");
});

//get users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

//books by id
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userById = users.find((userById) => userById.id === id);
  if (!userById) {
    return res.status(404).json({ error: "Book not found" });
  }
  return res.json(userById);
});

//add user
app.post("/add", (req, res) => {
  const userObj = {
    id: users.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
  };

  users.push(userObj);
  res.send("user added");
});

//Delete user
app.delete("/delete/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.send.status(404).send("User not found");

  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send("user delete");
});

app.put("/update/:id", (req, res) => {
  const index = users.findIndex(
    (index) => index.id === parseInt(req.params.id)
  );
  if (index !== -1) {
    users[index].nombre = req.body.nombre;
    users[index].email = req.body.email;
    res.send("User update");
  } else res.status(500).send("Fail to update");
});

app.listen(PORT, () => {
  console.log("Server running on the port " + PORT);
});
