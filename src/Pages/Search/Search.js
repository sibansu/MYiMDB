import React, { useState } from 'react'
import { createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
const Search = () => {
  const [type, setType] = useState(0);

  const darkTheme = createMuiTheme({
    pelette: {
      type: "dark",
      primary: {
        main: "white"
      },
    }
  })
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div>
          
        </div>
        <TextField style={{ flex: 2 }} className="search" id="standard-basic" label="Search" variant="filled" />
      </ThemeProvider>
    </div>
  )
}

export default Search