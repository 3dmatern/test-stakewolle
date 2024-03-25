import { Button, FormControl, TextField, Typography } from "@mui/material";

export const WalletForm = ({
  toAccount,
  onChangeAccount,
  sendTransaction,
}: WalletFormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTransaction();
      }}
    >
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
        <Typography variant="body1" fontWeight="700">
          Send 0.01 ETH
        </Typography>
        <TextField
          sx={{ width: "100%" }}
          id="standard-basic"
          label="Enter recipient's address"
          variant="standard"
          value={toAccount}
          onChange={(e) => onChangeAccount(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Send Transaction
        </Button>
      </FormControl>
    </form>
  );
};
