import http from 'http'

const port = parseInt(process.env.PORT || '3000', 10)
const started = new Date().toISOString()

const server = http.createServer((req, res) => {
  if (req.url === '/404-uc3C6') {
    res.writeHead(404)
    return res.end('not found')
  }
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(`<h1>Deployed via aliajs /deploy</h1><p>Real git clone, real npm install, real systemd service.</p><p>Server started: ${started}</p><p>Request host: ${req.headers.host}</p>`)
})

server.listen(port, () => console.log(`listening on ${port}`))
