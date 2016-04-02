import 'isomorphic-fetch'

//move to dev enviroment and set production in env vars
const API_ROOT = 'http://localhost:3004/'

//Supported HTTP Methods
export const GET = 'GET'
export const POST = 'POST'

// A default json http post header
const jsonHttpHeader = {'Accept': 'application/json', 'Content-Type': 'application/json'}

// Fetches an API response
function callApi(endpoint, method, data, token) {
  const fullUrl = API_ROOT + endpoint

  let authHeader = {}

  if (token) {
    authHeader = { 'Authorization': `Bearer ${token}` }
  }

  switch (method) {
    case GET:
      return fetch(fullUrl, {
          method: 'get',
          headers: authHeader
        })
        .then(response =>
          response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
          if (!response.ok) {
            return Promise.reject(json)
          }
          return json // may want to wrap in object
          // return Object.assign({}, json)
        })
    case POST:
      return fetch(fullUrl, {
          method: 'post',
          headers: Object.assign({}, jsonHttpHeader, authHeader),
          body: JSON.stringify(data)
        })
        .then(response =>
          response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
          if (!response.ok) {
            return Promise.reject(json)
          }
          return json // may want to wrap in object
          // return Object.assign({}, json)
        })
    default:
      throw new Error('Unsupported HTTP method')
  }
}

// may want to use Normalizr: https://github.com/gaearon/normalizr if  we
// have nested responses

export const CALL_API = 'Call API'

// A redux middleware, interpets a given CALL_API action, consumes
// actions of the following of form:
// [CALL_API]: {
//   types: [ OBJECT_REQUEST, OBJECT_SUCCESS, OBJECT_FAILURE ],
//   endpoint: `object`,
//   method: POST
//   data: json_obj    // only if a post request
// }

export default store => next => action => {
  const callAPI = action[CALL_API]

  //if this is not API call action then pass along
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types, method, data } = callAPI

  // check args
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  if (typeof method !== 'string') {
    throw new Error("Specify a HTTP method.")
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  const token = store.getState().auth.token;

  return callApi(endpoint, method, data, token).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'API fetch failed'
    }))
  )
}
