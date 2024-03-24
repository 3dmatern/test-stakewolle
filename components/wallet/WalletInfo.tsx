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
import NextLink from "next/link";

import { UiCard } from "../ui/UiCard";

function createData(name: string, content: React.ReactNode) {
  return { name, content };
}

export const WalletInfo = ({
  address,
  balanceETH,
  chainId,
  numChainId,
}: WalletInfoProps) => {
  const rows = [
    createData("address:", address),
    createData("balance:", balanceETH + " ETH"),
    createData("chainId:", chainId),
    createData("numChainId:", numChainId),
  ];

  return (
    <UiCard
      title="Wallet Selected"
      content={
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
      }
      actions={
        <Button
          href="/"
          LinkComponent={NextLink}
          variant="contained"
          color="primary"
          startIcon={<LogoutIcon />}
        >
          Back to Home page
        </Button>
      }
    />
  );
};
