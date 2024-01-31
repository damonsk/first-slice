import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';

export interface CoreHeaderProps {
    children?: ReactNode;
}

const CoreHeader: React.FC<CoreHeaderProps> = ({ children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        First Slice
                    </Typography>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default CoreHeader;
