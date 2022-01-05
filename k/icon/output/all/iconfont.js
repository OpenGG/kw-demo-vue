// @ts-nocheck
/* eslint-disable */
import React from 'react'
import classnames from 'classnames'

const IconFont = ({
    className,
    icon,
    darkMode = true,
    size = 0,
    style,
    ...props
}) => React.createElement(
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