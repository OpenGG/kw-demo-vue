// @ts-nocheck
/* eslint-disable */
import React from 'react'
import classnames from 'classnames'

const IconFont = ({
    className,
    icon,
    darkMode = true,
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
        ...props
    }
)

export default IconFont