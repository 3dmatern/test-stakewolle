"use client";

import NextLink from "next/link";

import { DiscoverWalletProviders } from "@/components/DiscoverWalletProviders";
import { Box, Container, Link } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minWidth: "360px",
      }}
    >
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DiscoverWalletProviders />
        <Link href="/" color="secondary" component={NextLink}>
          Go to the home page
        </Link>
      </Box>
    </Container>
  );
}
