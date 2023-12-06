import { useEffect, useState } from "react";
import { post } from "../../Services/httpMethods";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [showToast, setShowToast] = useState(false);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
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
            const response = await post("/user/login", addedItem);
            if(response?.status === 200 && response?.data?.message === "login success"){
                setShowToast(true);
                localStorage.setItem("access-token", response?.data?.accessToken);
                localStorage.setItem("user-details", JSON.stringify(response?.data?.user));
                if(response?.data?.user?.role === "biker"){
                  setTimeout(() =>{
                    navigate('/biker-tool')
                  },2000);
                }
                else {
                  setTimeout(() =>{
                    navigate('/sender-dashboard')
                  },2000);
                }
            }
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