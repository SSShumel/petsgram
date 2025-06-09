import { Box, Button, styled, Stack, createTheme, ThemeProvider} from "@mui/material"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar"
import AddButton from "./components/AddButton"
import ModalWindow from "./components/ModalWindow"
import { useState } from "react"


function App() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('light')

  function close(){
    setOpen(false)
  }
  function openModal(){
    setOpen(true)
  }

  const darkTheme = createTheme({
    palette:{
      mode: mode,
    }
  })

  return (
    <>
    
    <ThemeProvider theme={darkTheme}>
    <div>
    <Box bgcolor={'background.default'} color={'text.primary'}>
      <ModalWindow open={open} close={close}/>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar mode={mode} setMode={setMode}/>
        <Feed/> 
        <Rightbar/>     
      </Stack>
      <AddButton openModal={openModal}/>
    </Box>
    </div>
</ThemeProvider>
    
  
      
    </>
  )
}

export default App
