import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

import theme from "@/theme";
import WalletProvider from "@/context/WalletContext";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Test Stakewolle",
  description: "Тестовое задание Stakewolle",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="ru" style={{ height: "100%" }}>
      <body style={{ height: "100%", backgroundColor: "#ced0f4" }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Container
              maxWidth="lg"
              sx={{
                minWidth: "360px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CssBaseline />
              <WalletProvider>{children}</WalletProvider>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
