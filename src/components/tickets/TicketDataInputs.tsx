import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";

import styles from "./TicketData.module.css";

const TicketDataInputs: React.FC<any> = ({ ticket }) => {
  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 800 }}
      className={styles["ticket-data-card"]}
    >
      <CardActions>
        {ticket?.ticketStartWorkDate === "" ? (
          <Button variant="contained">Започни работа</Button>
        ) : (
          <Button variant="contained" color="error">
            Приключи работа
          </Button>
        )}
      </CardActions>
      <CardContent></CardContent>
    </Card>
  );
};

export default TicketDataInputs;
