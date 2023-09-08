import { Grid } from "@mui/material";
import PaginationTickets from "../../../components/pagination/Pagination";

type ticketPaginationWrapperProps = {
  ticketsCount: number;
};

export const TicketPaginationWrapper: React.FC<
  ticketPaginationWrapperProps
> = ({ ticketsCount }) => {
  return (
    <>
      {ticketsCount > 0 ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "5vh" }}
        >
          <Grid item xs={12}>
            <PaginationTickets pagesCount={Math.ceil(ticketsCount / 10)} />
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};
