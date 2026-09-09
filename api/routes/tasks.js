const tasks = [];
const archived = [];

function json(res, body) {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(body));
}

function routeTasks(req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(tasks));
  }
  res.writeHead(405).end("method not allowed");
}

function routeArchive(req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(archived));
}

module.exports = { routeTasks, routeArchive };
