interface IUser {
  accToken: string;
  refreshToken: string;
  experesIn: string;
  nUser: number;
  userBULSTAT: string;
  userEmail: string;
  userFirstName: string;
  userSecondName: string;
  userLastName: string;
  userFirmName: string;
  userType: string;
  error: string;
}

interface IWorkerReport {
  helperTask: string;
  helperTaskEndDate: string;
  helperTaskStatus: number;
  helperTaskSumTime: string;
  nHelperName: string;
  nHelperRow: number;
}
