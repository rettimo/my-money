/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { Settings } from '@material-ui/icons'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    display: 'inline-flex',
  },
  icon: {
    color: '#fff',
  },
})

export const Navbar: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <Typography variant="h6" component="a">
            Кошелек
          </Typography>
        </Link>
        <Link href="/settings">
          <a className={classes.link}>
            <Settings className={classes.icon} />
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
