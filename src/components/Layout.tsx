import { Box, Container, makeStyles } from '@material-ui/core'
import { FC } from 'react'
import { Navbar } from './Navabar'

const useStyles = makeStyles({
  box: {
    marginTop: '15px',
  },
  container: {
    maxWidth: 600,
  },
})

export const Layout: FC = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <Box component="main" className={classes.box}>
        <Container className={classes.container}>{children}</Container>
      </Box>
    </>
  )
}
