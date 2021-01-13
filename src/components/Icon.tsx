import { FC } from 'react'

import {
  Accessibility,
  AccountBalance,
  AccountBalanceWallet,
  Apps,
  AttachMoney,
  BusinessCenter,
  CardGiftcard,
  Create,
  CreditCard,
  DirectionsBus,
  Home,
  ImportantDevices,
  InsertEmoticon,
  Kitchen,
  LocalBar,
  LocalCafe,
  LocalHospital,
  LocalMall,
  LocalMovies,
  LocalTaxi,
  MonetizationOn,
  MoneyOff,
  OfflineBolt,
  Pets,
  Phone,
  Redeem,
  School,
  Score,
  SportsBasketball,
  Subscriptions,
  Work,
} from '@material-ui/icons'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  icon: {
    marginRight: 15,
  },
})

export const Icon: FC<{ icon: number }> = ({ icon }) => {
  const classes = useStyles()

  switch (icon) {
    case 0:
      return <Kitchen color="primary" className={classes.icon} />
    case 1:
      return <LocalCafe color="primary" className={classes.icon} />
    case 2:
      return <LocalMovies color="primary" className={classes.icon} />
    case 3:
      return <Pets color="primary" className={classes.icon} />
    case 4:
      return <LocalTaxi color="primary" className={classes.icon} />
    case 5:
      return <Accessibility color="primary" className={classes.icon} />
    case 6:
      return <BusinessCenter color="primary" className={classes.icon} />
    case 7:
      return <Subscriptions color="primary" className={classes.icon} />
    case 8:
      return <LocalHospital color="primary" className={classes.icon} />
    case 9:
      return <LocalMall color="primary" className={classes.icon} />
    case 10:
      return <SportsBasketball color="primary" className={classes.icon} />
    case 11:
      return <CardGiftcard color="primary" className={classes.icon} />
    case 12:
      return <MoneyOff color="primary" className={classes.icon} />
    case 13:
      return <Phone color="primary" className={classes.icon} />
    case 14:
      return <DirectionsBus color="primary" className={classes.icon} />
    case 15:
      return <OfflineBolt color="primary" className={classes.icon} />
    case 16:
      return <InsertEmoticon color="primary" className={classes.icon} />
    case 17:
      return <Create color="primary" className={classes.icon} />
    case 18:
      return <ImportantDevices color="primary" className={classes.icon} />
    case 19:
      return <Home color="primary" className={classes.icon} />
    case 20:
      return <Score color="primary" className={classes.icon} />
    case 21:
      return <MonetizationOn color="primary" className={classes.icon} />
    case 22:
      return <AttachMoney color="primary" className={classes.icon} />
    case 23:
      return <Redeem color="primary" className={classes.icon} />
    case 24:
      return <AccountBalance color="primary" className={classes.icon} />
    case 25:
      return <Score color="primary" className={classes.icon} />
    case 26:
      return <LocalBar color="primary" className={classes.icon} />
    case 27:
      return <School color="primary" className={classes.icon} />
    case 28:
      return <Work color="primary" className={classes.icon} />
    case 29:
      return <Apps color="primary" className={classes.icon} />
    case 30:
      return <Apps color="primary" className={classes.icon} />
    case 31:
      return <CreditCard color="primary" className={classes.icon} />
    case 32:
      return <AccountBalanceWallet color="primary" className={classes.icon} />
    case 33:
      return <AttachMoney color="primary" className={classes.icon} />

    default:
      return null
  }
}
