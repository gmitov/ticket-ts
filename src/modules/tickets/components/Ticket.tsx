import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";

import styles from "./Ticket.module.css";
import { Link } from "react-router-dom";

import { returnStatusName } from "../../../utils/utils";

interface TicketProps {
  ticket: ITicket;
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  let styleTicketType = "";

  switch (ticket.ticketStatus) {
    case 1: // Очаква приемане
      styleTicketType = styles["ticket-await-accept"];
      break;

    case 2: // Приет за изпълнение
      styleTicketType = styles["ticket-active"];
      break;

    case 3: // Изпълнен - За одобрение
      styleTicketType = styles["ticket-revision"];
      break;

    case 11: // Приключен тикет
      styleTicketType = styles["ticket-finished"];
      break;

    case 12: // Прекратен тикет
      styleTicketType = styles["ticket-terminated"];
      break;

    case 13: // Отказан за изпълнение
      styleTicketType = styles["ticket-terminated"];
      break;

    default:
      break;
  }

  return (
    <Grid container md={6} xs={12} item={true}>
      <Card
        sx={{ minWidth: 275, maxWidth: 1200 }}
        className={`${styles.ticket} ${styleTicketType}`}
      >
        <CardContent
          className={`${styleTicketType} ${styles["ticket-header"]}`}
        >
          <Typography variant="h5" component="div">
            {ticket.ticketTask}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {ticket.contragent}
          </Typography>
          <Typography>
            статус: <strong>{returnStatusName(ticket.ticketStatus)}</strong>
          </Typography>
          <Typography variant="body2">
            от дата: {ticket.ticketBegDate}
          </Typography>

          {ticket.ticketEndDate ? (
            <Typography variant="body2">
              краен срок: {ticket.ticketEndDate}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions>
          <Link to={"/ticket/" + ticket.cobjTicket}>
            <Button size="small">Подробно</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Ticket;
