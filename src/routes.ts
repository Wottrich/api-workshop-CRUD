import express, { request } from 'express'

import UserController from './controllers/UserController'

//Routers
const routes = express.Router()

//router services
const userController = new UserController()


routes.get('/users', userController.index)
routes.post('/users/create', userController.create)
routes.delete('/users/delete', userController.delete)
routes.put('/users/update', userController.update)

export default routes