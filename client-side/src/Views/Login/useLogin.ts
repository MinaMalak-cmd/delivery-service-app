import { useEffect, useState } from "react";
import { deleteRequest, get, post, update } from "../../Services/httpMethods";

const useLogin = () => {
    const [showToast, setShowToast] = useState(false);
    const [validated, setValidated] = useState(false);
    const [addedItem, setAddedItem] = useState({
      userName: "",
      password:""
    });
    useEffect(() => {
      setValidated(false);
    }, [addedItem])
    
    const handleInputChange = (key:string, value:string|number) =>{
        setAddedItem({
          ...addedItem,
            [key]: value
        });
    }
    const handleLogin = async() =>{
        if(addedItem.userName && addedItem.password){
            console.log("🚀 ~ file: useLogin.ts:108 ~ addParcel ~ addedItem:", addedItem)
            // const response = await post("/parcel/signup", addedItem);
            // if(response){
            //     setShowToast(true);
            // }
            resetHandler();
        }
    }
    const resetHandler = () => {
        setAddedItem({
          userName: "",
          password:""
        });
    }
    return {
        showToast, 
        setShowToast,
        validated,
        setValidated, 
        handleLogin,
        handleInputChange,
        addedItem,
        resetHandler,
        setAddedItem
    };
}
 
export default useLogin;