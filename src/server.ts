import express from 'express';

export const app = express();


app.get( '/healthz', (_, res) => {
  // return a hello world message
  res.send({});
});
