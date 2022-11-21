export const applyFormatNumber = (unformattedNumber) => {
  const removeCharacters = (n) => {
    let numberWithReplacements = n.replaceAll("'", '').replaceAll('-', '')
    if (numberWithReplacements.length < 12) {
      return numberWithReplacements
    } else {
      return n.slice(2)
    }
  }

  const applySeparator = (number, separator = '-') => {
    let replaceNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return replaceNumber
  }

  const finalFormat = applySeparator(removeCharacters(unformattedNumber))

  return finalFormat
}