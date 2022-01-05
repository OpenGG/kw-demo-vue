
// @ts-nocheck
/* eslint-disable */
import React from 'react'
import classnames from 'classnames'

type IKey = "common_base_like_24"

export interface IProps extends React.HTMLProps<HTMLSpanElement> {
    icon: IKey
    darkMode?: Boolean
    size?: number
}

const IconFont = ({
    className,
    icon,
    darkMode = true,
    size = 0,
    style,
    ...props
}: IProps) => React.createElement(
    'span',
    {
        className: classnames(
            'iconfont-all',
            `icon-${icon}`,
            darkMode ? `icon-${icon}-dual` : '',
            className
        ),
        'aria-hidden': 'true',
        style: size ? { fontSize: `${size}px`, ...style } : style,
        ...props
    }
)

export default IconFont