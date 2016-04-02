import { expect }  from "chai";
import reducer from '../../app/reducers/auth'
import * as actions from '../../app/actions/auth'

describe('Authentication Reducer', () => {

  // Should add tests agains non null and null values
  // example have authStateEmpty and authState

  let authState = { user: { email: null,
                              password: null,
                              gender: null,
                              age: null,
                              location: null,
                              skills: [],
                              interests: [],
                              bio: null,
                              contact: true },
                      error: null,
                      isFetching: false,
                      isAuthenticated: false,
                      role: null,
                      token: null }

  // Abbreviated response, could test againt API mocks in db.json as well
  let APILoginRes = { user: {email: "user@mail.com" }, role: "user", token: "i9aA9ncznYEQ89B2" }

  let unknownAction = {type:'Unknown'}

  it('returns the initial state given undefined state', () => {
    let result = reducer(undefined, {})
    expect(result).to.have.property('user')
    expect(result).to.have.property('isAuthenticated')
    expect(result).to.have.property('isFetching')
    expect(result).to.have.property('error')
    expect(result).to.have.property('role')
    expect(result).to.have.property('token')
  })

  it('returns given state if action is no recognized', () => {
    let result = reducer(authState, unknownAction)
    expect(result).to.deep.equal(authState)
  })

  it('returns state with give user email given SET_EMAIL', () => {
    let email = "what@up.com"
    let action = {type: actions.SET_EMAIL, email}
    let result = reducer(authState, action)
    expect(result.user.email).to.equal(email)
  })

  it('returns state with given user password given SET_PASSWORD', () => {
    let password = "word"
    let action = {type: actions.SET_PASSWORD, password}
    let result = reducer(authState, action)
    expect(result.user.password).to.equal(password)
  })

  it('returns state with error if FAILURE action', () => {
    let action = {type: actions.LOGIN_FAILURE}
    let result = reducer(authState, action)
    expect(result.error).to.not.be.null
  })

  it('returns state with isFetching = true if given a REQUEST action', () => {
    let req_act_1 = reducer(authState, {type: actions.LOGIN_REQUEST})
    expect(req_act_1).to.have.property('isFetching').to.be.true
  })

  it('returns state with isFetching = false if given a SUCCESS/FAILURE action', () => {
    let success_act = reducer(authState, {type: actions.LOGIN_SUCCESS, response: APILoginRes})
    expect(success_act).to.have.property('isFetching').to.be.false
    let failure_act = reducer(authState, {type: actions.LOGIN_FAILURE})
    expect(failure_act).to.have.property('isFetching').to.be.false

    //And following a reqeust action
    let after_req_state = reducer(authState, {type: actions.LOGIN_REQUEST})
    let success_act_after = reducer(after_req_state, {type: actions.LOGIN_SUCCESS, response: APILoginRes})
    expect(success_act_after).to.have.property('isFetching').to.be.false
    let failure_act_after = reducer(after_req_state, {type: actions.LOGIN_FAILURE})
    expect(failure_act_after).to.have.property('isFetching').to.be.false
  })

  it('returns state with no token and isAuthenticated = false if given LOGOUT action', () => {
    let action = {type: actions.LOGOUT}
    let result = reducer(authState, action)
    expect(result.token).to.be.null
    expect(result.isAuthenticated).to.be.false
  })

  it('returns state with removed password given SUCCESS/FAILURE action', () => {
    // Following a setPassword
    let password = "word"
    let action = {type: actions.SET_PASSWORD, password}
    let result = reducer(authState, action)

    let success_act = reducer(authState, {type: actions.LOGIN_SUCCESS, response: APILoginRes})
    expect(success_act.user.password).to.be.null
    let failure_act = reducer(authState, {type: actions.LOGIN_FAILURE})
    expect(failure_act.user.password).to.be.null
  })
})
