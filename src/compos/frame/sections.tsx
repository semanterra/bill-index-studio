import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import * as React from 'react'
import { H2 } from '../../style/baseStyles'

const useStyles = makeStyles({
    header: {
        color     : '#465241',
        background: '#f0f8f8'
    },
})


type SectionProps = { title: string, children: any }

function Section({ title = 'foo', children }: SectionProps) {
    const c = useStyles()
    return (
        <div>
            <Divider className={c.header}/>
            <H2 className={c.header}>{title}</H2>
            {children}
        </div>
    )
}

export function Sections() {
    return (
        <>
            <Section title='Project control'>
                <div>Load file, save file, display json, display index</div>
                <div>State</div>
                <div>Session</div>
                <div>Bill Filter</div>
                <div>Order</div>
                <div>Import, export taxonomy</div>
                <div>Merge project</div>
            </Section>
            <Section title='Status'>
                <div>Progress bar</div>
                <div>Bill list (show status done, not done, outdated)</div>
            </Section>
            <Section title='Current Bill'>

                <div>id, introduced on, by, title..., last action, action list</div>
                <div>skip this bill button</div>
                <div>full title</div>
                <div>text of bill</div>
                <div>Grist list (each has status, controls)</div>
            </Section>
            <Section title='Current grain'>
                <div>Add entry UI, Done button</div>
                <div>List of entries, clicking on one brings up taxo tools</div>
            </Section>
            <Section title='Taxonomy tools (probably a popup)'>
            </Section>
        </>
    )
}
