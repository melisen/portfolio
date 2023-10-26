'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import { indigo } from '@mui/material/colors';
import GitHubPaper from './GitHubPaper'

export default function Navbar() {
    const grad = `linear-gradient(to left, ${indigo[50]} 0%, ${indigo[100]} 100%)`
    const purpuraIntermedio = indigo[400];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{  background: grad, padding:1, }}
    >
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        
          <div>
          <IconButton
            size="small"
            edge="start"
            color={indigo[900]}
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <Link href='#about'>About</Link>
            
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color={indigo[900]}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link href='#contact'>Contact</Link>
            
            
          </IconButton>
          </div>

          <Link href="https://github.com/melisen" target='blank' style={{ color: 'inherit', textDecoration: 'none' }}  >
          <GitHubPaper />
          </Link>
          
          
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
