interface handlers {
  handler: Function
  thisArg?: any
  args?: any[]
  callback?: Function
}

export class Scheduler {
  limit: number;
  awaitArr: Function[];
  count: number;
  /**
   * 生成一个异步调度器
   */
  constructor(limit = 4) {
    this.limit = limit;
    this.awaitArr = [];
    this.count = 0;
  }

  async add(handler: Function, thisArg?: any, args?: any[], callback?: Function) {
    if (typeof handler !== 'function')
      throw new Error('handler is not a function');

    if (callback && typeof callback !== 'function')
      throw new Error('callback is not a function');

    if (this.count >= this.limit) {
      await new Promise((resolve) => {
        this.awaitArr.push(resolve);
      });
    }

    this.count++;

    let res;
    try {
      res = await handler.call(thisArg, args);
      callback && callback(null, res);
    } catch (error) {
      callback && callback(error);
    }
    this.count--;

    if (this.awaitArr.length)
      (this.awaitArr.shift() as Function)();

    return res;
  }

  async adds(handlers: Function[] | handlers[], callback: Function) {
    if (!Array.isArray(handlers))
      throw new Error('handlers is not a Array');

    if (callback && typeof callback !== 'function')
      throw new Error('callback is not a function');

    const handlersArr = handlers.map((val) => {
      if (typeof val !== 'function')
        return this.add(val.handler, val.thisArg, val.args, val.callback);

      return this.add(val);
    });

    let res;
    try {
      res = await Promise.all(handlersArr);
      callback && callback(null, res);
    } catch (error) {
      callback && callback(error);
    }
    return res;
  }
}
