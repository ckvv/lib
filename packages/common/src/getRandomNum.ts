/**
 * 获取指定范围随机数
 * @param max 最大值
 * @param min 最小值
 * @param digits 保留的最大小数位数
 * @returns 随机数
 */
export const getRandomNum = (max = 1, min = 0, digits = 4) => {
  return Number((min + Math.random() * (max - min)).toFixed(digits));
};
