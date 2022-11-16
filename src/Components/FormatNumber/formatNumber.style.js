import styled from 'styled-components'

export const Button = styled.button`
  background-color: #fff;
  border-color: #dbdbdb;
  border-radius: 0.375em;
  border-style: solid;
  border-width: 3px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  width:70%;

  ${({ disabled }) =>
    disabled &&
    `
    color: grey;
    opacity: 0.7;
    cursor: default;
  `}
`
export const Form = styled.section`
  align-content: center;
  display: grid;
  grid-template-columns: 4fr;
  gap: 0.5em;
  justify-content: center;
  justify-items: center;
  margin: 20px;
`
export const TextNumber = styled.textarea`
  background-color: #fff;
  border-color: #f29756;
  border-radius: 0.375em;
  border-style: solid;
  border-width: 3px;
  box-sizing: border-box;
  box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
  color: #363636;
  display: block;
  font-size: 1.2rem;
  max-width: 70%;
  outline: none;
  padding: 0.5em 1.5em;
  width: 100%;
`

export const List = styled.li`
  &::marker {
    color: #000;
    font-weight: bold;
    font-size: 14px;
  }
`

export const Preview = styled.section`
  align-content: center;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  margin: 20px;
`

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
`
