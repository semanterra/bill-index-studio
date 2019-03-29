import { Theme } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/styles'
import { ChangeEvent, ComponentType, ReactFragment, ReactNode, SFC, useState } from 'react'
import {
    React,
    YnPureComponent
} from '../../ynComponent';

const styles = (theme: Theme) => createStyles({
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
    selected   : {
        fontWeight:
        theme.typography.fontWeightMedium,

    },
    unselected : {
        fontWeight:
        theme.typography.fontWeightRegular,

    },
})

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
    selected   : {
        fontWeight:
        theme.typography.fontWeightMedium,

    },
    unselected : {
        fontWeight:
        theme.typography.fontWeightRegular,

    },
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

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
];


interface IState { selectedNames: string[]}

export function MultiSelect() {
    const [selectedNames, setSelectedNames]= useState([] as string[])
    const handleChange = (event: ChangeEvent<any>) => {
        setSelectedNames(event.target.value )
    }
    const classes = useStyles()
    function renderItem(name:string) {
        const className = (selectedNames.indexOf(name) >= 0) ? classes.selected : classes.unselected
        return (
            <MenuItem
                key={name}
                value={name}
                className={className}
            >
                {name}
            </MenuItem>
        )
    }
    return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">Name</InputLabel>
                    <Select
                        multiple
                        value={selectedNames}
                        onChange={handleChange}
                        input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}
                    >
                        {names.map<ReactNode>(renderItem)}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
                    <Select
                        multiple
                        value={selectedNames}
                        onChange={handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={selectedNames.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
                    <Select
                        multiple
                        value={selectedNames}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {(selected as string[]).map((value:string) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map(renderItem)}
                    </Select>
                </FormControl>
            </div>
        );

}


