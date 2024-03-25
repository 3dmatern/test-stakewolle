import { Button, FormControl, TextField } from "@mui/material";

export const WalletForm = () => {
  return (
    <FormControl
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "20px 30px",
        backgroundColor: "#fff",
        borderRadius: "20px",
      }}
    >
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Введите адрес получателя"
        variant="standard"
      />
      <Button variant="contained">Send Transaction</Button>
    </FormControl>
  );
};
