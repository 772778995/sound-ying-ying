import path from 'path' //引入原生path模块
import log4js from 'koa-log4' //引入koa-log4

log4js.configure({
  appenders: {
    //访问日志
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      encoding: "utf-8",
      //生成文件路径和文件名
      filename: path.join(__dirname, '/access.log')
    },
    //系统日志
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      encoding: "utf-8",
      //生成文件路径和文件名
      filename: path.join(__dirname, '/application.log')
    },
    console: {
      type: 'console',
      layout: { type: 'colored' }
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'info' },
    access: { appenders: ['access', 'console'], level: 'info' },
    application: { appenders: ['application', 'console'], level: 'WARN' }
  }
})

export const accessLogger = () => log4js.koaLogger(log4js.getLogger('access'))
export const systemLogger = () => log4js.getLogger('application')
export const logger = (str: string) => log4js.getLogger('console').info(str)