import { Box, Typography, Modal, TextField, Button, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

// Estilo para centralizar o modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

interface AddTransactionModalProps {
    open: boolean;
    handleClose: () => void;
}

const AddTransactionModal = ({ open, handleClose }: AddTransactionModalProps) => {
    const [formData, setFormData] = useState({
        type_id: 1,
        amount: '',
        date: new Date().toISOString().split('T')[0],
        username: 'utilizador_teste'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        console.log("Enviando dados:", formData);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2" mb={3}>
                    Nova Despesa / Receita
                </Typography>

                <Stack spacing={3}>
                    <TextField
                        select
                        label="Tipo"
                        name="type_id"
                        value={formData.type_id}
                        onChange={handleChange}
                        fullWidth
                    >
                        {/*TODO: retrieve icons and list options from backend. Display on grid*/}
                        <MenuItem value={1}>Salário</MenuItem>
                        <MenuItem value={2}>Alimentação</MenuItem>
                        <MenuItem value={3}>Investimento</MenuItem>
                    </TextField>

                    <TextField
                        label="Valor"
                        name="amount"
                        type="number"
                        value={formData.amount}
                        onChange={handleChange}
                        fullWidth
                    />

                    <TextField
                        label="Data"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />

                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button onClick={handleClose} color="inherit">Cancelar</Button>
                        <Button onClick={handleSubmit} variant="contained" color="success">
                            Guardar
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    );
};

export default AddTransactionModal;