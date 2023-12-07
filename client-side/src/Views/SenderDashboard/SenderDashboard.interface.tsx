import { MouseEventHandler } from "react";
import { IParcel } from "../../Utils/interfaces";

export interface IAddParcelFormParcelForm {
    validated:boolean;
    addParcel:Function;
    addedItem:IAddedParcel;
    handleInputChange:Function;
    mode:string;
    resetHandler:MouseEventHandler<HTMLButtonElement>;
}
export interface IParcelTable {
    parcels:IParcel[];
}

export interface IAddedParcel {
    parcelName:string;
    pickupAddress:string;
    dropOffAddress:string;
}