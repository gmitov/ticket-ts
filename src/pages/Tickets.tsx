import { useEffect, useState, memo } from "react";
import makeRequest from "../utils/makeRequest";
import { useSelector } from "react-redux";
import serverUrl from "../utils/config";
import TicketList from "../modules/tickets/components/TicketsList";
import TicketFilter from "../modules/tickets/components/TicketFilter";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PaginationTickets from "../components/pagination/Pagination";

type FilterType = {
  ticketFilter: IFilter;
};

type UserType = {
  user: IUser;
};

type ActivePageType = {
  ticketFilter: {
    activePage: number;
  };
};

const Tickets: React.FC = memo(() => {
  const [tickets, setTickets] = useState<ITicket[] | null>(null);
  const [ticketsCount, setTicketsCount] = useState<number>(0);

  const [loading, setLoading] = useState(true);

  const user = useSelector((state: UserType) => state.user);

  const ticketFilterValue = useSelector(
    (state: FilterType) => state.ticketFilter
  );

  const activaPage = useSelector(
    (state: ActivePageType) => state.ticketFilter.activePage
  );

  useEffect(() => {
    const requestData = {
      nUser: user.nUser,
      nPage: activaPage,
      nFilterType: ticketFilterValue.filterValue,
    };

    console.log("use effect");

    const fetchTickets = () => {
      setLoading(true);

      const response = makeRequest<ITicketList>({
        method: "POST",
        url: serverUrl + "/returnTickets",
        body: requestData,
      });

      console.log("fetch");

      return response;
    };

    fetchTickets().then((result) => {
      setTimeout(() => {
        setTickets(result.tickets);
        setTicketsCount(result.brTickets);

        setLoading(false);
      }, 1000);
    });
  }, [ticketFilterValue, activaPage]);

  console.log("tickets render");

  return (
    <>
      <TicketFilter></TicketFilter>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container>
          {tickets ? (
            tickets.length > 0 ? (
              <>
                <TicketList tickets={tickets} />

                {ticketsCount > 10 ? (
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "5vh" }}
                  >
                    <Grid item xs={12}>
                      <PaginationTickets
                        pagesCount={Math.ceil(ticketsCount / 10)}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <p>Няма намерени тикети от този вид.</p>
            )
          ) : (
            <p>Грешка при връзка със сървъра.</p>
          )}

          {/* {tickets?.length! > 0 ? (
            <TicketList tickets={tickets!} />
          ) : (
            <p>Няма намерени тикети от този вид.</p>
          )} */}
        </Grid>
      )}
    </>
  );
});

export default Tickets;
