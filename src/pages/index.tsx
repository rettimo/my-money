import { NextPage } from 'next'
import { useState } from 'react'

import { Layout } from 'components/Layout'
import { Secret } from 'components/Secret'
import { Balance } from 'components/Balance'
import { TimeLine } from 'components/TimeLine'
import { Modal } from 'components/Modal'

const Index: NextPage = () => {
  const [start, setStart] = useState<boolean>(true)

  const chechStart = (value: string): void => {
    if (value === 'вуду шмуду') setStart(true)
  }

  if (!start) {
    return (
      <Layout>
        <Secret onClick={chechStart} />
      </Layout>
    )
  }

  return (
    <Layout>
      <Balance />
      <Modal />
      <TimeLine />
    </Layout>
  )
}

export default Index
