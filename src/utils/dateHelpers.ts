export const formatDate = (date: number): string => {
  const time = new Date(date)

  const hours = time.getHours()
  const minutes = time.getMinutes()

  return `${hours.toString()}:${minutes < 10 ? '0' : ''}${minutes.toString()}`
}

export const getDateTime = (date: Date): Date => {
  const currDate = new Date()

  date.setHours(
    currDate.getHours(),
    currDate.getMinutes(),
    currDate.getSeconds(),
    currDate.getMilliseconds(),
  )

  return date
}

export const dateFromTo = (date: Date): { from: string; to: string } => {
  const dateFrom = new Date(date).setHours(0, 0, 0, 0)
  const dateTo = new Date(date.setDate(date.getDate() + 1)).setHours(0, 0, 0, 0)

  return {
    from: new Date(dateFrom).toISOString(),
    to: new Date(dateTo).toDateString(),
  }
}
