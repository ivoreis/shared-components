/** @jsx jsx */
import { jsx, Box, Theme } from 'theme-ui'
import { SFC } from 'react'

type Kind = 'primary' | 'secondary'

export interface ButtonProps {
  children?: React.ReactNode
  scale?: 'small' | 'normal' | 'large'
  kind?: Kind
  outline?: boolean
}

const scales = {
  small: {
    p: 1,
    fontSize: 1
  },
  normal: {
    p: 2,
    fontSize: 2
  },
  large: {
    p: 3,
    fontSize: 3
  }
}

const getKindStyles = (outline: boolean) => (bg: string, color: string) => {
  const boxShadowColor = outline ? bg : 'transparent'

  return {
    boxShadow: `inset 0 0 0 1px ${boxShadowColor}`,
    bg: outline ? 'transparent' : bg,
    color: outline ? bg : color,
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: (p: Theme) => (outline ? `inset 0 0 0 1000px ${(p.colors as any)[boxShadowColor]}` : bg),
      color
    }
  }
}

const kinds = (outline: boolean) => (kind: Kind) => getKindStyles(outline)(kind, 'background')
const getScale = ({ scale = 'normal' }: ButtonProps) => scales[scale]
const getKind = ({ kind = 'primary', outline = false }: ButtonProps) => kinds(outline)(kind)

export const Button: SFC<ButtonProps> = props => {
  const innerProps = {
    cursor: 'pointer',
    marginX: 1,
    marginY: 2,
    border: 'none',
    borderRadius: 1,
    ...getScale(props),
    ...getKind(props)
  }
  return <Box {...props} as={'button'} sx={innerProps} />
}
