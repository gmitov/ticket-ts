import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";

import styles from "./TicketData.module.css";
import ResponsiveDialog from "../../../utils/ResponsiveDialog";

type TicketDataControlsProps = {
  ticket: ITicketData;
  ticketChangeHandler: (
    ticketKey: keyof ITicketData,
    statusValue: number
  ) => void;
};

const TicketDataControls: React.FC<TicketDataControlsProps> = ({
  ticket,
  ticketChangeHandler,
}) => {
  const finishTicketHandler = () => {
    if (ticket.ticketLevel > 1) {
      ticketChangeHandler("ticketStatus", 3);
    } else {
      ticketChangeHandler("ticketStatus", 11);
    }
  };

  const cancelTicketHandler = () => {
    ticketChangeHandler("ticketStatus", 13);
  };

  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 800 }}
      className={styles["ticket-data-card"]}
    >
      <CardActions>
        <ResponsiveDialog
          openButtonText="Приключи тикета"
          dialogTitle={""}
          dialogContent={"Потвърдете ПРИКЛЮЧВАНЕТО на тикета."}
          cancelButtonText={"Не"}
          confirmButtonText={"Да"}
          color="success"
          handleConfirm={finishTicketHandler}
        />

        <ResponsiveDialog
          openButtonText="Откажи тикета"
          dialogTitle={""}
          dialogContent={"Потвърдете ОТКАЗА на тикета."}
          cancelButtonText={"Не"}
          confirmButtonText={"Да"}
          color="error"
          handleConfirm={cancelTicketHandler}
        />
      </CardActions>
    </Card>
  );
};

export default TicketDataControls;
