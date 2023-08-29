import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import makeRequest from "../../helpers/makeRequest";
import serverUrl from "../../helpers/config";

import { Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

type UserType = {
  user: IUser;
};

const TicketChart: React.FC = () => {
  const user = useSelector((state: UserType) => state.user);

  const ticketBorderColor = ["rgb(173, 202, 214)"];

  const [data, setData] = useState<any>({
    labels: ["Тикети"],
    datasets: [
      {
        label: "Очаква приемане",
        data: [0],
        backgroundColor: ["#dae5e8"],
        borderColor: ticketBorderColor,
        borderWidth: 1,
      },
      {
        label: "Приет за изпълнение",
        data: [0],
        backgroundColor: ["#fff2b3"],
        borderColor: ticketBorderColor,
        borderWidth: 1,
      },
      {
        label: "Изпълнен - За одобрение",
        data: [0],
        backgroundColor: ["#cbf2c0"],
        borderColor: ticketBorderColor,
        borderWidth: 1,
      },
      {
        label: "Приключени тикети",
        data: [0],
        backgroundColor: ["#98e5c7"],
        borderColor: ticketBorderColor,
        borderWidth: 1,
      },
      {
        label: "Прекратени",
        data: [0],
        backgroundColor: ["#ffc7c7"],
        borderColor: ticketBorderColor,
        borderWidth: 1,
      },
      {
        label: "Отказани",
        data: [0],
        backgroundColor: ["#ffc7c7"],
        borderColor: ticketBorderColor,
        borderWidth: 1,
      },
    ],
  });

  const options: any = {
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  useEffect(() => {
    const requestData = {
      nUser: user.nUser,
      nPage: 1,
      nFilterType: 99,
    };

    const fetchTickets = () => {
      const response = makeRequest<ITicketList>({
        method: "POST",
        url: serverUrl + "/returnTickets",
        body: requestData,
      });

      return response;
    };

    fetchTickets().then((result) => {
      let awaitingAcceptTicketCount = 0;
      let acceptedTicketCount = 0;
      let completedForRevisionTicketCount = 0;
      let completedTicketCount = 0;
      let terminatedTicketCount = 0;
      let refusedTicketCount = 0;

      result.tickets.forEach((ticket) => {
        switch (ticket.ticketStatus) {
          case 1: // Очаква приемане
            awaitingAcceptTicketCount++;
            break;

          case 2: // Приет за изпълнение
            acceptedTicketCount++;
            break;

          case 3: // Изпълнен - За одобрение
            completedForRevisionTicketCount++;
            break;

          case 11: // Приключен тикет
            completedTicketCount++;
            break;

          case 12: // Прекратен тикет
            terminatedTicketCount++;
            break;

          case 13: // Отказан за изпълнение
            refusedTicketCount++;
            break;

          default:
            break;
        }
      });

      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: [awaitingAcceptTicketCount],
          },
          {
            ...data.datasets[1],
            data: [acceptedTicketCount],
          },
          {
            ...data.datasets[2],
            data: [completedForRevisionTicketCount],
          },
          {
            ...data.datasets[3],
            data: [completedTicketCount],
          },
          {
            ...data.datasets[4],
            data: [terminatedTicketCount],
          },
          {
            ...data.datasets[5],
            data: [refusedTicketCount],
          },
        ],
      });
    });
  }, []);

  return <Bar data={data} options={options} />;
};

export default TicketChart;
