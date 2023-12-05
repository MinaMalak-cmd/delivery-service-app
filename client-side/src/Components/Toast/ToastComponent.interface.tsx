export interface IToastComponent {
    variant?: string;
    responseMessage:string;
    onCloseHandler:Function;
    showToast:boolean;
}