import { FC, useState, ChangeEvent } from 'react'
import { categoryIds } from 'constants/index'
import { accounts } from 'mock/data'

import {
  ButtonGroup,
  Button,
  MenuItem,
  TextField,
  DialogActions,
  DialogTitle,
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
  Box,
} from '@material-ui/core'
import { DateBar } from './DateBar'
import { Icon } from './Icon'
import { Amount } from './Amount'

const useStyles = makeStyles({
  dialog: {
    minWidth: '300px',
  },
  title: {
    marginBottom: 10,
  },
  group: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
  textField: {
    marginBottom: 10,
    height: 50,
  },
  amount: {
    marginLeft: 'auto',
  },
  menuItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
})

export const Modal: FC = () => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  const [type, setType] = useState<number>()
  const [amount, setAmount] = useState<string>()
  const [account, setAccount] = useState<string>()
  const [category, setCategory] = useState<string>()
  const [desc, setDesc] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const handleClickOpen = (_type: number) => {
    setOpen(true)
    setType(_type)
    setAmount('')
    setAccount('')
    setDesc('')
    setCategory('')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value)
  }

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value)
  }

  const handleChangeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }

  const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value)
  }

  const handleAddNote = () => {
    const note = {
      type,
      amount: Number(amount),
      accountId: Number(account),
      categoryId: Number(category),
      desc,
      createAt: selectedDate,
    }

    console.log(note)

    setOpen(false)
  }

  return (
    <>
      <DateBar changeDate={handleDateChange} currentDate={selectedDate} />
      <ButtonGroup color="primary" className={classes.group}>
        <Button onClick={() => handleClickOpen(1)} disabled={selectedDate > new Date()}>
          Доход
        </Button>
        <Button onClick={() => handleClickOpen(0)} disabled={selectedDate > new Date()}>
          Рассход
        </Button>
      </ButtonGroup>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{type === 0 ? 'Расход' : 'Доход'}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <TextField
            className={classes.textField}
            label="Сумма"
            value={amount}
            onChange={handleChangeAmount}
            fullWidth
            inputProps={{ inputMode: 'numeric' }}
          />
          <TextField
            className={classes.textField}
            select
            label="Счет"
            value={account}
            onChange={handleChangeAccount}
            fullWidth
          >
            {accounts.map(
              option =>
                option.visible && (
                  <MenuItem key={option.id} value={option.id}>
                    <Box className={classes.menuItem}>
                      <Icon icon={option.iconId} />
                      <Typography>{option.name}</Typography>
                      <Box className={classes.amount}>
                        <Amount value={option.amount} />
                      </Box>
                    </Box>
                  </MenuItem>
                ),
            )}
          </TextField>
          <TextField
            className={classes.textField}
            select
            label="Категория"
            value={category}
            onChange={handleChangeCategory}
            fullWidth
          >
            {categoryIds.map(
              option =>
                type === option.typeId && (
                  <MenuItem key={option.id} value={option.id}>
                    <Box className={classes.menuItem}>
                      <Icon icon={option.id} />
                      {option.name}
                    </Box>
                  </MenuItem>
                ),
            )}
          </TextField>
          <TextField
            className={classes.textField}
            value={desc}
            onChange={handleChangeDesc}
            label="Описание"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button
            onClick={handleAddNote}
            color="primary"
            disabled={amount === '' || account === '' || category === ''}
          >
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
