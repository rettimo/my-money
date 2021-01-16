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

export const Icon: FC<{ icon: number; className?: string }> = ({ icon, className }) => {
  switch (icon) {
    case 0:
      return <Kitchen color="primary" className={className} />
    case 1:
      return <LocalCafe color="primary" className={className} />
    case 2:
      return <LocalMovies color="primary" className={className} />
    case 3:
      return <Pets color="primary" className={className} />
    case 4:
      return <LocalTaxi color="primary" className={className} />
    case 5:
      return <Accessibility color="primary" className={className} />
    case 6:
      return <BusinessCenter color="primary" className={className} />
    case 7:
      return <Subscriptions color="primary" className={className} />
    case 8:
      return <LocalHospital color="primary" className={className} />
    case 9:
      return <LocalMall color="primary" className={className} />
    case 10:
      return <SportsBasketball color="primary" className={className} />
    case 11:
      return <CardGiftcard color="primary" className={className} />
    case 12:
      return <MoneyOff color="primary" className={className} />
    case 13:
      return <Phone color="primary" className={className} />
    case 14:
      return <DirectionsBus color="primary" className={className} />
    case 15:
      return <OfflineBolt color="primary" className={className} />
    case 16:
      return <InsertEmoticon color="primary" className={className} />
    case 17:
      return <Create color="primary" className={className} />
    case 18:
      return <ImportantDevices color="primary" className={className} />
    case 19:
      return <Home color="primary" className={className} />
    case 20:
      return <Score color="primary" className={className} />
    case 21:
      return <MonetizationOn color="primary" className={className} />
    case 22:
      return <AttachMoney color="primary" className={className} />
    case 23:
      return <Redeem color="primary" className={className} />
    case 24:
      return <AccountBalance color="primary" className={className} />
    case 25:
      return <Score color="primary" className={className} />
    case 26:
      return <LocalBar color="primary" className={className} />
    case 27:
      return <School color="primary" className={className} />
    case 28:
      return <Work color="primary" className={className} />
    case 29:
      return <Apps color="primary" className={className} />
    case 30:
      return <Apps color="primary" className={className} />
    case 31:
      return <CreditCard color="primary" className={className} />
    case 32:
      return <AccountBalanceWallet color="primary" className={className} />
    case 33:
      return <AttachMoney color="primary" className={className} />

    default:
      return null
  }
}
