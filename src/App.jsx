import Nav from "./components/Navbar"
import Section from "./components/Section"
import {Route , Routes} from "react-router-dom"
import ShortCut from "./components/ShortCut"
import styled from "styled-components"
import GlobalStyle from "./globalStyles"
import axios from "axios"
import NotFound from "./components/NotFound"
import {useState ,useEffect } from "react"
import { ThemeProvider } from "styled-components";
import { DarkTheme , LightTheme} from "./constants/theme";

const AppCon = styled("div")`
  display: flex;
`
function App() {
  const [Theme , setTheme] = useState("dark")
  const [data , setData] = useState([""])

  useEffect(()=>{
    axios.get("https://jk-tv.netlify.app/popular_movies/get_all").then((data) => setData(data.data))
  } , [])
  return (
    <ThemeProvider theme={Theme == "light" ? LightTheme : DarkTheme}>
    <AppCon>
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route path="/" element={<><Section data={data}/> <ShortCut setTema={setTheme} Tema={Theme}/></>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes> 
    </AppCon>
    </ThemeProvider>
  )
}

export default App
