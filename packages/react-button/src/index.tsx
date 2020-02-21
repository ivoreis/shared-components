/** @jsx jsx */
import { jsx, Theme } from 'theme-ui'
import { SFC } from 'react'

type Kind = 'primary' | 'secondary'

export interface ButtonProps {
  children?: React.ReactNode
  scale?: 'small' | 'normal' | 'large'
  kind?: Kind
  outlined?: boolean
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

const getKindStyles = (outlined: boolean) => (bg: string, color: string) => {
  const boxShadowColor = outlined ? bg : 'transparent'

  return {
    boxShadow: `inset 0 0 0 1px ${boxShadowColor}`,
    bg: outlined ? 'transparent' : bg,
    color: outlined ? bg : color,
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: (p: Theme) => (outlined ? `inset 0 0 0 1000px ${(p.colors as any)[boxShadowColor]}` : bg),
      color
    }
  }
}

const kinds = (outlined: boolean) => (kind: Kind) => getKindStyles(outlined)(kind, 'background')
const getScale = ({ scale = 'normal' }: ButtonProps) => scales[scale]
const getKind = ({ kind = 'primary', outlined = false }: ButtonProps) => kinds(outlined)(kind)

export const Button: SFC<ButtonProps> = props => {
  const { outlined, scale, kind, ...other } = props
  const innerProps = {
    cursor: 'pointer',
    marginX: 1,
    marginY: 2,
    border: 'none',
    borderRadius: 1,
    ...getScale(props),
    ...getKind(props)
  }
  return <button {...other} sx={innerProps} />
}
