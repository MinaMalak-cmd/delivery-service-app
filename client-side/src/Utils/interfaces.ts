export interface IUser {
    _id: string;
    userName: string;
    role?: "user" | "biker";
}
export type IParcelStatus = "picked" | "pending" | "delivered"
export interface IParcel {
  _id: string;
  createdBy: IUser;
  parcelName: string;
  pickupAddress: string;
  dropOffAddress: string;
  parcelStatus: IParcelStatus;
  createdAt: Date;
  updatedAt: Date;
  deliveredBy?: IUser;
  dropOffTime?: string;
  pickupTime?: string;
}

