/**
 * 返回参数类型
 * @param value 参数
 * @returns 是否是函数
 */
export const getTypeString = (value: unknown) => {
  return Object.prototype.toString.call(value);
};
