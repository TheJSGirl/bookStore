const axios = require('axios');
const config = require('./../config');
const { response } = require('./../utils');

const checkAuth = async (req, res, next) => {
  const headerToken = req.headers.authorization;
  const token = headerToken ? headerToken.split(' ')[1] : '';

  if (!token) {
    req.authenticated = false;
    return res.status(401).send(response({}, 'Unauthorized Request', false));
  }
  const { data } = await axios.get(`${config.Services.USER_SERVICE}/users/auth`, { headers: { Authorization: headerToken } })
    .catch(e => res.status(400).json(response({}, `User service error: ${e}`, false)));
  if (!data.success) {
    return res.status(401).send(response({}, data.message, false));
  }

  const { user, permission, authenticated } = data.data;
  req.authenticated = authenticated;
  req.user = user;
  req.permission = permission;
  await next();
};

module.exports = checkAuth;
