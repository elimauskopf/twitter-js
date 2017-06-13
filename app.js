const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

const app = express();

app.set('vew engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {
    noCache: true
});

app.listen(3003, () => {
    console.log(chalk.yellow('Server listening on port 3003...'));
});

const locals = {
    title: 'hi',
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
};

nunjucks.configure('views');

app.get('/', (req, res) => {
    res.send(chalk.blue('You got it!'));
});

app.get('/stuff', (req, res) => {
    res.send(chalk.red('Stuff here'));
});


app.get('/views', (req,res) => {
    res.render('index.html', locals, (err, output) => {
        if (err) throw err;
        res.send(output);
    });

});

app.use(volleyball);
