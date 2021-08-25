const http = require('http');
const fs = require('fs');


function timestamped_log() {
  console.log(`${new Date()}:`, Array.prototype.slice.call(arguments).join(' '))
}

const hostname = '127.0.0.1';
const port = (process.argv[2] ? parseInt(process.argv[2]) : 8088)
const html = fs.readFileSync('index.html', 'utf8')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  timestamped_log(`listening on port ${port}...`)
  console.log(`Server running at http://${hostname}:${port}/`);
});