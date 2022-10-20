/**
 * 拷贝数据到剪贴板
 * @param data 需要拷贝的数据
 */
async function writeClipboard(data: string) {
  await navigator.clipboard.writeText(data);
}

export {
  writeClipboard,
};
