const fs = require('fs');

const getIndex = (request, response, htmlPage) => {
  const index = fs.readFileSync(`${__dirname}/../client/${htmlPage}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;
