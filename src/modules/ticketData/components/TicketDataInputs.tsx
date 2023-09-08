import { useRef, useState } from "react";

import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

import ResponsiveDialog from "../../../utils/ResponsiveDialog";
import { showToast } from "../../../utils/showToast";
import { SelectChangeEvent } from "@mui/material";
import {
  ExcelDateToJSDate,
  formatDateTime,
  getCurrentDateTime,
} from "../../../utils/utils";

import styles from "./TicketData.module.css";
import stylesInputs from "./TicketDataInputs.module.css";
import ticketStyle from "./Ticket.module.css";

type TicketDataInputsProps = {
  ticket: ITicketData;
};

const TicketDataInputs: React.FC<TicketDataInputsProps> = ({ ticket }) => {
  const [reports, setReports] = useState<IReport[]>(ticket.otcheti);

  const [reportTypeInpt, setReportType] = useState<number>(0);
  const [ticketStartDateTime, setTicketStartDateTime] = useState(
    ExcelDateToJSDate(ticket.ticketStartWorkDate)
  );

  const [hasWorkStarted, setHasWorkStarted] = useState(
    ticket?.ticketStartWorkDate === ""
  );

  const inputReportRef = useRef<HTMLTextAreaElement>();

  const updateReportsHandler = (newReport: IReport) => {
    setReports([...reports, newReport]);
  };

  const handleFilterChange = (event: SelectChangeEvent<number>) => {
    const selectedValue = event.target.value as number;
    setReportType(selectedValue);
  };

  const addWorkHandler = (reportType: string) => {
    let newId;
    if (reports.length === 0) {
      newId = 1;
    } else {
      newId = parseInt(reports[reports.length - 1].otchetID);
      newId++;
    }

    let otchetCharacter = 0;
    let otchetText = "";

    switch (reportType) {
      case "START_WORK":
        setHasWorkStarted(!hasWorkStarted);
        otchetText = "Започната работа";
        otchetCharacter = 3;
        setTicketStartDateTime(getCurrentDateTime());

        showToast("success", "Успешно започната работа.");

        break;

      case "FINISH_WORK":
        setHasWorkStarted(!hasWorkStarted);
        otchetText = "Приключена работа";
        otchetCharacter = 4;
        setTicketStartDateTime(null);

        showToast("success", "Успешно приключена работа.");

        break;

      case "ADD_REPORT":
        otchetText = inputReportRef!.current!.value;

        if (otchetText === "") {
          showToast("error", "Полето ОТЧЕТ трябва да бъде попълнено!");
          return;
        }

        showToast("success", "Отчета е записан успешно.");
        otchetCharacter = reportTypeInpt;

        inputReportRef!.current!.value = "";
        break;

      default:
        break;
    }

    //-------
    let today = getCurrentDateTime();
    const todayString = formatDateTime(today);

    let timeDifferenceInMinutes;
    if (ticketStartDateTime) {
      const timeDifferenceInMilliseconds =
        today.getTime() - ticketStartDateTime.getTime();

      timeDifferenceInMinutes = Math.floor(
        timeDifferenceInMilliseconds / (1000 * 60)
      );

      if (timeDifferenceInMinutes > 480) {
        timeDifferenceInMinutes = 480;
      }
    } else {
      timeDifferenceInMinutes = 0;
    }
    //-------

    updateReportsHandler({
      otchetCharacter: otchetCharacter,
      otchetDate: todayString,
      otchetID: newId.toString(),
      otchetText: otchetText,
      otchetTime: timeDifferenceInMinutes.toString(),
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
            {reports.length > 0 ? (
              reports.map((otchet: IReport) => (
                <Card key={otchet.otchetID} sx={{ mb: 1 }}>
                  <CardContent
                    className={
                      otchet.otchetCharacter === 4
                        ? ticketStyle["ticket-finished"]
                        : ""
                    }
                  >
                    <Typography>{otchet.otchetText}</Typography>
                    <Typography>
                      <strong>{otchet.otchetDate}</strong>
                    </Typography>

                    {!["0 мин.", "0"].includes(otchet.otchetTime) ? (
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
        {hasWorkStarted ? (
          <ResponsiveDialog
            openButtonText="Започни работа"
            dialogTitle={""}
            dialogContent={"Потвърдете ЗАПОЧВАНЕТО на работа."}
            cancelButtonText={"Откажи"}
            confirmButtonText={"Започни"}
            handleConfirm={() => {
              addWorkHandler("START_WORK");
            }}
          />
        ) : (
          <ResponsiveDialog
            openButtonText="Приключи работа"
            dialogTitle={""}
            dialogContent={"Потвърдете ПРИКЛЮЧВАНЕТО на работа."}
            cancelButtonText={"Откажи"}
            confirmButtonText={"Приключи"}
            handleConfirm={() => {
              addWorkHandler("FINISH_WORK");
            }}
          />
        )}
      </CardActions>
      <Divider />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <TextField
              id="outlined-multiline-static"
              label="Отчет"
              multiline
              rows={4}
              inputRef={inputReportRef}
              className={stylesInputs["memo"]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Тип</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Тип"
                defaultValue={0}
                onChange={handleFilterChange}
              >
                <MenuItem value={0}>Описание</MenuItem>
                <MenuItem value={1}>Важно</MenuItem>
                <MenuItem value={2}>Опит</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={12}>
            <ResponsiveDialog
              openButtonText="Запиши"
              dialogTitle={""}
              dialogContent={"Потвърдете записа на отчета."}
              cancelButtonText={"Откажи"}
              confirmButtonText={"Запиши"}
              handleConfirm={() => {
                addWorkHandler("ADD_REPORT");
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TicketDataInputs;
