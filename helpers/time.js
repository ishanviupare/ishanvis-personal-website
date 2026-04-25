export function formatTime({ start, end }) {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()

  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()

  //conversion
  if (months < 0) {
    years--
    months += 12
  }

  //build string parts
  const parts = []

  //plural cases
  if (years > 0) {
    parts.push(`${years}yr${years > 1 ? "s" : ""}`)
  }

  if (months > 0) {
    parts.push(`${months}mo${months > 1 ? "s" : ""}`)
  }

  //if recent project
  if (parts.length === 0) {
    parts.push("Just now")
  }

  let result = `For ${parts.join(" ")}`

  //if ongoing
  if (!end) {
    result += " (ongoing)"
  }

  return result
}