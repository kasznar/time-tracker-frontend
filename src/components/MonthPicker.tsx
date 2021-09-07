import React, {FC} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

// todo: proper datepicker
const months: Array<{index: number, name: string}> = [
    {index: 1, name: "January"},
    {index: 2, name: "February"},
    {index: 3, name: "March"},
    {index: 4, name: "April"},
    {index: 5, name: "May"},
    {index: 6, name: "June"},
    {index: 7, name: "July"},
    {index: 8, name: "August"},
    {index: 9, name: "September"},
    {index: 10, name: "October"},
    {index: 11, name: "November"},
    {index: 12, name: "December"},
]

export const MonthPicker: FC<{month: number, onChange: (month: number)=> void}> = (props) => {
    const classes = useStyles();

    return <form className={classes.root} noValidate autoComplete="off">
        <FormControl required>
            <InputLabel id="year-label">Year</InputLabel>
            <Select
                labelId="year-label"
                id="year"
                value={2021}
            >
                <MenuItem value={2021}>2021</MenuItem>
            </Select>
        </FormControl>
        <FormControl required>
            <InputLabel id="month-label">Month</InputLabel>
            <Select
                labelId="month-label"
                id="month"
                value={props.month}
                onChange={(e) => props.onChange(e.target.value as number)}
            >
                {months.map(m => (<MenuItem value={m.index} key={m.index}>{m.name}</MenuItem>))}
            </Select>
        </FormControl>
    </form>
}
