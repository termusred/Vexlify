import Nav from "./components/Navbar"
import Section from "./components/Section"
import {Route , Routes} from "react-router-dom"
import ShortCut from "./components/ShortCut"
import styled from "styled-components"
import axios from "axios"
import {useState ,useEffect } from "react"

const AppCon = styled("div")`
  display: flex;
`
function App() {
  const [data , setData] = useState([""])
  useEffect(()=>{
    axios.get("https://jk-tv.netlify.app/popular_movies/get_all").then((data) => setData(data.data))
  } , [])
  return (
    <AppCon>
      <Nav/>

      <Routes>
        <Route path="/" element={<><Section data={data}/> <ShortCut/></>}/>
      </Routes>
    </AppCon>
  )
}

export default App
