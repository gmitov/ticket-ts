import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./TicketData.module.css";
import stylesInputs from "./TicketDataInputs.module.css";
import ResponsiveDialog from "../../helpers/ResponsiveDialog";

import { showToast } from "../../helpers/showToast";

import ticketStyle from "./Ticket.module.css";
import { returnStatusName } from "../../helpers/utils";

const TicketDataWorkers: React.FC<any> = ({ ticket }) => {
  const [workersReports, setWorkersReports] = useState(ticket.helpers);
  console.log(workersReports);

  if (ticket?.helpers.length > 0) {
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
              {workersReports.length > 0 ? (
                workersReports.map((workerReport: IWorkerReport) => (
                  <Card key={workerReport.nHelperRow} sx={{ mb: 1 }}>
                    <CardContent
                      className={
                        workerReport.helperTaskStatus === 4
                          ? ticketStyle["ticket-finished"]
                          : ""
                      }
                    >
                      <Typography>{workerReport.nHelperName}</Typography>
                      <Typography>{workerReport.helperTask}</Typography>
                      <Typography>{workerReport.helperTaskEndDate}</Typography>
                      <Typography>
                        {returnStatusName(workerReport.helperTaskStatus)}
                      </Typography>

                      {workerReport.helperTaskSumTime !== "0 мин." ? (
                        <Typography>
                          работено време:
                          <strong>{workerReport.helperTaskSumTime}</strong>
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </CardContent>
                    <CardActions>
                      {/* <ResponsiveDialog
                        openButtonText="Откажи тикета"
                        dialogTitle={""}
                        dialogContent={"Потвърдете ОТКАЗА на тикета."}
                        cancelButtonText={"Не"}
                        confirmButtonText={"Да"}
                        color="error"
                      /> */}
                    </CardActions>
                  </Card>
                ))
              ) : (
                <Typography>Няма назначени служители.</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    );
  } else {
    return <></>;
  }
};

export default TicketDataWorkers;
