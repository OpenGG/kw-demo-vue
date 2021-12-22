
// @ts-nocheck
/* eslint-disable */
import React from 'react'

// @ts-ignore: forced import ts
import IconFont from './iconfont.ts'

type IKey = "common_base_like_24"

interface IProps extends React.HTMLProps<HTMLSpanElement> {
    icon: IKey
}

const IconFontLight = (props: IProps) => React.createElement(
    IconFont,
    {
        darkMode: false,
        ...props
    }
)

export default IconFontLight