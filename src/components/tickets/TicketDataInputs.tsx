import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import styles from "./TicketData.module.css";
import stylesInputs from "./TicketDataInputs.module.css";

const TicketDataInputs: React.FC<any> = ({ ticket, ticketChangeHandler }) => {
  console.log(ticket);

  const addWorkHandler = () => {
    let newId;
    if (ticket.otcheti.length === 0) {
      newId = 1;
    } else {
      newId = parseInt(ticket.otcheti[ticket.otcheti.length - 1].otchetID);
      newId++;
    }

    ticketChangeHandler("otcheti", {
      otchetCharacter: 0,
      otchetDate: "21.08.2023 11:03",
      otchetID: newId.toString(),
      otchetText: "приел съм задачата, създал съм си екипа",
      otchetTime: "1ч. ",
    });
  };

  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 800 }}
      className={styles["ticket-data-card"]}
    >
      <CardContent>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Извършена работа до момента</Typography>
          </AccordionSummary>
          <AccordionDetails className={stylesInputs["accordion"]}>
            {ticket.otcheti.length > 0 ? (
              ticket.otcheti.map((otchet: IReport) => (
                <Card key={otchet.otchetID} sx={{ mb: 1 }}>
                  <CardContent>
                    <Typography>{otchet.otchetText}</Typography>
                    <Typography>
                      <strong>{otchet.otchetDate}</strong>
                    </Typography>

                    {otchet.otchetTime !== "0 мин." ? (
                      <Typography>
                        работено време: <strong>{otchet.otchetTime}</strong>
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography>Няма отчетена работа към момента.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      </CardContent>
      <Divider />
      <CardActions>
        {ticket?.ticketStartWorkDate === "" ? (
          <Button variant="contained" onClick={addWorkHandler}>
            Започни работа
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={addWorkHandler}>
            Приключи работа
          </Button>
        )}
      </CardActions>
      <Divider />
    </Card>
  );
};

export default TicketDataInputs;
