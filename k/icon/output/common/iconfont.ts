
// @ts-nocheck
/* eslint-disable */
import React from 'react'
import classnames from 'classnames'

type IKey = "common_base_like_24"

interface IProps extends React.HTMLProps<HTMLSpanElement> {
    icon: IKey
    darkMode?: Boolean
}

const IconFont = ({
    className,
    icon,
    darkMode = true,
    ...props
}: IProps) => React.createElement(
    'span',
    {
        className: classnames(
            'iconfont-common',
            `icon-${icon}`,
            darkMode ? `icon-${icon}-dual` : '',
            className
        ),
        'aria-hidden': 'true',
        ...props
    }
)

export default IconFont