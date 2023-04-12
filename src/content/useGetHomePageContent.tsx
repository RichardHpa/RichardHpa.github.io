import { useMemo } from 'react'
import { Link, Button, Stack } from '@mui/material'

export const useGetHomePageContent = () => {
  const getHomePageContent = useMemo(() => {
    return [
      {
        title: 'Medical Research Institute of New Zealand',
        subtitle: 'Custom Wordpress Theme',
        description:
          'MRINZ tasked me with redesigning their existing website to have a new design as well as making it easier for them to manage.',
        image: 'static/mrinz.jpg',
        actions: (
          <Button
            component={Link}
            href='https://github.com/RichardHpa/Medical-Research-Institute-of-New-Zealand'
            target='_blank'
            variant='outlined'
            disableElevation
            size='small'
          >
            View github code
          </Button>
        ),
      },
      {
        title: 'Wellington on a Plate',
        subtitle: 'Web App',
        description:
          "In 2019 there Wellington on a Plate didn't have a interactive map for their event, so I decided to make my own using React and Google Maps.",
        image: 'static/woap.jpg',
        actions: (
          <Stack direction='row' spacing={2}>
            <Button
              component={Link}
              href='https://richardhpa.github.io/woap'
              target='_blank'
              variant='outlined'
              disableElevation
              size='small'
            >
              View the app
            </Button>
            <Button
              component={Link}
              href='https://github.com/RichardHpa/woap'
              target='_blank'
              variant='outlined'
              disableElevation
              size='small'
            >
              View github code
            </Button>
          </Stack>
        ),
      },
      {
        title: 'Little Yellow Bird',
        subtitle: 'Custom Shopify Theme',
        description:
          'LYB tasked with me building out a full shopify theme for their new store. Their main goal was to have a store that was easy to manage and had a clean design.',
        image: 'static/LYB.jpeg',
        actions: (
          <Button
            component={Link}
            href='https://github.com/RichardHpa/Medical-Research-Institute-of-New-Zealand'
            target='_blank'
            variant='outlined'
            disableElevation
            size='small'
          >
            View github code
          </Button>
        ),
      },
      {
        title: 'Organic Edible Garden',
        subtitle: 'Custom Wordpress Theme',
        description:
          'OEG tasked me with rebuilding and redesigning their existing website to have a new design as well as making it easier for them to manage.',
        image: 'static/oeg.png',
        actions: (
          <Button
            component={Link}
            href='https://organicediblegarden.co.nz/'
            target='_blank'
            variant='outlined'
            disableElevation
            size='small'
          >
            View the site
          </Button>
        ),
      },
    ]
  }, [])

  return { getHomePageContent }
}
