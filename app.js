const express = require('express');
const chalk = require('chalk');

const app = express();

app.listen(3003, () => {
    console.log(chalk.yellow('Server listening on port 3003...'));
});

app.use('/', (req, res, next) => {
    console.log(chalk.green(req.method), chalk.blue(req.url), chalk.yellow(res.statusCode.toString()));
    next();
});

app.get('/', (req, res) => {
    res.send(chalk.blue('You got it!'));
});

app.get('/stuff', (req, res) => {
    res.send(chalk.red('Stuff here'));
});
