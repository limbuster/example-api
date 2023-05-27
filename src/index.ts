import {app} from './server';

const port = 8080;

// listen on the specified port
app.listen(port, () => {
  console.log( `server started at http://localhost:${ port }` );
});

