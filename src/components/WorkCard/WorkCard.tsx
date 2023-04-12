import { Grid, Box, Typography, Divider } from '@mui/material'
import Image from 'mui-image'

import type { FC } from 'react'
import type { WorkCardProps } from './types'

export const WorkCard: FC<WorkCardProps> = ({
  title,
  subtitle,
  description,
  actions,
  direction,
  image,
}) => {
  return (
    <Box my={4}>
      <Grid container spacing={4} direction={direction}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='subtitle2'>{subtitle}</Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Typography>{description}</Typography>

          <Box my={2}>{actions}</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src={image || 'https://source.unsplash.com/random'} />
        </Grid>
      </Grid>
    </Box>
  )
}
