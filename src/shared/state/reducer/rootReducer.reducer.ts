import { connectRouter } from 'connected-react-router'
import history from '../../utils/history'
import { authenticationReducer } from '../slices/authentication.slice'
import { toDoListReducer } from '../slices/toDoList.slice'

const rootReducer = {
  authenticationReducer,
  toDoListReducer,
  router: connectRouter(history),

  // another reducers (if we have)
}
export default rootReducer
