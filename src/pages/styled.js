import styled from 'styled-components'
export const MainContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
  flex-direction: column;
  overflow: auto;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 500px;
`
export const AvatarTitleContainer = styled.div`
  display: flex;
  height: 30vh;
`
export const Avatar = styled.div`
  display: flex;
  background-color: blue;
  width: 230px;

  img {
    width: 100%;
  }
`
export const Title = styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex-grow: 1;
`

export const MenuAboutMeContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: #626cc3;
`

export const SideMenu = styled.div`
  display: flex;
  background-color: #222222;
  width: 230px;
`

export const AboutMe = styled.div`
  display: flex;
  background-color: #626cc3;
  flex-grow: 1;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
