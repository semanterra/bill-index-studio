import { storiesOf } from '@storybook/react'
import React from 'react'
import { addTheme } from '../../storybook/decorators'
import { Sections } from './sections'

storiesOf('Bill-Index-Studio/Frame', module)
    .addDecorator(addTheme)
    .add('sections', () => <Sections/>);
