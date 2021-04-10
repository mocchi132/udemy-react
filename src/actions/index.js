import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// axiosは非同期処理で、戻り値がpromissなので、asyncとawaitをつける
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // console.log(response)
  // dispatchでreducerに、typeとresponseを返してあげる
  dispatch ({ type: READ_EVENTS,response })
}

export const postEvent = values => async dispatch => {
  // axious（非同期通信）実行
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  // console.log(response)
  // dispatchで、typeとresponseを引数に、reducerのswitchEventsを呼び出している
  dispatch ({ type: CREATE_EVENTS,response })
}
