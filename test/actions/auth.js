import { expect }  from "chai";
import * as actions from '../../app/actions/auth'
import { CALL_API, GET, POST } from '../../app/middleware/api'

describe('Auth Actions', () => {

  describe('loginRequest', () => {

    let result
    let apiObj
    let data = {email: "user@mail.com", password: "pass"}

    before(() => {
      result = actions.loginRequest(data)
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP POST Method', () => {
      expect(apiObj.method).to.equal(POST)
    })

    it('creates action with endpoint "/login"', () => {
      expect(apiObj.endpoint).to.equal('login').that.is.a('string')
    })

    it('creates action with given data', () => {
      expect(apiObj.data).to.deep.equal(data)
    })
  })

  describe('setEmail', () => {
    it('create an action to set an auth email adress', () => {
      const email = 'what@up.com'
      const expectedAction = {
        type: actions.SET_EMAIL,
        email
      }
      expect(actions.setEmail(email)).to.deep.equal(expectedAction)
    })
  })

  describe('logout', () => {
    it('create an action logout', () => {
      const expectedAction = {
        type: actions.LOGOUT
      }
      expect(actions.logout()).to.deep.equal(expectedAction)
    })
  })

  describe('setPassword', () => {
    it('create an action to set an auth password', () => {
      const password = 'word'
      const expectedAction = {
        type: actions.SET_PASSWORD,
        password
      }
      expect(actions.setPassword(password)).to.deep.equal(expectedAction)
    })
  })
})
