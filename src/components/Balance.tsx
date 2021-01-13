import { FC } from 'react'
import { accounts } from 'mock/data'

import { Paper, makeStyles, Typography, Box } from '@material-ui/core'
import { AccountBalance, CreditCard } from '@material-ui/icons'
import { moneyView } from 'utils/moneyView'
import { Amount } from './Amount'
import { Icon } from './Icon'

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
            <Icon icon={24} />
            <Typography variant="subtitle1" color="textSecondary">
              Баланс
            </Typography>
          </Box>
          <Typography variant="h5">
            <Amount
              value={accounts.reduce((a, v) => {
                return v.currencyId === 0 ? a + v.amount : a
              }, 0)}
            />
          </Typography>
        </Box>
      </Paper>
      {accounts.map(
        acc =>
          acc.visible && (
            <Paper className={classes.paper} key={acc.id}>
              <Box className={classes.account}>
                <Box>
                  <Icon icon={acc.iconId} />
                  <Typography variant="subtitle1" color="textSecondary">
                    {acc.name}
                  </Typography>
                </Box>
                <Typography variant="h5">
                  <Amount value={acc.amount} currency={acc.currencyId} />
                </Typography>
              </Box>
            </Paper>
          ),
      )}
    </>
  )
}
