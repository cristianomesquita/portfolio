import styled from 'styled-components'
import vectorMinus from 'assets/vectorShow'
import vectorMore from 'assets/vectorHidden'
import { AccordionContainer, Title, Content } from './styles'

const Accordion = ({ content, title }) => (
  <AccordionContainer>
    <Title> {title}</Title>
    <Content> {content}</Content>
  </AccordionContainer>
)

export default Accordion;
