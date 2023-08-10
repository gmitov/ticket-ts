import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeRequest from "../helpers/makeRequest";

const initialUserState: IUser = {
  accToken: "",
  refreshToken: "",
  experesIn: 0,
  nUser: 0,
  userBULSTAT: "",
  userEmail: "",
  userFirstName: "",
  userSecondName: "",
  userLastName: "",
  userFirmName: "",
  userType: "",
};

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ userName, password }: { userName: string; password: string }) => {
    const response = await makeRequest<IUser>({
      method: "POST",
      url: "http://82.118.229.216:46887/account/login",
      auth: {
        username: userName,
        password: password,
      },
    });

    // console.log(response);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const data = action.payload;

      //   console.log(data);

      if (data.userType !== "") {
        // user is authenticated
        state.accToken = data.accToken;
        state.refreshToken = data.refreshToken;
        state.experesIn = data.experesIn;
        state.nUser = data.nUser;
        state.userBULSTAT = data.userBULSTAT;
        state.userEmail = data.userEmail;
        state.userFirstName = data.userFirstName;
        state.userSecondName = data.userSecondName;
        state.userLastName = data.userLastName;
        state.userFirmName = data.userFirmName;
        state.userType = data.userType;
        localStorage.setItem("isAuthenticated", "true");
      } else {
        // wrong credentials
        localStorage.setItem("isAuthenticated", "false");
      }
    });
  },
});

export default userSlice.reducer;
