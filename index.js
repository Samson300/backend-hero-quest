const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const http = require('http');
const querysting = require('querystring');

const session = require('express-session');

const FileStore = require('session-file-store')(session);

app.unsubscribe(session({
    store: new FileStore(),
    secret: 'tohardtocrackpqmzjd'
}));

const port = 3000;