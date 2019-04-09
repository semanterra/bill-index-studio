import { storiesOf } from '@storybook/react'
import React from 'react'
import { addTheme } from '../../storybook/decorators'
import { BillHeader, BillHeaderProps } from './billHeader'

const bhProps: BillHeaderProps = {
    id: 'HB 123',
    introDate: new Date(),
    sponsors: ['Jane Roe', 'John Doe'],
    title: 'Regarding the possibility of reforming the way bills are titled, because they do run on',
    actionList: [
        { date: new Date(), action: 'Failed the Senate' },
        { date: new Date(), action: 'Passed the house' },
    ]
}

storiesOf('Bill-Index-Studio/Bill', module)
    .addDecorator(addTheme)
    .add('BillHeader', () => <BillHeader {...bhProps}/>);
