import express from 'express';

const app = express();

const port = 8080;

app.get( '/', (_, res) => {
  // return a hello world message
  res.send({'message': 'hello world!'});
});

// listen on the specified port
app.listen(port, () => {
  console.log( `server started at http://localhost:${ port }` );
});
