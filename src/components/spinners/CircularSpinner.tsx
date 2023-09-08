import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const CircularSpinner: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <CircularProgress />
    </Box>
  );
};
