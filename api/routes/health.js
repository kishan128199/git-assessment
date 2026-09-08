function routeHealth(req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ ok: true }));
}

module.exports = { routeHealth };
