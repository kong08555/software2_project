const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  const filename = path.join(__dirname, q.pathname);

  if (q.pathname === '/submit') {
    const { f_name, l_name, faculty, p_id } = q.query;
    const data = `First Name: ${f_name}\nLast Name: ${l_name}\nFaculty: ${faculty}\nPersonal ID: ${p_id}`;

    fs.writeFile(path.join(__dirname, 'data.txt'), data, (err) => {
      if (err) throw err;
      console.log('Data written to file successfully!');
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Thank you for submitting the form!</h1>');
  } else {
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 Not Found');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
}).listen(3000);