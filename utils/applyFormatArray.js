export const applyFormatArray = (unformattedNumber) => {
  const formatNumbers = (n) => {
    const mapArray = n.map((element) => {
      let numberWithReplacements = element
        .replaceAll("'", '')
        .replaceAll('-', '')

      const numberWithSlice = element.slice(2)

      const applySeparator = (number, separator = '-') => {
        let replaceNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
        return replaceNumber
      }
      if (numberWithReplacements.length > 15){
        alert(`${element} FORMATO NO VALIDO`)
        return element
      }
      if (numberWithReplacements.length <= 10) {
        return applySeparator(numberWithReplacements)
      } else {
        return applySeparator(numberWithSlice)
      }
    })

    return mapArray
  }
  const finalFormat = formatNumbers(unformattedNumber)
  return finalFormat
}