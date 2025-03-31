import Nav from "./components/Navbar";
import Section from "./components/Section";
import { Route, Routes } from "react-router-dom";
import ShortCut from "./components/ShortCut";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./constants/theme";

const AppCon = styled("div")`
  display: flex;
`;

function App() {
  const [Theme, setTheme] = useState("dark");
  const [data, setData] = useState([""]); // Initial state as empty array

  useEffect(() => {
    // Fake data with title, backdropPath, voteAverage, and id
    const fakeData = [
      {
        id: 1,
        title: "The Space Odyssey",
        backdropPath: "/backend.jpg", // Points to public/backend.jpg
        voteAverage: 8.3,
      },
      {
        id: 2,
        title: "Robot Rebellion",
        backdropPath: "/backend.jpg", // Points to public/backend.jpg
        voteAverage: 7.8,
      },
      {
        id: 3,
        title: "Moonlight Mystery",
        backdropPath: "/backend.jpg", // Points to public/backend.jpg
        voteAverage: 6.9,
      },
      {
        id: 4,
        title: "Galactic Chase",
        backdropPath: "/backend.jpg", // Points to public/backend.jpg
        voteAverage: 9.1,
      },
    ];
    setData(fakeData); // Set the fake data once on mount
  }, []);

  return (
    <ThemeProvider theme={Theme === "light" ? LightTheme : DarkTheme}>
      <AppCon>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section data={data} />
                <ShortCut setTema={setTheme} Tema={Theme} />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppCon>
    </ThemeProvider>
  );
}

export default App;