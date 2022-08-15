import { createTheme , ThemeProvider } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import React from 'react'

const dark = createTheme ({
    palette: {
        type: "dark",
    },
});

const CustomPagination = ({ setpage, numpage = 10 }) => {
    const handlePageChange = (page) => {
        setpage(page);
        window.scroll(0, 0);
    }
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: 10,
        }}>
            <ThemeProvider theme={dark}>

                <Pagination color='primary' hideNextButton hidePrevButton count={numpage} onChange={(e) => handlePageChange(e.target.textContent)} />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination