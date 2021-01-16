import { NextPage } from 'next'
import { useState } from 'react'

import { Layout } from 'components/Layout'
import { Secret } from 'components/Secret'
import { Board } from 'components/Board'

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
      <Board />
    </Layout>
  )
}

export default Index
