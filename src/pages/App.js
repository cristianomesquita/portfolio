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
import Woman from '../assets/Woman.jpg'
const App = () => (
  <MainContainer>
    <AvatarTitleContainer>
      <Avatar>
        <img src={Woman} />
      </Avatar>
      <Title>Title</Title>
    </AvatarTitleContainer>
    <MenuAboutMeContainer>
      <SideMenu>Menu</SideMenu>
      <AboutMe>Sobre mim</AboutMe>
    </MenuAboutMeContainer>
  </MainContainer>
)

export default App
