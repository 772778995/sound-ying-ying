import Redis from 'ioredis'

// 2. 创建 Redis 客户端实例, 连接指定的 Redis 服务器
const redis = new Redis({
	port: 6379, // redis服务器默认端口号
	host: '127.0.0.1' // redis服务器的IP地址
})
