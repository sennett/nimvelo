const triangle = (row) => {

  // so I just saw that you can loop
  // through an array just like a string in JS.
  // did not know about that and it scares me,
  // so parse the first time
  if (typeof row === 'string') {
    row = row.split('')
  }

  if (row.length === 1) {
    return row[0]
  }

  let nextRow = []

  for(let i = 0; i < row.length - 1; i++) {
    const leftColour = row[i]
    const rightColour = row[i + 1]

    if (leftColour === rightColour) {
      nextRow.push(leftColour)
    } else {
      const string = `${leftColour}${rightColour}`
      if (!string.includes('R')) {
        nextRow.push('R')
      } else if (!string.includes('G')) {
        nextRow.push('G')
      } else if (!string.includes('B')) {
        nextRow.push('B')
      }
    }
  }

  return triangle(nextRow)
}

module.exports = triangle
