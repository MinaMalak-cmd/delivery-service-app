export interface IUser {
    _id: string;
    userName: string;
    role?: "user" | "biker";
}

export interface IParcel {
  _id: string;
  createdBy: IUser;
  parcelName: string;
  pickupAddress: string;
  dropOffAddress: string;
  parcelStatus: "picked" | "pending" | "delivered";
  createdAt: Date;
  updatedAt: Date;
  deliveredBy?: IUser;
  dropOffTime?: string;
  pickupTime?: string;
}

// _id:string,
//   parcelName:string,
//   pickupAddress: string,
//   dropOffAddress: string,
//   parcelStatus: "picked" | "pending" | "delivered",
//   deliveredBy?: IUser,
//   dropOffTime?: string,
//   pickupTime?: string,