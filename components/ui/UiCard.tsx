import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

export const UiCard = ({
  sx,
  title,
  content,
  actions,
}: {
  sx?: object;
  title?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}) => {
  return (
    <Card sx={{ py: "20px", borderRadius: "20px", ...sx }}>
      <CardHeader title={title} sx={{ textAlign: "center" }} />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {content}
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {actions}
      </CardActions>
    </Card>
  );
};
