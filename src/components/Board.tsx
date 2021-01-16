import { FC, useState } from 'react'
import {
  useAccountAcountMutation,
  useAccountsQuery,
  useCategoriesLazyQuery,
  useNoteMutation,
  useNotesQuery,
} from 'generated/graphql'

import { Balance } from './Balance'
import { DateBar } from './DateBar'
import { Modal } from './Modal'
import { TimeLine } from './TimeLine'

export const Board: FC = () => {
  //* -------------------------- State -------------------------
  //* Date
  const [selectedDate, setSelectedDate] = useState(new Date())

  //* ------------------------- Queries ------------------------
  //* Accounts data
  const { data: accData, loading: accLoading, refetch: refetchAcc } = useAccountsQuery({
    variables: { visible: true },
  })

  //* Notes data
  const { data: notesData, loading: notesLoading, refetch: refetchNotes } = useNotesQuery({
    variables: { date: selectedDate },
  })

  //* Categories data
  const [getCategories, { data: categoriesData }] = useCategoriesLazyQuery()

  //* ------------------------ Mutation ------------------------
  const [createNote] = useNoteMutation()
  const [updateAccount] = useAccountAcountMutation()

  //* ------------------------ Methods -------------------------
  //* Change date
  const handleDateChange = date => {
    setSelectedDate(date)
    refetchNotes({ date })
  }

  //* Create Note
  const hanldeCreateNote = note => {
    createNote({ variables: { input: note } })
    updateAccount({
      variables: {
        id: note.account._id,
        amount: note.amount,
        type: note.type,
      },
    })
    refetchAcc({ visible: true })
    refetchNotes({ date: selectedDate })
  }

  return (
    <>
      <Balance data={accData} loading={accLoading} />
      <DateBar currentDate={selectedDate} changeDate={handleDateChange} />
      <Modal
        accounts={accData}
        categories={categoriesData}
        getCategories={getCategories}
        createNote={hanldeCreateNote}
        date={selectedDate}
      />
      <TimeLine data={notesData} loading={notesLoading} />
    </>
  )
}
