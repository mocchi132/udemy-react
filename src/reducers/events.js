import _ from 'lodash'
import {
  READ_EVENTS,
  READ_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENTS
} from '../actions'

const switchEvents = (events = { }, action) => {
  switch (action.type) {
    case READ_EVENT:
    case CREATE_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      // eventsをメモリ展開し、data.id(選択したid)をキーにしたオブジェクトを
      // APIで取得した最新のdataオブジェクトで上書きし、返却する。
      return { ...events, [data.id]: data　}
    case READ_EVENTS:
      return _.mapKeys(action.response.data,'id')
    case DELETE_EVENTS:
      delete events[action.id]
      // { ...○○}(スプレッド演算子)を用いると
      // 新しいメモリ空間に、更新後のeventsオブジェクトを配置し、それを返してくれる
      return { ...events }

    default:
      return events
  }
}

export default switchEvents;
