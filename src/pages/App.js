import React from 'react'
import {
  MainContainer,
  AvatarTitleContainer,
  Title,
  MenuAboutMeContainer,
  SideMenu,
  AboutMe,
  ContentContainer
} from './styled'
import Woman from 'assets/Woman.jpg'
import Avatar from 'components/Avatar/index'
import Accordion from 'components/Accordion/index'
const App = () => (
  <MainContainer>
    <AvatarTitleContainer>
      <Avatar src={Woman} height={220} width={230} alt="Happy woman" />
      <Title></Title>
    </AvatarTitleContainer>
    <MenuAboutMeContainer>
      <SideMenu></SideMenu>
      <AboutMe>
        <ContentContainer>
          <Accordion
            title="Sobre mim"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident,
           sunt in culpa qui officia 
           deserunt mollit anim id est laborum."
          />
          <Accordion title="Meus projetos" content="lorem ipsujncbdbcbdu uhuihcdc uhcudshciusdh" />
          <Accordion title="Skills" content="lorem ipsujncbdbcbdu uhuihcdc uhcudshciusdh" />
        </ContentContainer>
      </AboutMe>
    </MenuAboutMeContainer>
  </MainContainer>
)

export default App
