const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();
app.use(volleyball); // DEBUGGING

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {
    noCache: true
});

app.listen(3003, () => {
    console.log(chalk.yellow('Server listening on port 3003...'));
});

app.use('/', routes);


// app.get('/', (req, res) => {
//     res.send(chalk.blue('You got it!'));
// });
