function getOrdinalSuffix(day) {
  if ([11, 12, 13].includes(day)) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

function formatDateWithOrdinal(date) {
  const day = date.getUTCDate()
  console.log('date', date)
  console.log('day', day)
  const formatedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  })
  const ordinalSuffix = getOrdinalSuffix(day)
  return `${formatedDate}${ordinalSuffix}`
}

module.exports = {
  formatDateWithOrdinal,
  getOrdinalSuffix,
}
