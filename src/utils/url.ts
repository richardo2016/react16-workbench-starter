function GET_DFLT_SEARCH_STR () {
  if (window.location.search)
    return (window.location.search || '').slice(1)

  if (window.location.hash && window.location.hash.indexOf('?') > -1)
    return window.location.hash.split('?')[1] || ''

  return ''
}

export function parseQueryString (str: string = GET_DFLT_SEARCH_STR()): {[key: string]: string} {
  return str.split('&').reduce((prev: any, kv) => kv ? (prev[kv.split('=')[0]] = kv.split('=').slice(1).join(''), prev) : prev, {});
}

export function parseHrefBase (href: string = window.location.href) {
  return href.split('?')[0];
}

export function stringify (obj: any): string {
  return Object.keys(obj || {}).map(k => `${k}=${obj[k]}`).join('&')
}
