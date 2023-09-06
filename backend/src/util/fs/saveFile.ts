import fs, { stat } from 'fs-extra'
import path from 'path'

type Flags = 'a' | 'ax' | 'a+' | 'ax+' | 'as' | 'as+' | 'r' | 'rs+' | 'w' | 'wx' | 'w+' | 'wx+'
type Opts = {
	file: any
	fileName?: string
	toPath: string
	flags?: Flags
}
interface SaveFileResponse extends fs.Stats {
	writeFilePath: string
}

/**
 * @description 保存文件到 public/static 文件夹下
 * @param opts.file 文件
 * @param opts.fileName 文件名
 * @param opts.toPath 文件目录
 * @param opts.flags Node.js 文件系统标志，默认 r
 */
export default async (opts: Opts): Promise<SaveFileResponse> => {
	Object.assign({ flags: 'r' }, opts)
	let { file, fileName, toPath, flags } = opts
	toPath = path.join(__dirname, '../../public/static', toPath)
	await fs.mkdirp(toPath)
	const fileReader = fs.createReadStream(file.path)
	const writeFilePath = path.join(toPath, fileName || file.name)
	const fileWriter = fs.createWriteStream(writeFilePath, { flags })

	const fileStream = fileReader.pipe(fileWriter)

	return new Promise((resolve, reject) => {
		fileStream.on('finish', async () => {
			const fileInfo = await stat(writeFilePath)
			resolve({ writeFilePath, ...fileInfo })
		})
		fileStream.on('error', reject)
	})
}
