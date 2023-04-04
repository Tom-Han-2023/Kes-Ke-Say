import {User, UserSnakeCase} from "../../models/user"
import { REQUEST_USER, RECEIVE_USER, FAILURE_USER, UserInfoAction} from "../actions"

const initialState: UserState = {
  data: null,
  error: null,
  isLoading: false
}

type UserState = {
  data: User | null,
  error: string | null,
  isLoading: boolean
}




const userProfileReducer = (
  state = initialState,
  action: UserInfoAction): UserState => {
    switch(action.type) {
      case RECEIVE_USER:
        return {
          error: null,
          data: action.payload,
          isLoading: false
        }
        case REQUEST_USER:
          return {
            error: null,
            data: null ,
            isLoading: true
          }
          case FAILURE_USER:
            return {
              error: action.payload,
              data: null ,
              isLoading: false
            }
            default:
              return state
    }
  }














export default userProfileReducer