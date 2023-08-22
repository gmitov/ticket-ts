import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import styles from "./TicketData.module.css";

const TicketDataWorkers: React.FC<any> = ({ ticket }) => {
  if (ticket?.helpers.length > 0) {
    return (
      <Card
        sx={{ minWidth: 275, maxWidth: 800 }}
        className={styles["ticket-data-card"]}
      >
        <CardContent>
          <Typography variant="body2">хора работещи по задачата:</Typography>
        </CardContent>
      </Card>
    );
  } else {
    return <></>;
  }
};

export default TicketDataWorkers;
