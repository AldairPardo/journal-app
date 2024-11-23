import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
    Button,
    Grid2 as Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
    return (
        <AuthLayout title="login">
            <form>
                <Grid container spacing={2}>
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                        fullWidth
                        // id="email"
                        // name="email"
                        // variant="outlined"
                        // autoComplete="off"
                    />

                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="password"
                        fullWidth
                        // id="password"
                        // name="password"
                        // variant="outlined"
                        // autoComplete="off"
                    />

                    <Grid container size={12} spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Button fullWidth variant="contained">
                                Login
                            </Button>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Button fullWidth variant="contained">
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
