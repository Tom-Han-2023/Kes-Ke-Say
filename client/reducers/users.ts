import { User } from '../../models/user'


interface UserState {
  loading: boolean
  error: string | undefined 
  data: User[]
}

const initialState: UserState = {
  loading: false,
  error: undefined,
  data: [{
    id: 1,
    auth0Id: 'auth0|123',
    username: 'paige',
    fullName: 'Paige Turner',
    location: 'Auckland',
    image: 'ava-03.png',
}]
}

const reducer = (state = initialState, action: any): UserState => {
  switch(action.type) {
    default: return state
  }
}

export default reducer