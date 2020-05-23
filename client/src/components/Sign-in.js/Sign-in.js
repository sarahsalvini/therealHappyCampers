import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit_orange: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#e57200 !important',
        color: 'white !important',
    },
    submit_blue: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#002f6c !important',
        color: 'white !important',
    },

}));



export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div>
                    <img className="logo_wBorder" src={CQKC_Logo_wBorder_250x250} alt="CQKC Logo" />
                </div>

                <Typography component="h1" variant="h5">
                    Sign in
                 </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required fullWidth id={signup.email}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required fullWidth name="password"
                        label="Password"
                        type="password"
                        id={signup.password}
                        autoComplete="current-password"
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <Button type="submit" fullWidth variant="contained" className={classes.submit_orange}>
                        Sign In
                    </Button>
                    <Button href="CreateAccount" fullWidth variant="contained" color="primary" className={classes.submit_blue}>
                        Create an Account
                            </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Forgot password?</Link>
                        </Grid>
                        <Grid item>

                            {/* <Link href="CreateAccount" variant="body2">Don't have an account? Sign Up</Link> */}

                        </Grid>
                    </Grid>
                </form>
            </div>

            <Box mt={8}>
                <Copyright />
            </Box>

        </Container>


    );
}