import { FC } from 'react'
import { formatDate } from 'utils/dateHelpers'
import { INotesQuery } from 'generated/graphql'

import {
  Timeline as MIUTimeLine,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab'
import { Typography, Box, makeStyles, Button, CircularProgress } from '@material-ui/core'
import { Amount } from './Amount'
import { Icon } from './Icon'

const useStyles = makeStyles({
  timeLine: {
    padding: 0,
  },
  content: {
    marginTop: -7,
  },
  dot: {
    minWidth: 0,
    padding: 0,
  },
  notFound: {
    padding: '25px 0',
    textAlign: 'center',
  },
  icon: {
    transform: 'translate(0px, 6px)',
    marginLeft: 7,
    display: 'inline-block',
  },
  progress: {
    textAlign: 'center',
    padding: 25,
  },
})

interface Props {
  data: INotesQuery
  loading: boolean
}

export const TimeLine: FC<Props> = ({ data, loading }) => {
  const classes = useStyles()

  if (loading) {
    return (
      <Box className={classes.progress}>
        <CircularProgress />
      </Box>
    )
  }

  const { notes } = data

  if (notes.length === 0) {
    return <Typography className={classes.notFound}>Записей не найдено</Typography>
  }

  return (
    <>
      <MIUTimeLine align="alternate" className={classes.timeLine}>
        {notes.map(note => (
          <TimelineItem key={note._id}>
            <TimelineOppositeContent>
              <Typography color="textSecondary">{formatDate(note.createAt)}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Button className={classes.dot}>
                <TimelineDot />
              </Button>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.content}>
              <Box>
                <Typography>
                  <Amount
                    value={note.type ? note.amount : -note.amount}
                    currency={note.account.currency.icon}
                  />
                  <Box component="span" className={classes.icon}>
                    <Icon icon={note.category._id} />
                  </Box>
                </Typography>
              </Box>
              <Box>{note.account.name}</Box>
              <Typography variant="caption" color="textSecondary">
                {note.desc}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MIUTimeLine>
    </>
  )
}
