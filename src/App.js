
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      Hello World!
    </Container>
  )
}

export default App