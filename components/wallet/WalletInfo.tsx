import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { UiCard } from "../ui/UiCard";

function createData(name: string, content: React.ReactNode) {
  return { name, content };
}

export const WalletInfo = ({
  address,
  balanceETH,
  balanceBNB,
  chainId,
  numChainId,
}: WalletInfoProps) => {
  const rows = [
    createData("address:", address),
    createData("balance ETH:", balanceETH),
    createData("balance BNB:", balanceBNB),
    createData("chainId:", chainId),
    createData("numChainId:", numChainId),
  ];

  return (
    <UiCard
      title="Wallet Selected"
      content={
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "320px" }}>
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
    />
  );
};
