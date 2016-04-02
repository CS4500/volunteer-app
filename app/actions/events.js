import { CALL_API, GET, POST } from '../middleware/api'

//action types
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE'

export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST'
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS'
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE'

export const FETCH_FEATURED_EVENTS_REQUEST = 'FETCH_FEATURED_EVENTS_REQUEST'
export const FETCH_FEATURED_EVENTS_SUCCESS = 'FETCH_FEATURED_EVENTS_SUCCESS'
export const FETCH_FEATURED_EVENTS_FAILURE = 'FETCH_FEATURED_EVENTS_FAILURE'

export const SAVE_EVENT_REQUEST = 'FETCH_EVENTS_REQUEST'
export const SAVE_EVENT_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const SAVE_EVENT_FAILURE = 'FETCH_EVENTS_FAILURE'

export function fetchEvents() {
  return {
    [CALL_API]: {
      types: [ FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE ],
      endpoint: `events`,
      method: GET
    }
  }
}

export function fetchEvent(id) {
  return {
    [CALL_API]: {
      types: [ FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE ],
      endpoint: `events/${id}`,
      method: GET
    }
  }
}

export function fetchFeaturedEvents() {
  return {
    [CALL_API]: {
      types: [ FETCH_FEATURED_EVENTS_REQUEST, FETCH_FEATURED_EVENTS_SUCCESS, FETCH_FEATURED_EVENTS_FAILURE ],
      endpoint: `featured-events`,
      method: GET
    }
  }
}

// must save event in local state and then post to backend
export function saveEvent(data) {
  return {
    [CALL_API]: {
      types: [ SAVE_EVENT_REQUEST, SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE ],
      endpoint: `events`,
      method: POST,
      data: data
    }
  }
}
