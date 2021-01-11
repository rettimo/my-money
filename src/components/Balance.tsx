import { FC } from 'react'
import { accounts } from 'mock/data'

import { Paper, makeStyles, Typography, Box } from '@material-ui/core'
import { AccountBalance, CreditCard, AccountBalanceWallet, AttachMoney } from '@material-ui/icons'
import { moneyView } from 'utils/moneyView'
import { Amount } from './Amount'

const useStyles = makeStyles({
  paper: {
    padding: 15,
    marginBottom: 15,
  },
  account: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const Balance: FC = () => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper}>
        <Box className={classes.account}>
          <Box>
            <AccountBalance />
            <Typography variant="subtitle1" color="textSecondary">
              Баланс
            </Typography>
          </Box>
          <Typography variant="h5">
            <Amount
              value={accounts.reduce((a, v) => {
                return a + v.amount
              }, 0)}
            />
          </Typography>
        </Box>
      </Paper>
      {accounts.map(acc => (
        <Paper className={classes.paper}>
          <Box className={classes.account}>
            <Box>
              <CreditCard />
              <Typography variant="subtitle1" color="textSecondary">
                {acc.name}
              </Typography>
            </Box>
            <Typography variant="h5">{moneyView(acc.amount)}</Typography>
          </Box>
        </Paper>
      ))}
    </>
  )
}
