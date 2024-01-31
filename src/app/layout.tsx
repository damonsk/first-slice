'use client'
import { Inter } from "next/font/google";
import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CoreHeader from './CoreHeader';
import Button from '@mui/material/Button';

const inter = Inter({
  subsets: ["latin"]
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const defaultTheme = createTheme();

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={defaultTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <CoreHeader>
                <Stack direction={'row'} columnGap={2} >
                  <Button color="inherit" size="small" variant='outlined'>
                    Instructions
                  </Button>
                  <Button color="inherit" size="small" variant='outlined' >
                    Leaderboard
                  </Button>
                  <Button color="inherit" size="small" variant='outlined'>
                    Register Company
                  </Button>
                  <Button color="inherit" size="small" variant='outlined'>
                    Source
                  </Button>
                </Stack>
              </CoreHeader>
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                {children}
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};
