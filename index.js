const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// const es6Renderer = require('express-es6-template-engine');
// const http = require('http');
// const querysting = require('querystring');

// const session = require('express-session');

// const FileStore = require('session-file-store')(session);

// app.unsubscribe(session({
//     store: new FileStore(),
//     secret: 'tohardtocrackpqmzjd'
// }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRouter = require('./routers/user');

// const db = require('./models/conn');
// db.any('select * from users')
// .then(userArray => {
//     // userArray.forEach(console.log)
// })

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`backend listening on port ${port}`);
});
