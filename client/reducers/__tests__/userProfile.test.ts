import {User, UserSnakeCase} from "../../../models/user"
import userProfileReducer, {UserState} from "../userProfileReducer"

import { receiveUser } from "../../actions"

const initialState: UserState = {
  data: null,
  error: null,
  isLoading: false,
}

describe("userProfileReducer test", () => {
  test("should get a user", () => {
    const user: data = {
      id: 2,
      username: "ida",
      full_name: "Ida Dapizza",
      location: "Auckland",
      image: "ava-02.png",
      auth0_id: "auth0|234"

    }
        const action = receiveUser(user)
        const newState = userProfileReducer(initialState, action)
        expect(newState.data).toEqual(user)





  })
})