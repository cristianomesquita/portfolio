import React from 'react'
import vectorMore from 'assets/vectorMore.png'
import vectorMinus from 'assets/vectorMinus.png'
import { useState } from 'react'
import { AccordionContainer, AccordionVisible, Title, Content } from './styles'

const Accordion = ({ content, title }) => {
  const [selected, setSelected] = useState(true)
  const [show, setShow] = useState(false)

  const toggle = () => {
    if (selected === true) {
      setShow(true)
      return setSelected(null)
    }
    setSelected(true)
    setShow(false)
  }

  return (
    <AccordionContainer>
      <AccordionVisible>
        <Title onClick={() => toggle(true)}>
          {title}
          {selected === true ? <img src={vectorMore} /> : <img src={vectorMinus} />}
        </Title>
        <Content>{show === true ? <p>{content}</p> : <></>}</Content>
      </AccordionVisible>
    </AccordionContainer>
  )
}

export default Accordion
