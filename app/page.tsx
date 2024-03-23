import { Box, Container, Link, Typography } from "@mui/material";
import NextLink from "next/link";

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
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Link href="/" color="secondary" component={NextLink}>
          Go to the home page
        </Link>
      </Box>
    </Container>
  );
}
