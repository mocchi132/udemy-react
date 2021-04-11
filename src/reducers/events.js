import _ from 'lodash'
import {
  READ_EVENTS,
  DELETE_EVENTS
} from '../actions'

const switchEvents = (events = { }, action) => {
  switch (action.type) {
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
