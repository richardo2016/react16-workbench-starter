export function uniquify (arr: any) {
  if (!Array.isArray(arr))
    return ;

  return Array.from(new Set(arr))
}

export function arraify (arr: any) {
  return Array.isArray(arr) ? arr : [arr]
}

export function simplify (arr: any) {
  return Array.isArray(arr) ? arr[0] : arr
}
