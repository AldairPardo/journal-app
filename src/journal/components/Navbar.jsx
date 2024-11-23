import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import {
    AppBar,
    Grid2 as Grid,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";

export const Navbar = ({ drawerWidth }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width:{ sm: `calc(100% - ${ drawerWidth }px)`},
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justify="space-between">
                    <Typography variant="h6" noWrap component="div">
                        {" "}
                        JournalApp{" "}
                    </Typography>
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        flex: 1,
                    }}
                >
                    <IconButton color="error">
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
