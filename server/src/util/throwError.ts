import { isString } from "lodash"
import { logger } from "@/logs/logger"

export default (err: string | Error) => {
  if (!isString(err)) err = err.message || JSON.stringify(err)
  logger(err)
  throw new Error(err)
}