export function formatBytes(bytes: number) {
  const utils = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < utils.length - 1) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(1)}${utils[unitIndex]}`
}
