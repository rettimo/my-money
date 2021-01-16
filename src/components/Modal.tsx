import { FC, useState, ChangeEvent } from 'react'
import { getDateTime } from 'utils/dateHelpers'
import { Exact, IAccount, ICategory, INote } from 'generated/graphql'

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
import { Skeleton } from '@material-ui/lab'
import { QueryLazyOptions } from '@apollo/client'
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
  sceleton: {
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
})

interface Props {
  accounts: { accounts: IAccount[] }
  categories: { categories: ICategory[] }
  getCategories: (
    options?: QueryLazyOptions<
      Exact<{
        type: number
      }>
    >,
  ) => void
  createNote: (
    note: Pick<INote, 'account' | 'amount' | 'category' | 'createAt' | 'desc' | 'type'>,
  ) => void
  date: Date
}

export const Modal: FC<Props> = ({ accounts, categories, getCategories, createNote, date }) => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  const [type, setType] = useState<number>()
  const [amount, setAmount] = useState<string>()
  const [account, setAccount] = useState<string>()
  const [category, setCategory] = useState<string>()
  const [desc, setDesc] = useState<string>('')

  const handleClickOpen = (t: number) => {
    getCategories({ variables: { type: t } })
    setOpen(true)
    setType(t)
    setAmount('')
    setAccount('')
    setDesc('')
    setCategory('')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'amount':
        setAmount(event.target.value)
        break
      case 'account':
        setAccount(event.target.value)
        break
      case 'category':
        setCategory(event.target.value)
        break
      case 'desc':
        setDesc(event.target.value)
        break
      default:
        break
    }
  }

  const handleAddNote = async () => {
    const [_account] = accounts.accounts.filter(acc => acc._id === account)
    const [_category] = categories.categories.filter(categry => categry._id === +category)

    const note = {
      type,
      amount: Number(amount),
      account: _account,
      category: _category,
      desc,
      createAt: getDateTime(date).toISOString(),
    }

    createNote(note)

    setOpen(false)
  }

  return (
    <>
      <ButtonGroup color="primary" className={classes.group}>
        <Button onClick={() => handleClickOpen(1)} disabled={date > new Date()}>
          Доход
        </Button>
        <Button onClick={() => handleClickOpen(0)} disabled={date > new Date()}>
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
            name="amount"
            onChange={handleChangeField}
            fullWidth
            inputProps={{ inputMode: 'numeric' }}
          />
          <TextField
            className={classes.textField}
            select
            label="Счет"
            name="account"
            value={account}
            onChange={handleChangeField}
            fullWidth
          >
            {accounts &&
              accounts.accounts.map(
                option =>
                  option.visible && (
                    <MenuItem key={option._id} value={option._id}>
                      <Box className={classes.menuItem}>
                        <Icon icon={option.iconID} className={classes.icon} />
                        <Typography>{option.name}</Typography>
                        <Box className={classes.amount}>
                          <Amount value={option.amount} currency={option.currency.icon} />
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
            name="category"
            value={category}
            onChange={handleChangeField}
            fullWidth
          >
            {categories ? (
              categories.categories.map(option => (
                <MenuItem key={option._id} value={option._id}>
                  <Box className={classes.menuItem}>
                    <Icon icon={option._id} className={classes.icon} />
                    {option.name}
                  </Box>
                </MenuItem>
              ))
            ) : (
              <>
                <Skeleton className={classes.sceleton} variant="rect" width="100%" height={40} />
                <Skeleton className={classes.sceleton} variant="rect" width="100%" height={40} />
                <Skeleton className={classes.sceleton} variant="rect" width="100%" height={40} />
                <Skeleton className={classes.sceleton} variant="rect" width="100%" height={40} />
              </>
            )}
          </TextField>
          <TextField
            className={classes.textField}
            value={desc}
            onChange={handleChangeField}
            label="Описание"
            name="desc"
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
