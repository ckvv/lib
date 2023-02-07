/**
 * 拷贝数据到剪贴板
 * @param data 需要拷贝的数据
 */
export async function clipboardWrite(data: string) {
  navigator.clipboard.writeText(data);
}
