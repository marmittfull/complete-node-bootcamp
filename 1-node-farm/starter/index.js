const fs = require('fs');
const http = require('http');
const url = require('url');

// const fileInput = fs.readFileSync('./txt/input.txt', 'utf-8');

// const fileInput = fs.readFile('./txt/input.txt', 'utf-8', (error, data) => {
//   const appendText = `This is what we know about avocado: ${data}\nCreated at ${Date.now()}`
//   fs.writeFile('./txt/output.txt', appendText, (error, data) => {console.log('ok, the file was created.'); });
// })

// fs.writeFileSync('./txt/output.txt', appendText);


// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   if (err) return console.log('error on first read');
//   fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) => {
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         if (err)
//           console.log(err);

//         console.log('action completed');
//       })
//     })
//   })
// })
// console.log('writing the final file.');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName == '/overview')
    res.end('overview');
  else if (pathName === '/products')
    res.end('products');
  else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  }
  else
    res.end('invalid url');
});
server.listen('3333', '127.0.0.1', () => {
  console.log('server started');
})