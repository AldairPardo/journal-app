import { Link as RouterLink } from "react-router-dom";
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
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEmailAndPasswordRegister } from "../../store/auth";

const formData = {
    displayName: "",
    email: "",
    password: "",
};

const formValidations = {
    email: [(value) => value.includes("@"), "El correo debe tener un @"],
    password: [
        (value) => value.length > 5,
        "La contraseña debe tener al menos 6 caracteres",
    ],
    displayName: [(value) => value.trim().length > 0, "El nombre es requerido"],
};

export const RegisterPage = () => {
    const dispatch = useDispatch();

    const [formSubmittes, setFormSubmittes] = useState(false);

    const { status, errorMessage } = useSelector((state) => state.auth);
    const isCheckingAuthentication = useMemo(
        () => status === "checking",
        [status]
    );

    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        isFormValid,
        emailValid,
        passwordValid,
        displayNameValid,
    } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmittes(true);

        if (!isFormValid) return;

        dispatch(startEmailAndPasswordRegister(formState));
    };

    return (
        <AuthLayout title="login">
            <form
                onSubmit={onSubmit}
                className="animate__animated animate__fadeIn animate__faster"
            >
                <Grid container spacing={2}>
                    <TextField
                        label="Nombre Completo"
                        type="text"
                        placeholder="Nombre Completo"
                        fullWidth
                        name="displayName"
                        value={displayName}
                        onChange={onInputChange}
                        error={!!displayNameValid && formSubmittes}
                        helperText={displayNameValid}
                    />

                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        error={!!emailValid && formSubmittes}
                        helperText={emailValid}
                    />

                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="password"
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        error={!!passwordValid && formSubmittes}
                        helperText={passwordValid}
                    />
                    <Grid container size={12}>
                        <Grid
                            size={{
                                xs: 12,
                            }}
                            display={!!errorMessage ? "" : "none"}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container size={12}>
                        <Grid size={{ xs: 12 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={isCheckingAuthentication}
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                        size={12}
                    >
                        <Typography sx={{ mr: 1 }}>
                            ¿Ya tienes cuenta?
                        </Typography>
                        <Link
                            color="inherit"
                            component={RouterLink}
                            to="/auth/login"
                        >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
