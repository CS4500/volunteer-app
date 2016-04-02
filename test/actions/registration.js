import { expect }  from "chai";
import * as actions from '../../app/actions/registration'
import { CALL_API, GET, POST } from '../../app/middleware/api'

describe('Registration Actions', () => {

  describe('setEmail', () => {
    it('create an action set an email adress', () => {
      const email = 'what@up.com'
      const expectedAction = {
        type: actions.SET_EMAIL,
        email
      }
      expect(actions.setEmail(email)).to.deep.equal(expectedAction)
    })
  })

  describe('setPassword', () => {
    it('create an action set a password', () => {
      const password = 'word'
      const expectedAction = {
        type: actions.SET_PASSWORD,
        password
      }
      expect(actions.setPassword(password)).to.deep.equal(expectedAction)
    })
  })

  describe('setPasswordVerify', () => {
    it('create an action set a password verify', () => {
      const passwordVerify = 'word'
      const expectedAction = {
        type: actions.SET_PASSWORDVERIFY,
        passwordVerify
      }
      expect(actions.setPasswordVerify(passwordVerify)).to.deep.equal(expectedAction)
    })
  })

  describe('setError', () => {
    it('create an action set an error', () => {
      const error = 'Failed'
      const expectedAction = {
        type: actions.SET_ERROR,
        error
      }
      expect(actions.setError(error)).to.deep.equal(expectedAction)
    })
  })

  describe('saveUser(data)', () => {

    let result
    let apiObj
    let data = {id: 1, name: "John"}

    before(() => {
      result = actions.saveUser(data)
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP POST Method', () => {
      expect(apiObj.method).to.equal(POST)
    })

    it('creates action with endpoint "/users"', () => {
      expect(apiObj.endpoint).to.equal('users').that.is.a('string')
    })

    it('creates action with given data', () => {
      expect(apiObj.data).to.deep.equal(data)
    })
  })
})
