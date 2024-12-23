import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import {
    Button,
    Grid2 as Grid,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import {
    setActiveNote,
    startDeletingNote,
    startSaveNote,
    startUploadingImage,
} from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
    const dispatch = useDispatch();

    const {
        active: note,
        messageSaved,
        isSaving,
    } = useSelector((state) => state.journal);

    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    });

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire({
                title: "Nota actualizada",
                text: messageSaved,
                icon: "success",
            });
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    const onFileInputChange = ({ target }) => {
        const files = target.files;
        if (files.length === 0) return;

        dispatch(startUploadingImage(files));
    };

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <>
            <Grid
                className="animate__animated animate__fadeIn animate__faster"
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
            >
                <Grid>
                    <Typography fontSize={39} fontWeight="light">
                        {dateString}
                    </Typography>
                </Grid>

                <input
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    type="file"
                    multiple
                    style={{ display: "none" }}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Grid>
                    <Button
                        disabled={isSaving}
                        onClick={onSaveNote}
                        color="primary"
                        sx={{ padding: 2 }}
                    >
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: "none", mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />

                <Grid container justifyContent='end'>
                    <Button
                        onClick={onDelete}
                        color="error"
                        sx={{ mt: 2 }}
                    >
                        <DeleteOutline />
                        Borrar
                    </Button>
                </Grid>

                {/* Image gallery */}
                <ImageGallery
                    images={note.imageUrls}
                 />
            </Grid>
        </>
    );
};
