import { FC } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { IToastComponent } from "./ToastComponent.interface";

const ToastComponent:FC<IToastComponent> = ({variant="warning", showToast, onCloseHandler, responseMessage}) => {
    return ( 
        <div className="row">
          <ToastContainer className="bottom-end">
            <Toast
              onClose={() => onCloseHandler()}
              show={showToast}
              delay={3000}
              autohide
              bg={variant}
            >
              <Toast.Body className="text-white">{responseMessage}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
     );
}
 
export default ToastComponent;