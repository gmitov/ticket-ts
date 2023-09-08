import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ResponsiveDialog from "../../../utils/ResponsiveDialog";

import { returnStatusName } from "../../../utils/utils";

import styles from "./TicketData.module.css";

type TicketDataHeaderProps = {
  ticket: ITicketData;
  ticketChangeHandler: (
    ticketKey: keyof ITicketData,
    statusValue: number
  ) => void;
};

const TicketDataHeader: React.FC<TicketDataHeaderProps> = ({
  ticket,
  ticketChangeHandler,
}) => {
  const acceptTicketHandler = () => {
    ticketChangeHandler("ticketStatus", 2);
  };

  const refuseTicketHandler = () => {
    ticketChangeHandler("ticketStatus", 13);
  };

  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 800 }}
      className={styles["ticket-data-card"]}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {ticket?.ticketTask}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {ticket?.contragent}
        </Typography>

        <Divider sx={{ mb: 1 }} />

        <Typography variant="body2">
          от дата: <strong>{ticket?.ticketBegDate}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          до дата: <strong>{ticket?.ticketEndDate}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          планирани часове: <strong>{ticket?.ticketPMSPlannedHours}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          дейност: <strong>{ticket?.ticketPMSTaskName}</strong>
        </Typography>
        <Divider />
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          търговец, отговорен за сделката:{" "}
          <strong>{ticket?.ticketPMSTrader}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          обект: <strong>{ticket?.ticketPMSObject}</strong>
        </Typography>
        <Typography variant="body2">
          лице за контакт на обекта:{" "}
          <strong>{ticket?.ticketPMSContactPerson}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          телефон на лицето за контакт:{" "}
          <strong>{ticket?.ticketPMSContactPhone}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          местоположение: <strong>{ticket?.ticketPMSPlaceLocation}</strong>
        </Typography>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-Maps-logo.png"
          height="50px"
          alt="google-map-icon"
        />
        <Divider sx={{ mb: 1 }} />

        <Typography variant="body2" sx={{ mb: 1.5 }}>
          отговорник: <strong>{ticket?.ticketTaskLeader}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          екип: <strong>{ticket?.ticketTeam}</strong>
        </Typography>

        <Divider sx={{ mb: 1 }} />

        <Typography variant="body2" sx={{ mb: 1 }}>
          статус: <strong>{returnStatusName(ticket?.ticketStatus)}</strong>
        </Typography>

        <Divider />
      </CardContent>
      {ticket?.ticketStatus! === 1 ? (
        <CardActions>
          <ResponsiveDialog
            openButtonText="Приеми"
            dialogTitle={""}
            dialogContent={"Потвърдете ПРИЕМАНЕТО на тикета."}
            cancelButtonText={"Не"}
            confirmButtonText={"Да"}
            color="success"
            handleConfirm={acceptTicketHandler}
          />

          <ResponsiveDialog
            openButtonText="Прекрати"
            dialogTitle={""}
            dialogContent={"Потвърдете ПРЕКРАТЯВАНЕТО на тикета."}
            cancelButtonText={"Не"}
            confirmButtonText={"Да"}
            color="error"
            handleConfirm={refuseTicketHandler}
          />
        </CardActions>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default TicketDataHeader;
