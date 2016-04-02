import jsonServer from 'json-server';
import path from 'path';
import jwt from 'express-jwt';
import config from './token-config';
import users from './users';
import bodyParser from 'body-parser'
import jwtToken from 'jsonwebtoken';

var server = jsonServer.create()
server.use(jsonServer.defaults())
server.use( bodyParser.json() );

// We can add protected routes with jwt, currenlty no mocked routes are protected
// server.use(jwt({
//   secret: config.token.secret
// }).unless(req => {
//   const url = req.originalUrl;
//
//   return (
//       url === '/login'
//   );
// }));

function generateToken(email, password) {
  const payload = { email, password };
  return jwtToken.sign(payload, config.token.secret, {
    expiresIn: config.token.expires
  });
}

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.filter((user) => (user.email === email))[0]
  if (password === user.password) {
    const token = generateToken(email, password);
    const role = user.role;
    res.send({ token, user, role });
  } else {
    res.sendStatus(401);
  }
});

const jsonPath = path.join(__dirname, 'db.json');
var router = jsonServer.router(jsonPath)
server.use(router)

server.listen(3004)
