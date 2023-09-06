import { ApiDetails, Urls } from './apis'

/** @filter apifox 规定全部路由 */
export type RoutePaths<M extends keyof Urls = 'all'> = Urls[M]

export type RegisterApi = ApiDetails['post']['/user/register']
export type RegisterDto = RegisterApi['data']

export type LoginApi = ApiDetails['post']['/user/login']
export type LoginDto = LoginApi['data']
