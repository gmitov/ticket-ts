export const returnStatusName = (ticketStatus: number) => {
  switch (ticketStatus) {
    case 1:
      return "Очаква приемане";

    case 2:
      return "Приет за изпълнение";

    case 3:
      return "Изпълнен - За одобрение";

    case 11:
      return "Приключен тикет";

    case 12:
      return "Прекратен тикет";

    case 13:
      return "Отказан за изпълнение";

    default:
      return "Не беше намерен статус на тикета.";
  }
};

// export const ExcelDateToJSDate = (serial) => {
//   var utc_days = Math.floor(serial - 25569);
//   var utc_value = utc_days * 86400;
//   var date_info = new Date(utc_value * 1000);

//   var fractional_day = serial - Math.floor(serial) + 0.0000001;

//   var total_seconds = Math.floor(86400 * fractional_day);

//   var seconds = total_seconds % 60;

//   total_seconds -= seconds;

//   var hours = Math.floor(total_seconds / (60 * 60));
//   var minutes = Math.floor(total_seconds / 60) % 60;

//   return new Date(
//     date_info.getFullYear(),
//     date_info.getMonth(),
//     date_info.getDate(),
//     hours,
//     minutes,
//     seconds
//   );
// };
