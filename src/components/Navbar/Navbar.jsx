import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import {Apple, Facebook, Google, Instagram} from '@mui/icons-material';


const Navbar = () => {

    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    return (
        <>
            <AppBar>
                <StyledToolBar>
                    <Box>
                        <Facebook />
                    </Box>
                    <Box>
                        <Apple />
                    </Box>
                    <Box>
                        <Google />
                    </Box>
                    <Box>About</Box>
                    <Box>Products</Box>
                </StyledToolBar>
            </AppBar>
        </>
    )
}

export default Navbar
