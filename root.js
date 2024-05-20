// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   let url = req.url;

//   if (url === "/") {
//     FileRead("./public/letter.html", (data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   }

//   if (url === "/menu.html") {
//     FileRead("./public/menu.html", (data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   }
//   if (url === "/cafe.html") {
//     FileRead("./public/cafe.html", (data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   }

//   if (url === "/letter.css") {
//     FileRead("./public/letter.css", (data) => {
//       res.writeHead(200, { "Content-Type": "text/css" });
//       res.write(data);
//       res.end();
//     });
//   }

//   if (url === "/menu.css") {
//     FileRead("./public/menu.css", (data) => {
//       res.writeHead(200, { "Content-Type": "text/css" });
//       res.write(data);
//       res.end();
//     });
//   }
//   if (url === "/cafe.css") {
//     FileRead("./public/cafe.css", (data) => {
//       res.writeHead(200, { "Content-Type": "text/css" });
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// function FileRead(path, callback) {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       callback(data);
//     }
//   });
// }
const serverSet = require("./serverSet");
serverSet(3000);
