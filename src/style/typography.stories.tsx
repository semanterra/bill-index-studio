import { storiesOf } from '@storybook/react'
import React from 'react'
import { addTheme } from '../storybook/decorators'
import { H1, H2, H3, H4, H5, H6 } from './baseStyles'

storiesOf('Bill-Index-Studio/style', module)
    .addDecorator(addTheme)
    .add('typography', () => (
        <>
            <H1>H1 header</H1>
            <H2>H2 header</H2>
            <H3>H3 header</H3>
            <H4>H4 header</H4>
            <H5>H5 header</H5>
            <H6>H6 header</H6>
</>
            ))
