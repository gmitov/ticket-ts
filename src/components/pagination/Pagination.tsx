import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setActivePage } from "../../features/ticketsSlice";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";

type PaginationProps = {
  pagesCount: number;
};

const PaginationTickets: React.FC<PaginationProps> = ({ pagesCount }) => {
  const dispatch = useAppDispatch();

  const activaPage = useSelector(
    (state: ActivePageType) => state.ticketFilter.activePage
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    console.log(value);
    dispatch(setActivePage(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pagesCount}
        color="primary"
        page={activaPage}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationTickets;
