import { expect }  from "chai";
import * as actions from '../../app/actions/users'
import { CALL_API, GET, POST } from '../../app/middleware/api'

describe('Users Actions', () => {

  describe('fetchUsers()', () => {

    let result
    let apiObj

    before(() => {
      result = actions.fetchUsers()
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP GET Method', () => {
      expect(apiObj.method).to.equal(GET)
    })

    it('creates action with endpoint "users"', () => {
      expect(apiObj.endpoint).to.equal('users').that.is.a('string')
    })
  })

  describe('fetchUser(id)', () => {

    let result
    let apiObj
    let id = 1

    before(() => {
      result = actions.fetchUser(id)
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP GET Method', () => {
      expect(apiObj.method).to.equal(GET)
    })

    it('creates action with endpoint "users/id"', () => {
      expect(apiObj.endpoint).to.equal('users/1').that.is.a('string')
    })
  })
})
