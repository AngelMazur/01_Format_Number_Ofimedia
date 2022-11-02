import React, { useRef, useState, useEffect } from 'react'
import { saveAs } from 'file-saver'
import { applyFormatArray } from '../../utils/applyFormatArray'
import { applyFormatNumber } from '../../utils/applyFormatNumber'

//STYLE
import {
  Button,
  Form,
  TextNumber,
  List,
  Preview,
  Title,
} from './formatNumber.style.js'

//TODO: Editar NumberList
//TODO: Hacer pagina de cargando
const FormatNumber = () => {
  // REFS
  const inputNumber = useRef(null)

  // STATE
  const [number, setNumber] = useState(false, [])
  const [numberList, setNumberList] = useState([])
  const stringList = numberList.toString()
  const data = stringList.replaceAll('\n', '')
  const arrList = data.split(',')

  // SORT ARRAY
  const arrOrder = (arr) => arr.sort((a, b) => a.localeCompare(b))

  //EVENTS LAYOUT
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
          const formattedNumber = applyFormatNumber(newNumber)

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

  const addArray = () => {
    const newNumber = number
    const splitNumber = newNumber.split('\n')
    const formattedNumber = applyFormatArray(splitNumber)

    const sortedNumberListArray = arrOrder(numberList.concat(formattedNumber))
    setNumberList(sortedNumberListArray)

    inputNumber.current.value = ''
    setNumber(false)
  }

  const deleteDuplicates = () => {
    const deletedEmpty = arrList.filter(Boolean)
    const deletedDuplicates = deletedEmpty.filter((item, index) => {
      return deletedEmpty.indexOf(item) === index
    })
    setNumberList(deletedDuplicates)
  }

  const downloadFile = () => {
    const fecha = new Date()
    const hoy = fecha.toLocaleDateString()

    const data = arrList.toString().replaceAll(',', '\n')

    const blob = new Blob([data], {
      type: 'text/plain;charset=utf-8',
      endings: 'native',
    })

    saveAs(blob, `claves_fabricante_${hoy}`)
    window.location.reload()
  }

  const arrayOptions = () => {
    if (numberList.length > 0) {
      return (
        <>
          <Button onClick={deleteDuplicates}>Eliminar duplicados</Button>
          <Button onClick={downloadFile}>Descargar</Button>
        </>
      )
    }
  }

  return (
    <>
      <Title>Ingresa los números</Title>

      <Form>
        <TextNumber
          cols="100"
          id="text"
          onChange={onValueChange}
          onKeyUp={onKeyUp}
          placeholder="Buscar"
          ref={inputNumber}
          rows="10"
          type="text"
        />

        <Button onClick={addArray} disabled={!number}>
          Añadir
        </Button>
        {arrayOptions()}
      </Form>

      <Preview>
        <ol
          className="NumberList"
          // contentEditable={true}
          // suppressContentEditableWarning={true}
        >
          {numberList.map((numberListItem, i) => (
            <List key={i}>{numberListItem}</List>
          ))}
        </ol>
      </Preview>
    </>
  )
}

export default FormatNumber
