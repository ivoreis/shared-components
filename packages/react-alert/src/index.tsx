/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { SFC } from 'react'

export type Kind = 'info' | 'positive' | 'negative' | 'warning'

export interface AlertProps {
  children: React.ReactNode
  /**
   * Set this to change alert kind
   * @default info
   */
  kind: 'info' | 'positive' | 'negative' | 'warning'
}

export const Alert: SFC<AlertProps> = props => {
  const innerProps = {
    p: 3,
    borderRadius: 1,
    variant: `alert.${props.kind}`
  }
  return <Box {...props} sx={innerProps} />
}
