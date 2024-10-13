const express = require('express');
const router = express.Router();
const path = require('path');
// ToDo: Use this data structure
let menu = [
    {'item' : 'Burger', 'cost' : 8.99, extra :
            [ 'cheese','onions']
    },
    {'item' : 'Pizza', 'cost' : 12.99, extra :
            ['cheese', 'onions', 'meat' ]
    },
    {'item' : 'Taco', 'cost' : 5.99, extra :
            ['chicken', 'fish', 'cilantro']
    },
    {'item' : 'Hot Dog', 'cost' : 6.99, extra :
            []
    },
];
router.get('/home', function (req, res) {
    // res.sendFile( path.join( __dirname, '../public/shopHome.hbs' ) );
    res.render('shopHome');
});
router.post('/results', function(req, res) {
    let food = req.body.item;
    let found = false;

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].item === food) {
            found = true;
            res.render('results', {
                item: menu[i].item,
                cost: menu[i].cost,
                extras: menu[i].extra
            });
        }
    }
    res.render('notFound');
})
router.get('/shop', function(req, res) {
    res.render('products', {
        products: menu
    });
})
// fkd;s
module.exports = router;