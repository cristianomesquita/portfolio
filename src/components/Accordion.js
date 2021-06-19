import styled from 'styled-components'
import vectorMinus from '../assets/vectorShow'
import vectorMore from 'assets/vectorHidden'

const AccordionContainer = styled.div`
  display: flex;
`

const Title = styled.h1``

const Content = styled.p``
const Accordion = props => {
  ;<AccordionContainer>
    <Title> {props.title}</Title>
    <Content> {props.content}</Content>
  </AccordionContainer>
}
