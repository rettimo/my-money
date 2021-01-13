import { makeStyles, Typography } from '@material-ui/core'
import { FC } from 'react'
import { moneyView } from 'utils/moneyView'
import { currencyIds } from 'constants/index'

const useStyles = makeStyles({
  textGreen: {
    color: 'green',
  },
  textRed: {
    color: 'red',
  },
})

export const Amount: FC<{ value: number; currency?: number }> = ({
  value,
  currency = 0,
}): JSX.Element => {
  const classes = useStyles()
  return (
    <Typography
      variant="inherit"
      component="span"
      className={value > 0 ? classes.textGreen : classes.textRed}
    >
      {moneyView(value, currencyIds[currency].icon)}
    </Typography>
  )
}
