import { expect }  from "chai";
import reducer from '../../app/reducers/users'
import * as actions from '../../app/actions/users'

describe('Users Reducer', () => {

  let userstate = { isReq: false,
                       events: [{id:1, name:'Claire'},
                                {id:2, name:'Craig'}]}

  let unknownAction = {type:'Unknown'}

  it('returns the initial state given undefined state', () => {
    let result = reducer(undefined, {})
    expect(result).to.have.property('users')
    expect(result).to.have.property('isReq')
  })

  it('returns given state if action is no recognized', () => {
    let result = reducer(userstate, unknownAction)
    expect(result).to.deep.equal(userstate)
  })

  it('returns state with isReq = true if given a REQUEST action', () => {
    let req_act_1 = reducer(userstate, {type: actions.FETCH_USERS_REQUEST})
    expect(req_act_1).to.have.property('isReq').to.be.true
    let req_act_2 = reducer(userstate, {type: actions.FETCH_USER_REQUEST})
    expect(req_act_2).to.have.property('isReq').to.be.true
  })
})
