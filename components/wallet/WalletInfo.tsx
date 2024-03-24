import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { formatAddress } from "@/utils/formatAddres";
import { UiCard } from "../ui/UiCard";

function createData(name: string, content: React.ReactNode) {
  return { name, content };
}

export const WalletInfo = ({
  chain,
  balance,
  userAccount,
  selectedWallet,
}: WalletProvider) => {
  const rows = [
    createData(
      "Icon:",
      <img
        src={selectedWallet?.info.icon || ""}
        alt={selectedWallet?.info.name || ""}
      />
    ),
    createData("Name:", selectedWallet?.info.name),
    createData("UUID:", userAccount),
    createData("chainId:", chain),
    createData("balance:", balance),
  ];

  return (
    <UiCard
      title={(userAccount ? "" : "No ") + "Wallet Selected"}
      content={
        userAccount && (
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: "320px" }}>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell variant="head" component="th">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
      actions={
        <Button variant="contained" color="primary" startIcon={<LogoutIcon />}>
          Logout
        </Button>
      }
    />
  );
};
