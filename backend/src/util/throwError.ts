import { isString } from 'lodash'
import { logger, systemLogger } from '@/logs/logger'

export default (err: string | Error) => {
	if (!isString(err)) err = err.message || JSON.stringify(err)
	systemLogger().error(err)
	throw new Error(err)
}
