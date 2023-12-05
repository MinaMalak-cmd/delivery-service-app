import { useEffect, useState } from "react";
import { get, post } from "../../Services/httpMethods";

const useBikerTool = () => {
  const userDetails = JSON.parse(localStorage.getItem("user-details")!) || {};
  const userName = userDetails?.userName;
  const [parcels, setParcels] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [validated, setValidated] = useState(false);
  const [mode, setMode] = useState("Add");
  const [addedItem, setAddedItem] = useState({
    parcelName: "",
    pickupAddress: "",
    dropOffAddress: "",
    dropOffTime: "",
    pickupTime: "",
    parcelStatus:"",
    _id:""
  });
  const [statusesList, setStatusesList] = useState([]);
  useEffect(() => {
    getParcels();
    getStatusesList();
  }, []);
  useEffect(() => {
    setValidated(false);
  }, [addedItem]);

  const handleInputChange = (key: string, value: string | number) => {
    setAddedItem({
      ...addedItem,
      [key]: value,
    });
  };
  const getParcels = async () => {
    // const response = await get("/parcel/get-all-user-assigned-parcels");
    const response = await get("/parcel");
    console.log("🚀 ~ file: useBikerTool.ts:37 ~ getParcels ~ response:", response)
    if(response?.data?.message === "parcels retrieved successfully"){
      setParcels(response?.data?.parcels);
    }else{
      setParcels([]);
    }
  };
  const getStatusesList = async () => {
    const response = await get("/parcel/get-statuses");
    if(response?.data?.message === "statuses retrieved successfully"){
      setStatusesList(response?.data?.statuses);
      console.log("🚀 ~ file: useBikerTool.ts:49 ~ getStatusesList ~ response?.data?.statuses:", response?.data?.statuses)
    }else{
      setStatusesList([]);
    }
  };
  const updateParcelStatus = async () => {
    if (addedItem.parcelName && addedItem.parcelStatus) {
      const response = await post("/parcel/signup", addedItem);
      if (response) {
        setShowToast(true);
      }
      resetHandler();
      getParcels();
    }
  };
  const updateClickHandler = (item: any, type:string) => {
    setAddedItem(item); 
    setMode(type);
  }
  const updateParcel = async () => {
    if (addedItem.parcelName) {
      // const response = await update(`/parcel/${addedItem.id}`, addedItem);
      // if(response){
      //     setShowToast(true);
      // }
      resetHandler();
      getParcels();
      
    }
  };
  const handleSubmit = () => {
    if (mode === "assign") {
      updateParcel();
    } else {
      updateParcelStatus();
    }
    setValidated(true);
  };
  const resetHandler = () => {
    setAddedItem({
      parcelName: "",
      pickupAddress: "",
      dropOffAddress: "",
      dropOffTime: "",
      pickupTime: "",
      parcelStatus:"",
      _id:""
    });
    setMode("Add");
  };
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
    setMode,
    resetHandler,
    setAddedItem,
    updateClickHandler,
    statusesList,
    userName
  };
};

export default useBikerTool;
