const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
    let els = tweetBank.list();
    res.render('index', { list: els });
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  let list = tweetBank.find( {name: name} );
  //console.log(list);
  res.render( 'index', { list: list } );
});

router.get('/tweets/:id', function(req,res){
    let id = req.params.id;
    let list = tweetBank.find({id: Number(id)});
    console.log(list);
    res.render('index',{list: list} )
})

router.use(express.static('public'));


module.exports = router;
