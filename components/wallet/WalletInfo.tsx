import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import { formatAddress } from "@/utils/formatAddres";
import { UiCard } from "../ui/UiCard";

function createData(name: string, content: React.ReactNode) {
  return { name, content };
}

export const WalletInfo = ({ userAccount, selectedWallet }: WalletProvider) => {
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
    />
  );
};
