const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

const app = express();

app.listen(3003, () => {
    console.log(chalk.yellow('Server listening on port 3003...'));
});

// app.use('/', (req, res, next) => {
//     console.log(chalk.blue(req.method), req.url, chalk.green(res.statusCode.toString()));
//     next();
// });



app.use(volleyball);

app.get('/', (req, res) => {
    res.send(chalk.blue('You got it!'));
});

app.get('/stuff', (req, res) => {
    res.send(chalk.red('Stuff here'));
});

app.get('/views', (req,res) => {
    var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
    var env = nunjucks.configure('/views');
    env.render('/views/index.html', locals, (err, output) =>{
        console.log(output);
    });

});

