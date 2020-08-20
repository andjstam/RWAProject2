// const fs = require('fs')
// const bodyParser = require('body-parser')
// const jsonServer = require('json-server')
// const jwt = require('jsonwebtoken')

// const server = jsonServer.create()
// const router = jsonServer.router('server/db.json')
// const userdb = JSON.parse(fs.readFileSync('server/users.json', 'UTF-8'))

// server.use(jsonServer.defaults());
// server.use(bodyParser.urlencoded({extended: true}))
// server.use(bodyParser.json())

// const SECRET_KEY = '123456789'
// const expiresIn = '1h'

// // Create a token from a payload 
// function createToken(payload){
//     return jwt.sign(payload, SECRET_KEY, {expiresIn})
// }

// function readUsers() {
//   const dbRaw = fs.readFileSync('./server/db.json');  
//   const users = JSON.parse(dbRaw).users;
//   return users;
// }


// // Check if the user exists in database
// function isAuthenticated({email, password}){
//   let uInd=parseInt(userdb.users.findIndex(user => user.email === email && user.password === password))+1;
//   let korisnici=readUsers();
//   console.log(korisnici)
//   return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1;
// }


// server.post('/auth/login', (req, res) => {
//     const {email, password} = req.body;
//     console.log(req.body);
//     if (isAuthenticated({email, password}) === false) {
//       const status = 401
//       const message = 'Pogrešan email ili password'
//       res.status(status).json({status, message})
//       return
//     }
//     const access_token = createToken({email, password})
//     res.status(200).json({access_token})
// })

// server.use(router)

// server.listen(3000, () => {
//   console.log('Run Auth API Server');
// })

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');
const jwt = require('jsonwebtoken')

server.use(middlewares);
server.use(jsonServer.bodyParser);


const SECRET_KEY = '123456789'
const expiresIn = '1h'

function createToken(payload){
      return jwt.sign(payload, SECRET_KEY, {expiresIn}) 
}

server.post('/login', (req, res, next) => { 
  const users = readUsers();

  const user = users.filter(
    u => u.username === req.body.username && u.password === req.body.password
  )[0];

  if (user) {
    res.status(200).send( createToken({ username: req.body.username, password: req.body.password}));
  } else {
    res.status(401).send('Incorrect username or password');
  }
});

server.post('/register', (req, res) => {
  const users = readUsers();
  const user = users.filter(u => u.username === req.body.username)[0];

  if (user === undefined || user === null) {
    res.send({
      ...formatUser(req.body),
      token: checkIfAdmin(req.body)
    });
    db.users.push(req.body);
  } else {
    res.status(500).send('User already exists');
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');  
  const users = JSON.parse(dbRaw).users
  return users;
}