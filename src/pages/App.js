import React from 'react'
import {
  MainContainer,
  AvatarTitleContainer,
  Avatar,
  Title,
  MenuAboutMeContainer,
  SideMenu,
  AboutMe
} from './styled'
import Mulher from "../assets/Mulher.jpeg"
const App = () => (
  <MainContainer>
    <AvatarTitleContainer>
      <Avatar><img src={Mulher}/></Avatar>
      <Title>Title</Title>
    </AvatarTitleContainer>
    <MenuAboutMeContainer>
      <SideMenu>Menu</SideMenu>
      <AboutMe>Sobre mim</AboutMe>
    </MenuAboutMeContainer>
  </MainContainer>
)

export default App
