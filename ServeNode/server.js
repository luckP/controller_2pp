var os = require('os')
var ifaces = os.networkInterfaces();

const http = require('http')
var hostname = ''
const port = 3000



Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach((iface) => {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      return;
    }

    if (alias >= 1) {
    } else {
      console.log(ifname, iface.address);
      hostname = iface.address;
    }
    ++alias;
  });
});

const server = http.createServer((req, res) => {

  // if(req.method === 'POST'){
  //   let body = '';
  //   req.on('data', chunk =>{
  //     body += chunk.toString();
  //   });
  //   req.on('end', ()=>{
  //     // parse(body);
  //   });
  // res.end('POST\n');
  // }
  // else{
  //   res.end('GET\n')
  // }

  switch(req.method){
    case 'GET': {
      res.end('GET\n')
    }break;
    case 'POST': {
      res.end('POST\n')
    }break;
    case 'OPTIONS': {
      res.end('OPTIONS\n')
    }break;
    default:{
      res.end('default\n')
    }
  }
  console.log(req.method)



})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
