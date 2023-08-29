import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResponsiveDialog from "../../helpers/ResponsiveDialog";

import { returnStatusName } from "../../helpers/utils";
import { showToast } from "../../helpers/showToast";

import styles from "./TicketData.module.css";
import ticketStyle from "./Ticket.module.css";
import stylesInputs from "./TicketDataInputs.module.css";

type TicketDataWorkerProps = {
  ticket: IWorkerReport[];
};

const TicketDataWorkers: React.FC<TicketDataWorkerProps> = ({ ticket }) => {
  const [workersReports, setWorkersReports] = useState<IWorkerReport[]>(ticket);

  const changeHelperStatusHandler = (
    workerIndex: number,
    newStatus: number
  ) => {
    const newState = workersReports.map((rep: IWorkerReport) => {
      if (rep.nHelperRow === workerIndex) {
        return { ...rep, helperTaskStatus: newStatus };
      }

      return rep;
    });

    showToast("success", "Успешно сменен статус!");

    setWorkersReports(newState);
  };

  if (ticket.length > 0) {
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
              <Typography>Извършена работа от служители</Typography>
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
                      {[1, 2, 3].includes(workerReport.helperTaskStatus) ? (
                        <ResponsiveDialog
                          openButtonText="Прекрати"
                          dialogTitle={""}
                          dialogContent={"Потвърдете ПРЕКРАТЯВАНЕТО на тикета."}
                          cancelButtonText={"Не"}
                          confirmButtonText={"Да"}
                          color="error"
                          handleConfirm={() => {
                            changeHelperStatusHandler(
                              workerReport.nHelperRow,
                              12
                            );
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {workerReport.helperTaskStatus === 3 ? (
                        <ResponsiveDialog
                          openButtonText="Приеми"
                          dialogTitle={""}
                          dialogContent={"Потвърдете ПРИЕМАНЕТО на тикета."}
                          cancelButtonText={"Не"}
                          confirmButtonText={"Да"}
                          color="success"
                          handleConfirm={() => {
                            changeHelperStatusHandler(
                              workerReport.nHelperRow,
                              11
                            );
                          }}
                        />
                      ) : (
                        <></>
                      )}
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
