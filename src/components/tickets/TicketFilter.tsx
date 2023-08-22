import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";

import styles from "./TicketFilter.module.css";

interface FilterHandler {
  filterValueHandler: (newFilterValue: number) => void;
}

const TicketFilter: React.FC<FilterHandler> = ({ filterValueHandler }) => {
  const handleFilterChange = (event: SelectChangeEvent<number>) => {
    const selectedValue = event.target.value as number;
    filterValueHandler(selectedValue);
  };

  return (
    <Card sx={{ minWidth: 275 }} className={styles["filter-wrapper"]}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Тип</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Тип"
                defaultValue={1}
                onChange={handleFilterChange}
              >
                <MenuItem value={1}>Очаква приемане</MenuItem>
                <MenuItem value={2}>Приет за изпълнение</MenuItem>
                <MenuItem value={3}>Изпълнен - За одобрение</MenuItem>
                <MenuItem value={11}>Приключени тикети</MenuItem>
                <MenuItem value={12}>Прекратени / Отказани</MenuItem>
                <MenuItem value={99}>Всички</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketFilter;
