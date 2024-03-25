import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export const SwitchNetwork = ({
  chainId,
  switchNetwork,
}: SwitchNetworkProps) => {
  return (
    <FormGroup
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "5px",
        padding: "20px 30px",
        backgroundColor: "#fff",
        borderRadius: "20px",
      }}
    >
      <FormControlLabel
        control={
          <Switch
            value="0x1"
            checked={chainId === "0x1"}
            onChange={({ target }) => switchNetwork(target.value)}
          />
        }
        label="Mainnet"
      />
      <FormControlLabel
        control={
          <Switch
            value="0xaa36a7"
            checked={chainId === "0xaa36a7"}
            onChange={({ target }) => switchNetwork(target.value)}
          />
        }
        label="Testnet Linea Sepolia"
      />
      <FormControlLabel
        control={
          <Switch
            value="0x539"
            checked={chainId === "0x539"}
            onChange={({ target }) => switchNetwork(target.value)}
          />
        }
        label="Testnet Localhost Hardhat"
      />
    </FormGroup>
  );
};
