import { useState, ChangeEvent } from 'react'
import { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { useAccountsQuery } from 'generated/graphql'
import {
  Paper,
  makeStyles,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { Amount } from 'components/Amount'
import { Icon } from 'components/Icon'

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
  button: {
    marginBottom: 15,
    marginLeft: 'auto',
  },
  dialog: {
    minWidth: '300px',
  },
})

const accountsPage: NextPage = () => {
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')
  const [currency, setCurrency] = useState('')
  const [icon, setIcon] = useState('')
  const [visible, setVisible] = useState(true)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleChangeVisible = (e: ChangeEvent<HTMLInputElement>) => {
    setVisible(e.target.checked)
  }

  const { data, loading } = useAccountsQuery()

  const classes = useStyles()

  if (loading) {
    return (
      <Layout>
        <Skeleton className={classes.sceleton} variant="rect" width="100%" height={70} />
        <Skeleton className={classes.sceleton} variant="rect" width="100%" height={70} />
      </Layout>
    )
  }

  const { accounts } = data

  return (
    <Layout>
      <Button variant="contained" color="primary" className={classes.button} onClick={handleOpen}>
        Добавить
      </Button>
      {accounts.map(
        acc =>
          acc.visible && (
            <Paper key={acc._id} className={classes.paper}>
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
            </Paper>
          ),
      )}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Добавить категорию</DialogTitle>
        <DialogContent className={classes.dialog}>
          <FormGroup>
            <TextField label="Название" onChange={handleChangeName} value={name} fullWidth />
            <TextField label="Валюта" onChange={handleChangeName} value={name} fullWidth />
            <TextField label="Иконка" onChange={handleChangeName} value={name} fullWidth />
            <FormControlLabel
              control={<Checkbox checked={visible} onChange={handleChangeVisible} name="visible" />}
              label="Видимый"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button>Добавить</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default accountsPage
