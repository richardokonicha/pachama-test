import { CssBaseline } from '@mui/material'
import Appbar from './Appbar/Appbar';
import { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blueGrey, grey, green } from '@mui/material/colors';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './Discover';
import DiscoverItem from './DiscoverItem';

type PaletteMode = "light" | "dark"

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
        primary: {
          main: "#eceff1"
        },
        secondary: {
          main: green[900]
        },
        divider: blueGrey[100],
        background: {
          default: blueGrey[50],
          paper: blueGrey[100],
        },
      }
      : {
        // palette values for dark mode
        primary: blueGrey,
        divider: blueGrey[700],
        secondary: {
          main: green[500]
        },
        background: {
          default: blueGrey[900],
          paper: blueGrey[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});


function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === 'light' ? 'dark' : 'light',
    )
  }
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <BrowserRouter>
          <Appbar toggleColorMode={toggleColorMode}></Appbar>
          <Routes>
            <Route path="/" element={<Dashboard />}>
            </Route>
            <Route path="/:item" element={<DiscoverItem />} />
          </Routes>
        </BrowserRouter>
        {/* <AppRoute /> */}
      </>
    </ThemeProvider>

  )
}


export default App;

