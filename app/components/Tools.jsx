import { Typography } from '@mui/material';
import {Container, } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { deepPurple } from '@mui/material/colors';


    const purpuraClaro = deepPurple[50];

export default function Tools() {
  return (
    <Container sx={{backgroundColor:purpuraClaro}}>
      <Typography  className="toolsTitle" mt={3}>Tools I use</Typography>
      <Grid container >
        <Grid item xs={12} lg={12} spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign='center'
        py={2}        > 
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"  />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"  />
                  <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"  />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"  />
            </Grid>
            <Grid item xs={12} lg={12} spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign='center'
        py={2}        > 
         


            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"   />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain-wordmark.svg"   />

            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"   />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"   />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"   />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"   />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"   />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg"   />

      </Grid>

      <Grid item xs={12} lg={12} spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign='center'
        py={2}        > 
      
      <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"   />
            <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"   />
      <Image width={70} height={70} alt="icon"  
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"   />
      <Image width={70} height={70} alt="icon" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"    />
            <Image width={70} height={70} alt="icon" className='toolImg'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg"    />
      </Grid>
      

      </Grid>

                
      
    </Container>
  )
}
