import './App.css'
import styled from 'styled-components'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { About } from './components/About/About'
import { WorkExperience } from './components/WorkExperience/WorkExperience'

const StyledMainContainer = styled.main`
  height: 100vh;
  width: 100vw;
`

const App = () => {
  return (
    <div>
      <StyledMainContainer>
        <Nav />
        <Header />
      </StyledMainContainer>
      <About />
      <WorkExperience />
    </div>
  )
}

export default App
