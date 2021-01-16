import { FC } from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    cursor: 'pointer',
  },
})

export const Navbar: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <Typography variant="h6" component="a" className={classes.link}>
            Кошелек
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
