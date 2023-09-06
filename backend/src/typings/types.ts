import { ApiDetails, Urls } from "./apis";

/** @filter apifox 规定全部路由 */
export type RoutePaths<M extends keyof Urls = 'all'> = Urls[M]

export type CreateUserApi = ApiDetails['post']['/user/create-user']
export type CreateUserDto = CreateUserApi['data']

export type LoginApi = ApiDetails['post']['/user/login']
export type LoginDto = LoginApi['data']