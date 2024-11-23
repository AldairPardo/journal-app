import { Link as RouterLink } from "react-router-dom";
import {
    Button,
    Grid2 as Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
    displayName: "Aldair Pardo",
    email: "aldair@mail.com",
    password: "123456",
};
export const RegisterPage = () => {

    const { displayName, email, password, onInputChange } = useForm();

    return (
        <AuthLayout title="login">
            <form>
                <Grid container spacing={2}>
                    <TextField
                        label="Nombre Completo"
                        type="email"
                        placeholder="Nombre Completo"
                        fullWidth
                    />

                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                        fullWidth
                    />

                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="password"
                        fullWidth
                    />

                    <Grid container size={12}>
                        <Grid size={{ xs: 12 }}>
                            <Button fullWidth variant="contained">
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
