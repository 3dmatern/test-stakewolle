import { Box, Button, Stack, Typography } from "@mui/material";
import { UiCard } from "./ui/UiCard";

export const DiscoverWalletProviders = ({
  providers,
  onConnect,
}: Readonly<WalletProviderDiscover>) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <UiCard
        title="Wallets Detected:"
        content={
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {providers?.length > 0 ? (
              providers.map((provider: EIP6963ProviderDetail) => (
                <Button
                  key={provider.info.uuid}
                  variant="contained"
                  startIcon={
                    <img src={provider.info.icon} alt={provider.info.name} />
                  }
                  onClick={() => onConnect(provider)}
                >
                  <Typography variant="body1">{provider.info.name}</Typography>
                </Button>
              ))
            ) : (
              <Typography variant="body1">
                There are no announced providers.
              </Typography>
            )}
          </Stack>
        }
      />
    </Box>
  );
};
