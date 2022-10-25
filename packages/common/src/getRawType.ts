import { getTypeString } from './getTypeString.js';

/**
 * 返回参数类型
 * @param value 参数
 * @returns type
 */
export const getRawType = (value: unknown) => {
  return getTypeString(value).slice(8, -1);
};
