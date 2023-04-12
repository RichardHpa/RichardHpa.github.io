import { Fragment, useRef } from 'react'
import { Typography, Container, Box, Link, Divider, Grid, IconButton, Button } from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import useMediaQuery from '@mui/material/useMediaQuery'

import { WorkCard } from 'components/WorkCard'

import { useGetHomePageContent } from 'content/useGetHomePageContent'
import { socialIconsArray } from 'content/socialIcons'

export const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const { getHomePageContent } = useGetHomePageContent()
  const aboutRef = useRef<HTMLUListElement | null>(null)

  const handleScrollToAbout = () => {
    if (aboutRef.current != null) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const workCardDirection = (index: number) => {
    if (isMobile) {
      return 'row'
    }
    return index % 2 === 0 ? 'row' : 'row-reverse'
  }

  return (
    <>
      <Box
        mb={4}
        sx={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage:
            'linear-gradient(150deg,rgba(145,117,189,.8),rgba(54,67,71,.5)), url(static/hero-bg.jpg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Typography
            component='h1'
            variant={isMobile ? 'h3' : 'h1'}
            align='center'
            color='white'
            gutterBottom
          >
            Hey I&apos;m Richard
          </Typography>
          <Typography
            component='h2'
            variant={isMobile ? 'h5' : 'h4'}
            align='center'
            color='white'
            gutterBottom
          >
            Software Engineer from Wellington NZ
          </Typography>
          <Box sx={{ color: 'white' }}>
            <Grid container spacing={1} justifyContent='center'>
              {socialIconsArray.map((socialIcon) => (
                <Grid item key={socialIcon.name}>
                  <IconButton href={socialIcon.link} target='_blank' size='large' color='inherit'>
                    {socialIcon.icon}
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        <Box
          py={3}
          sx={{
            position: 'absolute',
            bottom: 0,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button size='small' variant='text' color='inherit' onClick={handleScrollToAbout}>
            See what I do
          </Button>
          <IconButton color='inherit' onClick={handleScrollToAbout}>
            <ArrowCircleDownIcon fontSize='large' color='inherit' />
          </IconButton>
        </Box>
      </Box>

      <Box py={8} ref={aboutRef}>
        <Container maxWidth='md'>
          <Typography variant='h3' textAlign='center' gutterBottom>
            About Me
          </Typography>
          <Typography textAlign='center' gutterBottom>
            I am a Wellington based Software Engineer with a passion for building web applications.
          </Typography>
          <Typography textAlign='center' gutterBottom>
            Currently I work as as a Front End Developer for{' '}
            <Link href='https://sharesight.co.nz/' target='_blank'>
              Sharesight
            </Link>{' '}
            using React and Typescript, but I have experience working with a wide range of
            technologies including Node, Express, Mongo.
          </Typography>

          <Typography textAlign='center' gutterBottom>
            Before Sharesight I worked as a Front End Developer for{' '}
            <Link href='https://www.gs1nz.org/' target='_blank'>
              GS1 New Zealand
            </Link>{' '}
            where I was their first Front End Developer and tasked with building their customer
            facing web app.
          </Typography>

          <Typography textAlign='center' gutterBottom>
            I have a passion for learning new technologies and building things that are useful and
            fun.
          </Typography>
        </Container>
      </Box>

      <Box
        py={8}
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        }}
      >
        <Container maxWidth='md'>
          <Typography variant='h3' textAlign='center' gutterBottom>
            Mentoring
          </Typography>
          <Typography textAlign='center' gutterBottom>
            Before GS1 I was also a tutor at{' '}
            <Link href='https://yoobee.ac.nz/' target='_blank'>
              Yoobee School of Design{' '}
            </Link>{' '}
            where I ran their high level web development course. Through my time at Yoobee I
            mentored over 100 students, helping them to learn the skills they needed to get a job in
            the industry. I also helped them to build their portfolios and prepare for interviews.
            Many of them have gone on to work in the industry.
          </Typography>
          <Typography textAlign='center' gutterBottom>
            I am currently available for mentoring and would love to help you get started in the web
            development industry. If you are also looking for some private tutoring I am also
            available for that too.
          </Typography>
          <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='outlined'
              color='primary'
              href='mailto:richard.m.hpa@gmail.com?subject=Mentoring enquiry from richardhpa.github.io'
            >
              Get in touch
            </Button>
          </Box>
        </Container>
      </Box>

      <Box py={8}>
        <Container maxWidth='md'>
          <Typography variant='h3' textAlign='center' gutterBottom>
            My Work
          </Typography>
          {getHomePageContent.map((content, index) => {
            return (
              <Fragment key={content.title}>
                <WorkCard
                  direction={workCardDirection(index)}
                  title={content.title}
                  subtitle={content.subtitle}
                  description={content.description}
                  actions={content.actions}
                  image={content.image}
                />
                {index !== getHomePageContent.length - 1 && <Divider />}
              </Fragment>
            )
          })}
        </Container>
      </Box>

      <Box
        py={8}
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        }}
      >
        <Container maxWidth='md'>
          <Typography variant='h4' textAlign='center' gutterBottom>
            Get in Touch
          </Typography>
          <Typography textAlign='center' gutterBottom>
            If you have any questions or would like to get in touch, feel free to send me an email.
          </Typography>
          <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='outlined'
              color='primary'
              href='mailto:richard.m.hpa@gmail.com?subject=General Enquiry from richardhpa.github.io'
            >
              Email Me
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
