import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
    Alert,
    Button,
    Grid2 as Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
    checkingAuthentication,
    startGoogleSignIn,
    startLoginWithEmailAndPassword,
} from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm({
        email: "",
        password: "",
    });

    const isAuthenticating = useMemo(() => status === "checking", [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailAndPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        console.log("Google Sign In");
        dispatch(startGoogleSignIn());
    };
    return (
        <AuthLayout title="login">
            <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />

                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="password"
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />

                    <Grid
                        container
                        size={12}
                        display={!!errorMessage ? "" : "none"}
                        sx={{ mt: 1 }}
                    >
                        <Grid
                            size={{
                                xs: 12,
                            }}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container size={12} spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Button
                                disabled={isAuthenticating}
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography marginLeft={1}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                        size={12}
                    >
                        <Link
                            color="inherit"
                            component={RouterLink}
                            to="/auth/register"
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
