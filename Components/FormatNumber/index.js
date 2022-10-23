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
    '789-123-456',
    '987-654-321',
  ]

  // REFS
  const inputNumber = useRef(null)

  // STATE
  const [number, setNumber] = useState([])
  const [numberList, setNumberList] = useState([])

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
      let part = number.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
      return part
    }

    const finalFormat = applySeparator(removeCharacters(unformattedNumber))
    console.log(
      '🚀 ~ file: index.js ~ line 59 ~ applyFormat ~ finalFormat',
      finalFormat
    )

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
          let part = number.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
          return part
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
  }

  const onValueChange = (event) => {
    setNumber(event.target.value)
  }

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      const newNumber = number
      console.log(
        '🚀 ~ file: index.js ~ line 130 ~ onKeyUp ~ number',
        number.length
      )

      const formattedNumber = applyFormat(newNumber)

      const sortedNumberList = arrOrder(numberList.concat(formattedNumber))
      setNumberList(sortedNumberList)
      //TODO: agregar logica para que no pueda dar intro con más de 12 caracteres
      if (sortedNumberList.length > 12) {
        number = null
      }
      {
        sortedNumberList
      }
      // sortedNumberList.length > 12 ? null : sortedNumberList

      inputNumber.current.value = ''
    }
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

        <Button onClick={addArray}>Añadir</Button>
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
