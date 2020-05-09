import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DropDown from '../components/DropDown/DropDown';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                <Typography variant="h5">Parent/Gaurdian Information</Typography>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    {/* firstname - Gardian */}
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="First Name"
                    />
                </div>

                <div>
                    {/* lastname - Garidan */}
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="Last Name"
                    />
                </div>

                <div>
                    {/* email */}
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="Email"
                        helperText="Please use an email you check frequently"
                    />
                </div>

                <div>
                    {/* phonenumber */}
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="Phone Number"
                    />
                </div>

                <div className={classes.root}>
                    <Typography variant="h5">Camper Information</Typography>
                </div>

                <div>
                    {/* camperfirstname */}
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="First Name"
                    />
                </div>

                <div>
                    {/* camperlastname */}
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="Last Name"
                    />
                </div>

                <div>
                    {/* nickname */}
                    <TextField
                        id="standard-helperText"
                        label="Required"
                        defaultValue="Preferred Name"
                        helperText="Name your camper would like to be called at camp"
                    />
                </div>

                {/* birthday */}
                <TextField
                    id="date"
                    label="Required"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Camper's birthdate"

                />
                <div>
                    {/* grade */}
                    <TextField
                        id="standard-helperText"
                        label="Required"
                        defaultValue="4"
                        helperText="Grade your camper will be entering in the fall"

                    />
                </div>

                <div>
                    {/* Shirtsize */}
                    <DropDown
                        id="standard-helperText"
                        label="Required"
                        defaultValue="Medium"
                        helperText="Camper's Tshirt Size. Youth and adult sizes available"

                    />
                </div>

                <div>
                    {/* allergies */}
                    <TextField
                        id="standard-helperText"
                        label="Required"
                        defaultValue="Allergies"
                        helperText="Please list your Camper's known allergies"

                    />
                </div>

                <div>
                    {/* dietaryneeds */}
                    <TextField
                        id="standard-helperText"
                        label="Required"
                        defaultValue="No Prefrence"
                        helperText="Please list your Camper's dietary needs (example: vegitarian)"

                    />
                </div>

            </form>
        </Container>
    );
}
