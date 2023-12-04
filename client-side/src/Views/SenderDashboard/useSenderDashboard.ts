import { useEffect, useState } from "react";
import { deleteRequest, get, post, update } from "../../Services/httpMethods";

const useSenderDashboard = () => {
    const tempParcels = [
        {
          _id: "656b06d60b9cd6040e60ec28",
          createdBy: {
            _id: "64a2835d0d891295bcb000c8",
            userName: "mina elan",
            role: "user",
          },
          parcelName: "eeee",
          pickupAddress: "Cairo",
          dropOffAddress: "Gize",
          parcelStatus: "delivered",
          createdAt: "2023-12-02T10:28:38.863Z",
          updatedAt: "2023-12-02T14:40:32.258Z",
        //   deliveredBy: {
        //     _id: "74a283720d891295bcb030cc",
        //     userName: "ahmed salah",
        //     role: "biker",
        //   },
        //   dropOffTime: "4-12-2023",
        //   pickupTime: "3-12-2023",
        },
        {
          _id: "656b06d60b9cd6040e60ec28",
          createdBy: {
            _id: "64a2835d0d891295bcb000c8",
            userName: "mina elan",
            role: "user",
          },
          parcelName: "eeee",
          pickupAddress: "Cairo",
          dropOffAddress: "Gize",
          parcelStatus: "delivered",
          createdAt: "2023-12-02T10:28:38.863Z",
          updatedAt: "2023-12-02T14:40:32.258Z",
          deliveredBy: {
            _id: "74a283720d891295bcb030cc",
            userName: "ahmed salah",
            role: "biker",
          },
          dropOffTime: "4-12-2023",
          pickupTime: "3-12-2023",
        },
        {
          _id: "656b06d60b9cd6040e60ec28",
          createdBy: {
            _id: "64a2835d0d891295bcb000c8",
            userName: "mina elan",
            role: "user",
          },
          parcelName: "eeee",
          pickupAddress: "Cairo",
          dropOffAddress: "Gize",
          parcelStatus: "delivered",
          createdAt: "2023-12-02T10:28:38.863Z",
          updatedAt: "2023-12-02T14:40:32.258Z",
          deliveredBy: {
            _id: "74a283720d891295bcb030cc",
            userName: "ahmed salah",
            role: "biker",
          },
          dropOffTime: "4-12-2023",
          pickupTime: "3-12-2023",
        },
      ]
    const [parcels, setParcels] = useState(tempParcels);
    const [deletedItem, setDeletedItem] = useState(NaN);
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
        setParcels(tempParcels);
    }
    const deleteParcel = async() =>{
        const response = await deleteRequest(`/parcel/${deletedItem}`);
        if(response){
            setShowToast(true);
        }
        setDeletedItem(NaN);
        getParcels();
    }
    const addParcel = async() =>{
        if(addedItem.parcelName){
            console.log("🚀 ~ file: useSenderDashboard.ts:108 ~ addParcel ~ addedItem:", addedItem)
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
        setDeletedItem,
        deletedItem,
        deleteParcel,
        showToast, 
        setShowToast,
        validated,
        setValidated, 
        handleSubmit,
        handleInputChange,
        addedItem,
        mode, 
        setMode,
        resetHandler,
        setAddedItem
    };
}
 
export default useSenderDashboard;