import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export const socialIcons = {
  linkedIn: {
    icon: <LinkedInIcon fontSize='large' />,
    link: 'https://www.linkedin.com/in/richardhpa/',
  },
  github: {
    icon: <GitHubIcon fontSize='large' />,
    link: 'https://github.com/RichardHpa',
  },
}

export const socialIconsArray = Object.keys(socialIcons).map((key) => ({
  // @ts-expect-error - key is a string
  ...socialIcons[key],
  name: key,
}))
