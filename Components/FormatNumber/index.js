import React, { useRef, useState } from 'react'

import {
  Button,
  Form,
  TextNumber,
  List,
  Preview,
  Title,
} from './formatNumber.style.js'

const FormatNumber = () => {
  // SORT ARRAY
  let arr = [
    'vf123123123',
    '00123456789',
    '456-789-123',
    "789'123'456",
    '987654321',
  ]

  // REFS
  const inputNumber = useRef(null)

  // STATE
  const [number, setNumber] = useState(false, [])
  const [numberList, setNumberList] = useState([])
  console.log("🚀 ~ file: index.js ~ line 28 ~ FormatNumber ~ numberList", numberList)

  console.log("🚀 ~ file: index.js ~ line 32 ~ FormatNumber ~ number", number)
  // TODO: sort numberList
  const arrOrder = (arr) => arr.sort((a, b) => a.localeCompare(b))

  // APPLY FORMAT ARRAY
  const applyFormat = (unformattedNumber) => {
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

  const applyFormatArray = (unformattedNumber) => {
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

  //EVENTS LAYOUT
  const addArray = () => {
    const newNumber = number
    const splitNumber = newNumber.split('\n')
    const formattedNumber = applyFormatArray(splitNumber)

    const sortedNumberListArray = arrOrder(numberList.concat(formattedNumber))
    setNumberList(sortedNumberListArray)

    inputNumber.current.value = ''
    setNumber(false)
  }

  const onValueChange = (event) => {
    setNumber(event.target.value)
  }

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      if (number != '\n') {
        const newNumber = number

        if (number.length > 12) {
          number
        } else {
          const formattedNumber = applyFormat(newNumber)

          const sortedNumberList = arrOrder(numberList.concat(formattedNumber))

          setNumberList(sortedNumberList)

          inputNumber.current.value = ''

          setNumber(false)
        }
      } else {
        setNumber(false)
        inputNumber.current.value = ''
      }
    }
  }

  const deleteDuplicates = () => {
    const result = numberList.filter((item, index) => {
      return numberList.indexOf(item) === index
    })
    setNumberList(result)
  }

  return (
    <>
      <Title>Ingresa los números</Title>

      <Form>
        <TextNumber
          cols="100"
          id="text"
          // maxLength="12"
          onChange={onValueChange}
          onKeyUp={onKeyUp}
          placeholder="Buscar"
          ref={inputNumber}
          rows="10"
          type="text"
        />

        <Button
          onClick={addArray}
          disabled={!number}
          >
          Añadir
        </Button>
        <Button onClick={deleteDuplicates} disabled={!numberList}>Eliminar duplicados</Button>
      </Form>

      <Preview>
        <ol className="NumberList">
          {numberList.map((numberListItem) => (
            <List key={numberListItem}>{numberListItem}</List>
          ))}
        </ol>
      </Preview>
    </>
  )
}

export default FormatNumber
