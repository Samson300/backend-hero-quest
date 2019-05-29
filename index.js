const express = require('express');
const app = express();
const port = 3000;

// const es6Renderer = require('express-es6-template-engine');
// const http = require('http');
// const querysting = require('querystring');

// const session = require('express-session');

// const FileStore = require('session-file-store')(session);

// app.unsubscribe(session({
//     store: new FileStore(),
//     secret: 'tohardtocrackpqmzjd'
// }));

app.user(express.json());

const userRouter = require('./routers/user');

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`backend listening on port ${port}`);
});