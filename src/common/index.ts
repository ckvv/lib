/**
 * 控制函数调用频率
 * @param callback 回调函数
 * @param wait 延迟时间
 * @param options 可选参数,控制是否立即执行，中间过程是否执行，this作用域
 * @returns function
 */
const debounce = (callback: Function, wait: number, options: {
  immediate?: boolean
  middle?: boolean
  thisArg?: any
} = {}): Function => {
  const { immediate = false, middle = true, thisArg = null } = options
  let timer: ReturnType < typeof setTimeout >
  let restDate = new Date()
  return function (...args: any[]) {
    timer && clearTimeout(timer)
    const isFirst = !timer
    timer = setTimeout(() => {
      callback.apply(thisArg, args)
      restDate = new Date()
    }, wait)
    if ((new Date().getTime() - restDate.getTime() > wait && middle) || (isFirst && immediate)) {
      clearTimeout(timer)
      callback.apply(thisArg, args)
      restDate = new Date()
    }
  }
}

/**
 * 阻塞当前执行n毫秒
 * @param wait 延迟时间
 * @returns promise
 */
const wait = async (wait: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, wait)
  })
}

/**
 * 返回参数类型
 * @param value 参数
 * @returns 是否是函数
 */
const toTypeString = (value: unknown) => {
  return Object.prototype.toString.call(value)
}

/**
 * 返回参数类型
 * @param value 参数
 * @returns type
 */
const toRawType = (value: unknown) => {
  return toTypeString(value).slice(8, -1)
}

/**
 * 获取指定范围随机数
 * @param max 最大值
 * @param min 最小值
 * @param digits 保留的最大小数位数
 * @returns 随机数
 */
const getRandomNum = (max = 1, min = 0, digits = 4) => {
  return Number((min + Math.random() * (max - min)).toFixed(digits))
}

/**
 * 获取随机字符串
 * @param length 长度
 * @param dictionary 随机数字典
 * @returns 随机字符串
 */
const getRandomStr = (length: number, dictionary = '0123456789abcdefghijklmnopqrstuvwxyz') => {
  let randomStr = ''
  for (let index = 0; index < length; index++)
    randomStr += dictionary[getRandomNum(dictionary.length - 1, 0, 0)]

  return randomStr
}

export {
  debounce,
  wait,
  toRawType,
  getRandomNum,
  getRandomStr,
}
