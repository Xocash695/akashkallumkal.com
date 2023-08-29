"use client"
import Typewriter from 'typewriter-effect';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './page.module.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createRoot } from 'react-dom/client'
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useEffect } from 'react'
const itemData = [

  {
    img: '/images/myimg/20230716_195104_HDR.jpg',
    title: 'Coffee',
  },


];
export default function Home() {
  return (
    <>

      <Box sx={{
        backgroundImage: "url('/images/clem-onojeghuo-Ud4GcZW3rOY-unsplash.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: `100% 100%`,

        height: '100%',
        width: '100%',
        p: '5%'
      }}>
        <Container  >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid xs={12}>
              <Paper elevation={12} sx={{ backgroundColor: "Bisque" }}>

                <Grid container>
                  <Grid xs={4}>
                    <Avatar alt="Remy Sharp" src="/images/akashkglasses.png" sx={{ width: 100, height: 100, margin: '5px' }} />
                  </Grid>
                  <Grid xs={8}>
                    <h1 style={{ fontSize: '200%', justifyContent: 'center' }}>
                      <Typewriter options={{ loop: true }}
                        onInit={(typewriter) => {
                          typewriter.typeString('Akash Kallumkal')
                            .callFunction(() => {
                              console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteAll()
                            .callFunction(() => {
                              console.log('All strings were deleted');
                            })
                            .start();
                        }}
                      />  </h1>
                  </Grid>
                </Grid>

              </Paper>
            </Grid>

          </Grid>


        </Container>
      </Box>
      <About />
    </>
  )
}
function About() {
  return (

    <Box sx={{
      backgroundImage: "url('/images/jeremy-bishop-rqWoB4LFgmc-unsplash2.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: `100% 100%`,
      height: '100%',
      width: '100%',
      p: '5%'
    }}
    >
      <Container>
        <Myimages />
        <h1 className={styles.title}> About Akash &#40; Aak-gaash &#41; Kallumkal </h1>
        <p className={styles.text}>Akash Kallumkal was born in the 21st century in Ottawa, Ontario, Canada. Akash is known for being a tech geek at a young age, with his enthusiasm to explore different kinds of new technologies like Linux, machine learning, web development, and Arduino. His early childhood started with learning how to strip wires and use screwdrivers with his grandpa, who is an electrical engineer. In the subsequent years, he learned Python, Linux, HTML, CSS, JavaScript, PHP, Nextjs, Rust, Python Tensorflow, Docker containers, hypervisors. In future, he plans on pursuing a job in artificial intelligence or some computer science-related field at top companies like FAANG.</p>
      </Container>
    </Box>
  )

}
function Myimages() {
  return (
    <>
      <Container>
        <ImageList sx={{ width: '100%', height: '100%' }} cols={3} variant="woven" rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                id={styles.meimage}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

    </>
  )

}
