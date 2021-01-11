export const moneyView = (money: number, currency = '₴'): string => {
  const s = money
    .toString()
    .split('')
    .reverse()
    .map((v, i) => {
      if (v === '-') {
        return `- `
      }
      if (i % 3 === 0) {
        return `${v} `
      }
      return v
    })
    .reverse()
    .join('')

  return `${s} ${currency}`
}
