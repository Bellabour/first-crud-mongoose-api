const express= require ('express')
const router = express.Router()//getting router portion frome express
const Users = require('../models/users')
const controller = require('../controller/index.js')
//getting all
router.get('/',controller.findAll)
//getting one
router.get('/:id',controller.getUsers,controller.gettingOne)
//creating one
router.post('/',controller.creatingOne)
//updating one
router.patch('/:id',controller.getUsers,controller.updatingOne)
//deleting one
router.delete('/:id',controller.getUsers,controller.deletingOne)

module.exports = router