import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

export const UiCard = ({
  sx,
  title,
  content,
  actions,
}: {
  sx?: object;
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}) => {
  return (
    <Card sx={{ borderRadius: "20px", ...sx }}>
      <CardHeader title={title} sx={{ textAlign: "center" }} />
      <CardContent>{content}</CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};