import  express  from 'express'
import helloController from './controllers/helloController'
import UserController from './controllers/UserControllers'
import RepoController from './controllers/RepoController'
import SessionController from './controllers/SessionController'
import auth from './middlewares/auth'

const routes =  express()






routes.post('/sessions', SessionController.create)
routes.get('/hello', helloController.index)

routes.use(auth)

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

routes.get('/users/:user_id/repositories', RepoController.index)
routes.post('/users/:user_id/repositories', RepoController.create)
routes.delete('/users/:user_id/:id', RepoController.destroy)



export default routes