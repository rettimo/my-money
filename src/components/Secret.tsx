import { Box, TextField, Button, makeStyles } from '@material-ui/core'
import { ChangeEvent, useState, FC } from 'react'

interface Props {
  onClick: (value: string) => void
}

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: '15px',
  },
})

export const Secret: FC<Props> = ({ onClick }) => {
  const classes = useStyles()
  const [value, setValue] = useState<string>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Box className={classes.box}>
      <TextField label="Секретное слово" value={value} onChange={handleChange} color="primary" />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={() => onClick(value)}
      >
        Ответить
      </Button>
    </Box>
  )
}
