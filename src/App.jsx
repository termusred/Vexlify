import Nav from "./components/Navbar"
import Section from "./components/Section"
import {Route , Routes} from "react-router-dom"
import ShortCut from "./components/ShortCut"
import styled from "styled-components"

const AppCon = styled("div")`
  display: flex;
`
function App() {

  return (
    <AppCon>
      <Nav/>

      <Routes>
        <Route path="/" element={<><Section/> <ShortCut/></>}/>
      </Routes>
    </AppCon>
  )
}

export default App
