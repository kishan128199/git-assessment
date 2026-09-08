const users = [];

function routeUsers(req, res) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(users));
}

module.exports = { routeUsers };
