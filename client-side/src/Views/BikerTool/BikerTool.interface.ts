import { FormEventHandler, MouseEventHandler } from "react";
import { IParcel, IParcelStatus } from "../../Utils/interfaces";

export interface IUpdateParcelForm {
    mode:string;
    handleSubmit:Function;
    validated:boolean;
    addedItem:IParcel;
    handleInputChange:Function;
    statusesList:IParcelStatus[];
    resetHandler:MouseEventHandler<HTMLButtonElement>;
}
export interface IParcelTable {
    parcels:IParcel[];
    userName:string;
    updateClickHandler:Function;
}