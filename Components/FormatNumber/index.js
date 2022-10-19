import React, { useState } from 'react'

import { WrapperContent, Title } from './formatNumber.style.js'
const FormatNumber = () => {
  // LOGIC
  const [number, setNumber] = useState([])
  console.log({ number })
  const [finalNumber, setFinalNumber] = useState([])

 
  // SORT ARRAY
  let arr = [
    '123-123-123',
    '456-789-123',
    '789-123-456',
    '123-456-789',
    '987-654-321',
  ]

  let arrOrder = arr.sort((a, b) => a.localeCompare(b))

  // APPLY FORMAT ARRAY
  const applyFormat = () => {
    const removeCharacters = (n) => {
      let finalNum = n.map((element) => {
        let nFormatC = element.replaceAll("'", '')
        let nFormatG = element.replaceAll('-', '')
        console.log({ nFormatC })
        console.log({ nFormatG })
        const condition = nFormatC.length <= 9 || nFormatG.length <= 9
        if (condition) {
          return nFormatG, nFormatC
        } else {
          return element.slice(2)
        }
      })
      // const FNL =  finalNum.slice(9)
      // console.log(FNL)
      // return FNL
      return finalNum
    }
    console.log(removeCharacters(number))
    const applySeparator = (num, separator = '-') => {
      const number = String(num)
      let part = number.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
      return part
    }
    const finalFormat = applySeparator(removeCharacters(number))
    setFinalNumber(finalFormat)
    console.log({ finalFormat })
    return finalFormat
  }
  const FF = applyFormat
  //EVENTS LAYOUT
  const addArray = () => {
    const newNumber = document.getElementById('text').value
    console.log({newNumber})
      setNumber(prevState =>[...prevState, newNumber])
  }

  const onValueChange = (event) => {
    setNumber(event.target.value)
  }


  // console.log(addArray('1'))
  // console.log(addArray('2'))
  // console.log(addArray('3'))
  const onKeyUp = (e) => {
    if (e.key === 'Enter') return addArray()
  }
  return (
    <>
      <WrapperContent>
        <Title>Ingresa los números</Title>
        <textarea
          type="text"
          id='text'
          placeholder="Buscar"
          cols="100"
          rows="10"
          onChange={onValueChange}
          onKeyUp={onKeyUp}
          // value={number}
        />
        <button onClick={addArray}>Añadir</button>
        <button onClick={applyFormat}>Formatear</button>
        <div>{finalNumber}</div>
      </WrapperContent>
    </>
  )
}

export default FormatNumber
