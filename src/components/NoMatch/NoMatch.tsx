import { Typography, Button, Box } from '@mui/material'

import { Link } from 'react-router-dom'

export const NoMatch = () => {
  return (
    <div>
      <Typography variant='h3' component='div' sx={{ flexGrow: 1 }} textAlign='center'>
        404 - Not Found
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <Button component={Link} to='/'>
          Go to the home page
        </Button>
      </Box>
    </div>
  )
}
