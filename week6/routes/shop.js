const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require("./admin");
router.use(express.static(path.join(__dirname, '../public')))
router.get('/shop', function (req, res) {
    let products = adminData.products;
    console.log(products);
    let gotProducts = false;

    if (products.length > 0) {
        gotProducts = true;
    }

    res.render('productResults', {
        pageTitle: 'Here are the available products to shop',
        products: products,
        gotProducts: gotProducts,
        fromShop: true
    });
});
router.get('/home', function (req, res) {
    res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
});
module.exports = router;