/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from 'components/Layout'
import { Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  paper: {
    padding: 15,
  },
  link: {
    textDecoration: 'none',
  },
})

const settings: NextPage = () => {
  const cls = useStyles()

  return (
    <Layout>
      <Link href="/settings/accounts">
        <a className={cls.link}>
          <Paper className={cls.paper}>
            <Typography variant="h6">Счета</Typography>
          </Paper>
        </a>
      </Link>
    </Layout>
  )
}

export default settings
