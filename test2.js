const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit-form') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const input = qs.parse(body).input;
      console.log(input); // log the input to the terminal
      res.end('Input received!');
    });
  } else {
    res.end(`
      <form action="/submit-form" method="post">
        <label for="input-field">Input:</label>
        <input type="text" name="input" id="input-field">
        <button type="submit" id="submit-button">Submit</button>
      </form>
    `);
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});