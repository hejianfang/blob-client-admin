import moment from 'moment'
const date = (date, formatType) => {
  if (!date) return null
  return moment(date).format(formatType)
}
const gapNowTime = (time) => {
  if (!time) return null
  let t = moment(time).fromNow()
  t = t === '几秒前' ? '刚刚' : t
  return t
}
const toNowTime = (time) => {
  if (!time) return null
  let t = moment(time).fromNow(true)
  return t
}
const filterMinute = (mss) => {
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = parseInt((mss % (1000 * 60)) / 1000)
  return minutes + '分' + seconds + '秒'
}

export default {
  date,
  gapNowTime,
  filterMinute,
  toNowTime
}
