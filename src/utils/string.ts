export function ensurePrefix (str = '', prefix = '/') {
  if (str[0] !== prefix)

  str = prefix + str

  return str;
}
