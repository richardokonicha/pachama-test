import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Container, Avatar, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import me from "./forest.jpg"
import { Link } from 'react-router-dom'

export default function Appbar({ toggleColorMode }) {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"  >
                <Container maxWidth="lg">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            startIcon={<BubbleChartIcon
                                sx={{ mr: 1, color: "secondary.main" }}
                            />}
                            component={Link}
                            to="/"
                            sx={{ fontSize: 14, color: "secondary.main" }}
                        >
                            Forest
                        </Button>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleColorMode()}
                        >
                            {theme.palette.mode === "dark" ?
                                <Brightness1Icon /> :
                                <Brightness3Icon />}
                        </IconButton>
                        <Avatar alt="Remy Sharp" src={me} sx={{ width: 24, height: 24 }} />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}