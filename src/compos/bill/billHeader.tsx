import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import * as React from 'react'
import { H2 } from '../../style/baseStyles'


// id, introduced on, by, title..., last action, action list

export interface BillHeaderAction {
    date: Date
    action: string
}

export interface BillHeaderProps {
    id: string,
    introDate: Date,
    sponsors: string[],
    title: string,
    actionList: BillHeaderAction[] // in reverse order by date
}

export function BillHeader(props: BillHeaderProps) {
    const { id, introDate, sponsors, title, actionList } = props
    const actionListRender = actionList.map((a,i)=>(
        <div key={i}><div>{a.date.toString()}</div><div>{a.action}</div></div>
    ))
    return (
        <div>
            <div>
                <div>Bill Id</div>
                <div></div>
            </div>
            <div>
                <div>Introduced on</div>
                <div>{introDate.toString()}</div>
            </div>
            <div>
                <div>by</div>
                <div>{sponsors.join()}</div>
            </div>
            <div>
                <div>Title</div>
                <div>{title}</div>
            </div>
            <div>
                <div>Actions</div>
                <div>
                    {actionListRender}
                </div>
            </div>



        </div>
    )
}
