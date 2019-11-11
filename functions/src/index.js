import * as functions from 'firebase-functions';
import express from 'express';
import expressServer from './server/index.js';

const app = express();

expressServer(app, express.Router());

export const expressApp = functions.https.onRequest(app);
