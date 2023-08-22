import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import styles from "./TicketData.module.css";

const TicketDataControls: React.FC = () => {
  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 800 }}
      className={styles["ticket-data-card"]}
    >
      <CardActions>
        <Button variant="contained">Приключи тикета</Button>

        <Button variant="contained" color="error">
          Откажи тикета
        </Button>
      </CardActions>
    </Card>
  );
};

export default TicketDataControls;
