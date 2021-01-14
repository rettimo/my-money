import { makeStyles, Typography } from '@material-ui/core'
import { FC } from 'react'
import { moneyView } from 'utils/moneyView'

const useStyles = makeStyles({
  textGreen: {
    color: 'green',
  },
  textRed: {
    color: 'red',
  },
})

export const Amount: FC<{ value: number; currency?: string }> = ({
  value,
  currency = '',
}): JSX.Element => {
  const classes = useStyles()
  return (
    <Typography
      variant="inherit"
      component="span"
      className={value > 0 ? classes.textGreen : classes.textRed}
    >
      {moneyView(value, currency)}
    </Typography>
  )
}
