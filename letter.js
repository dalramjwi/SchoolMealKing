const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = fs.readFileSync("./letter.html");
    res.end(data);
  }
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
