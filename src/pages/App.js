import React from 'react'
import {
  MainContainer,
  AvatarTitleContainer,
  Title,
  MenuAboutMeContainer,
  SideMenu,
  AboutMe
} from './styled'
import Woman from 'assets/Woman.jpg'
import Avatar from 'components/Avatar/index'
const App = () => (
  <MainContainer>
    <AvatarTitleContainer>
      <Avatar src={Woman} height={220} width={230} alt="Happy woman" />
      <Title>Title</Title>
    </AvatarTitleContainer>
    <MenuAboutMeContainer>
      <SideMenu>Menu</SideMenu>
      <AboutMe>Sobre mim</AboutMe>
    </MenuAboutMeContainer>
  </MainContainer>
)

export default App
