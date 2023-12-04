import { FC } from "react";
import { IMyButtton } from "./MyButton.interface";

const MyButton:FC<IMyButtton> = ({variant}) => {
    return ( 
        <div className="button-wrapper">Hello</div>
     );
}
 
export default MyButton;