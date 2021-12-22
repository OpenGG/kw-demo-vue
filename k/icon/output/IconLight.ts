// @ts-nocheck
/* eslint-disable */
import React from 'react'

// @ts-ignore: forced import ts
import Icon from './Icon.ts'

type Icon = (number | string)[] // IconConfigSVG | IconConfigPng

type IconPngBaseProps = React.HTMLProps<HTMLSpanElement> & React.HTMLProps<HTMLImageElement>

interface IconPngProps extends IconPngBaseProps {
  config: Icon
  darkMode?: boolean
}

interface IconSVGProps extends React.SVGProps<SVGSVGElement> {
  config: Icon
  darkMode?: boolean
  className?: string
}

type IconProps = IconSVGProps & IconPngProps

const IconLight = (props: IconProps) => React.createElement(
  Icon,
  {
    darkMode: false,
    ...props
  }
)

export default IconLight