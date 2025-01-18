const http = require('http');
const fs = require('fs')
const url = require('url')

const product = [
  {
    name: 'Nipl R - type 308',
    img: 'IMG/fit1.jpg',
    description: 'Přivařovací vnější kónický závit',
  },
  {
    name: 'Nipl G - type 309',
    img: 'IMG/fit1.jpg',
    description: 'Celozávitová vsuvka s válcovým závitem',
  },
  {
    name: 'dvojnipl typ 310',
    img: 'IMG/fit1.jpg',
    description: 'vsuvka dvojita strandartni delka',
  }
];

const server = http.createServer ((req,res) => {
  if (req.method === 'GET' && req.url === '/fitinky-1.4401'){
      res.writeHead(200, {"content-type": 'aplication/json'});
      res.end(JSON.stringify(product));
  } else {
    res.writeHead(404, {"content-type": 'text/plain'});
    res.end('not found');
  }
}); 
server.listen(3000, ()=> {
  console.log('Server running on local host 3000')
}); 