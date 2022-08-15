export const buildQueryParams = <T extends { [key: string]: string }>(
  params: T
) => {
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    })
    .join('&')
}
