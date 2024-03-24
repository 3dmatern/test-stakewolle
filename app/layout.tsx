import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

import theme from "@/theme";
import { MetaMaskContextProvider } from "@/hooks/useMetaMask";

export const dynamic = "force-dynamic";

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
    <html lang="ru">
      <body style={{ backgroundColor: "#ced0f4" }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Container
              maxWidth="lg"
              sx={{
                minWidth: "360px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CssBaseline />
              <MetaMaskContextProvider>{children}</MetaMaskContextProvider>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
