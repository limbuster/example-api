import test from 'ava';
import request from 'supertest';
import { app } from './server';

test('/healthz', async t => {
  const response = await request(app).get('/healthz');
  t.deepEqual(response.body, {});
});
