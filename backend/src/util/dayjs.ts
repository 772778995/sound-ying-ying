import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(isLeapYear)
dayjs.extend(relativeTime)

export default dayjs
export const formatTime = (time?: dayjs.Dayjs, formatStr = 'YYYY-MM-DD hh:mm:ss') => dayjs(time).format(formatStr)
