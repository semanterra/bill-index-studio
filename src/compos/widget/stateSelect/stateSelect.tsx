import * as React from 'react'
import { Theme } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import FormControl from '@material-ui/core/FormControl'

import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { createStyles, makeStyles, useTheme } from '@material-ui/styles'
import { ChangeEvent, ComponentType, ReactFragment, ReactNode, SFC, useState } from 'react'
import {
    YnPureComponent
} from '../../ynComponent'



const useStyles = makeStyles((theme: Theme) => createStyles({
    root       : {
        display : 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin  : theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips      : {
        display : 'flex',
        flexWrap: 'wrap',
    },
    chip       : {
        margin: theme.spacing.unit / 4,
    },
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width    : 250,
        },
    },
}


type StateId = string

interface GovState {
    id: StateId,
    frag: ReactFragment
}

const Emphasize: SFC = (props) => <b>{props.children}</b>


function makeStates(E: ComponentType): GovState[] {
    return [
        { id: 'nh', frag: <><E>N</E>ew<E> H</E>ampshire</> },
        { id: 'vt', frag: <><E>V</E>ermon<E>t</E></> },

    ]
}

const states = makeStates(Emphasize)


const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
]

/*
  export default function makeStyles<S extends Styles<any, any,CLASSKEY>, CLASSKEY extends string=string>(
    styles: S,
    options?: WithStylesOptions,
  ): StylesHook<S>;

 */
export function StateSelect() {
    const [selectedState, setSelectedState] = useState(undefined)
    const [prefix, setPrefix] = useState('')

    const handleChange = (event: ChangeEvent<any>) => {
        setSelectedState(event.target.value)
    }

    const classes = useStyles()
    const theme = useTheme<Theme>()
    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">Name</InputLabel>
                <Select

                    value={selectedState}
                    onChange={handleChange}
                    input={<Input id="select-state" />}
                    MenuProps={MenuProps}
                >
                    {states.map<ReactNode>((state: GovState) => (
                        <MenuItem
                            key={state.id}
                            value={state.id}
                            style={{
                                fontWeight:
                                    selectedState === state.id
                                        ? theme.typography.fontWeightRegular
                                        : theme.typography.fontWeightMedium,
                            }}
                        >
                            {state.frag}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}


