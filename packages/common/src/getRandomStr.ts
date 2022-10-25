import { getRandomNum } from './getRandomNum.js';

/**
 * 获取随机字符串
 * @param length 长度
 * @param dictionary 随机数字典
 * @returns 随机字符串
 */
export const getRandomStr = (length: number, dictionary = '0123456789abcdefghijklmnopqrstuvwxyz') => {
  let randomStr = '';
  for (let index = 0; index < length; index++)
    randomStr += dictionary[getRandomNum(dictionary.length - 1, 0, 0)];

  return randomStr;
};
