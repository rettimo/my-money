import { ButtonGroup, Button, makeStyles } from '@material-ui/core'
import { FC } from 'react'

const useStyles = makeStyles({
  group: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
})

export const Buttons: FC = () => {
  const classes = useStyles()
  return (
    <ButtonGroup color="primary" className={classes.group}>
      <Button>Доход</Button>
      <Button>Рассход</Button>
    </ButtonGroup>
  )
}
