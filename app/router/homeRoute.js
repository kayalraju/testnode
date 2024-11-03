
const express=require('express')
const HomeController = require('../controller/HomeController')
const AboutController = require('../controller/AboutController')

const router=express.Router()


router.get('/',HomeController.home)
router.get('/about', AboutController.about)


module.exports=router