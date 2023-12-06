import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../Utils/interfaces";

export type IAuthSlice = {
  accessToken: string;
  userDetails: IUser;
  isAuthenticated: boolean;
}

const initialAuthSlice:IAuthSlice = {
  accessToken: '',
  userDetails: {} as IUser,
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthSlice,
  reducers: {
    setCredentials: (
      state: any,
      { payload: {userDetails, accessToken,  isAuthenticated} }: PayloadAction<IAuthSlice>
    ) => {
      state.userDetails = userDetails;
      state.accessToken = accessToken;
      state.isAuthenticated = isAuthenticated;
    },
  },
});

export const { setCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
