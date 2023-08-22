import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeRequest from "../helpers/makeRequest";
import serverUrl from "../helpers/config";

const initialUserState: IUser = {
  accToken: "",
  refreshToken: "",
  experesIn: "",
  nUser: 0,
  userBULSTAT: "",
  userEmail: "",
  userFirstName: "",
  userSecondName: "",
  userLastName: "",
  userFirmName: "",
  userType: "",
  error: "",
};

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ userName, password }: { userName: string; password: string }) => {
    const response = await makeRequest<IUser>({
      method: "POST",
      url: serverUrl + "/account/login",
      auth: {
        username: userName,
        password: password,
      },
    });

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

      if (!data.error) {
        // user is authenticated
        state.nUser = data.nUser;
        state.userBULSTAT = data.userBULSTAT;
        state.userEmail = data.userEmail;
        state.userFirstName = data.userFirstName;
        state.userSecondName = data.userSecondName;
        state.userLastName = data.userLastName;
        state.userFirmName = data.userFirmName;
        state.userType = data.userType;

        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("accToken", data.accToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("expTime", data.experesIn);
      } else {
        // wrong credentials
        // localStorage.setItem("isAuthenticated", "false");
      }
    });
  },
});

export default userSlice.reducer;
