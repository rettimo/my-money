import { FC } from 'react'
import { IAccountsQuery } from 'generated/graphql'

import { Paper, makeStyles, Typography, Box, Divider } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
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
  divider: {
    margin: '10px 0 15px 0',
  },
  sceleton: {
    marginBottom: 10,
  },
})

export const Balance: FC<{ data: IAccountsQuery; loading: boolean }> = ({ data, loading }) => {
  const classes = useStyles()

  if (loading) {
    return (
      <>
        <Skeleton className={classes.sceleton} variant="rect" width="100%" height={70} />
        <Skeleton className={classes.sceleton} variant="rect" width="100%" height={70} />
        <Skeleton className={classes.sceleton} variant="rect" width="100%" height={70} />
        <Skeleton className={classes.sceleton} variant="rect" width="100%" height={70} />
      </>
    )
  }

  const { accounts } = data

  return (
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
              return v.currency._id === 0 ? a + v.amount : a
            }, 0)}
            currency="₴"
          />
        </Typography>
      </Box>
      {accounts.map(
        acc =>
          acc.visible && (
            <Box key={acc._id}>
              <Divider className={classes.divider} />
              <Box className={classes.account}>
                <Box>
                  <Icon icon={acc.iconID} />
                  <Typography variant="subtitle1" color="textSecondary">
                    {acc.name}
                  </Typography>
                </Box>
                <Typography variant="h5">
                  <Amount value={acc.amount} currency={acc.currency.icon} />
                </Typography>
              </Box>
            </Box>
          ),
      )}
    </Paper>
  )
}
