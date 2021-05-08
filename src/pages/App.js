import React from 'react'
import {
  MainContainer,
  AvatarTitleContainer,
  Avatar,
  Title,
  MenuAboutMeContainer,
  LateralMenu,
  AboutMe
} from './styled'
const App = () => (
  <MainContainer>
    <AvatarTitleContainer>
      <Avatar>Avatar</Avatar>
      <Title>Title</Title>
    </AvatarTitleContainer>
    <MenuAboutMeContainer>
      <LateralMenu>Menu</LateralMenu>
      <AboutMe>Sobre mim</AboutMe>
    </MenuAboutMeContainer>
  </MainContainer>
)

export default App
