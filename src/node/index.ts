import { type BinaryLike, createHash } from 'node:crypto'

/**
 * 计算数据的md5
 * @param data 需要计算md5的数据
 * @returns md5
 */
function getMd5(data: BinaryLike): string {
  return createHash('md5').update(data).digest('hex')
}

export {
  getMd5,
}
