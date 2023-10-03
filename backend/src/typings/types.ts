import { DefaultContext, DefaultContextExtends, DefaultState, ExtendableContext, Next } from 'koa'
import { ApiDetails, Urls } from './apis'
import { DeepMerge } from 'can-can-word-bug'

type Context<Q, B> =
	DeepMerge<
		Omit<ExtendableContext, 'query' | 'request'>
		& {
			request: Omit<ExtendableContext['request'], 'body'> & { body: B }
		}
		& { state: DefaultState },
		{ query: Q }
	>

/** 请求方式 */
export type Method = keyof Urls
export type RoutePaths<M extends Method = 'all'> = Urls[M]

export type KoaRoutePath<M extends Method = 'all'> = RoutePaths<M> | RegExp
export type KoaRoutePaths<M extends Method = 'all'> = KoaRoutePath<M> | KoaRoutePath<M>[]

export type MiddleWare<M extends keyof ApiDetails, P extends KoaRoutePath> = (
	// @ts-ignore
	ctx: Context<ApiDetails[M][P]['params'], ApiDetails[M][P]['data']>,
	next: Next
) => any
