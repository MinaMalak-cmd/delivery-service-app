import { useEffect, useState } from "react";
import { get, post } from "../../Services/httpMethods";
import { IParcel } from "../../Utils/interfaces";

const useSenderDashboard = () => {
    const [parcels, setParcels] = useState<IParcel[]>([]);
    const [showToast, setShowToast] = useState(false);
    const [validated, setValidated] = useState(false);
    const [mode, setMode] = useState("Add");
    const [addedItem, setAddedItem] = useState({
        parcelName: "",
        pickupAddress: "",
        dropOffAddress: ""
    });
    useEffect(() => {
        getParcels();
    }, []);
    useEffect(() => {
      setValidated(false);
    }, [addedItem])
    
    const handleInputChange = (key:string, value:string|number) =>{
        setAddedItem({
          ...addedItem,
            [key]: value
        });
    }
    const getParcels = async() =>{
        const response = await get("/parcel");
        // setParcels(response?.data.result);
        setParcels([]);
    }
    const addParcel = async() =>{
        if(addedItem.parcelName){
            const response = await post("/parcel/signup", addedItem);
            if(response){
                setShowToast(true);
            }
            resetHandler();
            getParcels();
        }
    }
    const updateParcel = async() =>{
        if(addedItem.parcelName){
            // const response = await update(`/parcel/${addedItem.id}`, addedItem);
            // if(response){
            //     setShowToast(true);
            // }
            // resetHandler();
            // getParcels();
        }
    }
    const handleSubmit = () => {
        if(mode === "Update"){
            updateParcel();
        }
        else{
            addParcel();
        }
        setValidated(true);
    };
    const resetHandler = () => {
        setAddedItem({
            parcelName: "",
            pickupAddress: "",
            dropOffAddress: ""
        });
        setMode("Add");
    }
    return {
        parcels,
        showToast, 
        setShowToast,
        validated,
        setValidated, 
        handleSubmit,
        handleInputChange,
        addedItem,
        mode, 
        resetHandler,
    };
}
 
export default useSenderDashboard;