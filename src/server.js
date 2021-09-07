const http = require('http');
const htmlHandler = require('./htmlResponses');
const mediaHandler = require('./mediaResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response, 'client.html');
      break;
    case '/page2':
      htmlHandler.getIndex(request, response, 'client2.html');
      break;
    case '/page3':
      htmlHandler.getIndex(request, response, 'client3.html');
      break;
    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;
    case '/bling.mp3':
      mediaHandler.getBling(request, response);
      break;
    case '/bird.mp4':
      mediaHandler.getBird(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response, 'client.html');
      break;
  }
};

http.createServer(onRequest).listen(port);
console.log(`listenting on 127.0.0.1: ${port}`);
