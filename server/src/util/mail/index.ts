import nodemailer from 'nodemailer'

//创建发送邮件的请求对象
const transporter = nodemailer.createTransport({
	service: 'qq',
	host: 'smtp.qq.com',
	port: 465,
	secure: true,
	auth: {
		user: '772778995@qq.com',
		pass: 'kouycvhkbaaebfaa'
	}
})

interface SendMail {
	from?: string
	to: string
	subject?: string
	text: string
}

export const sendMail = (options: SendMail) => {
	options = Object.assign(
		{
			from: '"5i996.icu" <772778995@qq.com>',
			subject: '5i996.icu网提示您'
		},
		options
	)
	return new Promise((resolve, reject) => {
		transporter.sendMail(options, (err, data) => {
			if (err) return reject(err)
			resolve(data)
		})
	})
}
