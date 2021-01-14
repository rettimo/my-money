import { FC } from 'react'

import {
  Timeline as MIUTimeLine,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab'
import { Typography, Box, makeStyles, Tooltip, Button } from '@material-ui/core'
import { LocalTaxi } from '@material-ui/icons'
import { Amount } from './Amount'

const useStyles = makeStyles({
  timeLine: {
    padding: 0,
  },
  icon: {
    transform: 'translate(5px, 6px)',
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
})

export const TimeLine: FC = () => {
  const classes = useStyles()

  const actions = []

  if (actions.length === 0) {
    return <Typography className={classes.notFound}>Записей не найдено</Typography>
  }

  return (
    <>
      <MIUTimeLine align="alternate" className={classes.timeLine}>
        {actions.map(i => (
          <TimelineItem key={i.id}>
            <TimelineOppositeContent>
              <Typography color="textSecondary">{i.createAt}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Button
                className={classes.dot}
                onClick={() => {
                  console.log(i.id)
                }}
              >
                <TimelineDot />
              </Button>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.content}>
              <Box>
                <Typography>
                  <Amount value={i.amount} />
                  <Tooltip title="Такси" placement="top">
                    <LocalTaxi className={classes.icon} color="primary" />
                  </Tooltip>
                </Typography>
              </Box>
              <Typography variant="caption" color="textSecondary">
                {i.desc}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MIUTimeLine>
    </>
  )
}
