// import path from "path";
const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, '../public')));
router.get( '/add-product', ( req, res, next ) => { // route
    res.sendFile(path.join(__dirname, '../public/productForm.html'));
})
router.post( '/product', ( req, res, next ) => { // route
    console.log(req.body);
    // res.redirect("/");
    res.send(`Selection: ${req.body.title} Author: ${req.body.author}`);
})
module.exports = router;