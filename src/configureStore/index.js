import { applyMiddleware, createStore } from 'redux'
//Middleware
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'
//Enhancers
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from '../enhancers/monitorReducer'
//Root Reducer
import rootReducer from './root.reducer'

export default function configureStore() {

  const middleware = [thunkMiddleware,loggerMiddleware] 
  const middlewareEnhancer = applyMiddleware(...middleware)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer,composedEnhancers)
  return store
}
  