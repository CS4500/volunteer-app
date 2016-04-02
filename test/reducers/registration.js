import { expect }  from "chai";
import reducer from '../../app/reducers/registration'
import * as actions from '../../app/actions/registration'

describe('Registration Reducer', () => {

  let registrationState = { user: { email: null,
                              password: null,
                              passwordVerify: null,
                              gender: null,
                              age: null,
                              location: null,
                              skills: [],
                              interests: [],
                              bio: null,
                              contact: true },
                      error: null,
                      isSaving: false,
                      success: false}

  let unknownAction = {type:'Unknown'}

  it('returns the initial state given undefined state', () => {
    let result = reducer(undefined, {})
    expect(result).to.have.property('user')
    expect(result).to.have.property('isSaving')
    expect(result).to.have.property('success')
    expect(result).to.have.property('error')
  })

  it('returns given state if action is no recognized', () => {
    let result = reducer(registrationState, unknownAction)
    expect(result).to.deep.equal(registrationState)
  })

  it('returns state with error if given SET_ERROR', () => {
    let error = "Error"
    let action = {type: actions.SET_ERROR, error}
    let result = reducer(registrationState, action)
    expect(result.error).to.equal(error)
  })

  it('returns state with no error if given REMOVE_ERROR', () => {
    let action = {type: actions.REMOVE_ERROR}
    let result = reducer(registrationState, action)
    expect(result.error).to.be.null
  })

  it('returns empty state if given RESET', () => {
    let action = {type: actions.RESET}
    let result = reducer(registrationState, action)
    expect(result).to.deep.equal(registrationState)
  })

  it('returns state with give user email given SET_EMAIL', () => {
    let email = "what@up.com"
    let action = {type: actions.SET_EMAIL, email}
    let result = reducer(registrationState, action)
    expect(result.user.email).to.equal(email)
  })

  it('returns state with given user password given SET_PASSWORD', () => {
    let password = "word"
    let action = {type: actions.SET_PASSWORD, password}
    let result = reducer(registrationState, action)
    expect(result.user.password).to.equal(password)
  })

  it('returns state with given user passwordVerify given SET_PASSWORDVERIFY', () => {
    let passwordVerify = "word"
    let action = {type: actions.SET_PASSWORDVERIFY, passwordVerify}
    let result = reducer(registrationState, action)
    expect(result.user.passwordVerify).to.equal(passwordVerify)
  })

  it('returns state with error if FAILURE action', () => {
    let action = {type: actions.SAVE_USER_FAILURE}
    let result = reducer(registrationState, action)
    expect(result.error).to.not.be.null
  })

  it('returns state with isSaving = true if given a REQUEST action', () => {
    let req_act_1 = reducer(registrationState, {type: actions.SAVE_USER_REQUEST})
    expect(req_act_1).to.have.property('isSaving').to.be.true
  })

  it('returns state with isSaving = false if given a SUCCESS/FAILURE action', () => {
    let success_act = reducer(registrationState, {type: actions.SAVE_USER_SUCCESS})
    expect(success_act).to.have.property('isSaving').to.be.false
    let failure_act = reducer(registrationState, {type: actions.SAVE_USER_FAILURE})
    expect(failure_act).to.have.property('isSaving').to.be.false

    //And following a reqeust action
    let after_req_state = reducer(registrationState, {type: actions.SAVE_USER_REQUEST})
    let success_act_after = reducer(after_req_state, {type: actions.SAVE_USER_SUCCESS})
    expect(success_act_after).to.have.property('isSaving').to.be.false
    let failure_act_after = reducer(after_req_state, {type: actions.SAVE_USER_FAILURE})
    expect(failure_act_after).to.have.property('isSaving').to.be.false
  })
})
