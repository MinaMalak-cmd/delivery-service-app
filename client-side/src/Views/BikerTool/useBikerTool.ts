import { useEffect, useState } from "react";
import { get, post } from "../../Services/httpMethods";

const useBikerTool = () => {
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
      dropOffAddress: "Giza",
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
      dropOffAddress: "Giza",
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
      dropOffAddress: "Giza",
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
  ];
  const [parcels, setParcels] = useState(tempParcels);
  const [showToast, setShowToast] = useState(false);
  const [validated, setValidated] = useState(false);
  const [mode, setMode] = useState("Add");
  const [addedItem, setAddedItem] = useState({
    parcelName: "",
    pickupAddress: "",
    dropOffAddress: "",
    dropOffTime: "",
    pickupTime: "",
  });
  useEffect(() => {
    getParcels();
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
    const response = await get("/parcel");
    // setParcels(response?.data.result);
    setParcels(tempParcels);
  };
  const addParcel = async () => {
    if (addedItem.parcelName) {
      const response = await post("/parcel/signup", addedItem);
      if (response) {
        setShowToast(true);
      }
      resetHandler();
      getParcels();
    }
  };
  const updateClickHandler = (item: any) => {
    setAddedItem(item); 
    setMode("Update");
  }
  const updateParcel = async () => {
    if (addedItem.parcelName) {
      console.log("🚀 ~ file: useBikerTool.ts:124 ~ updateParcel ~ addedItem:", addedItem)
      // const response = await update(`/parcel/${addedItem.id}`, addedItem);
      // if(response){
      //     setShowToast(true);
      // }
      // resetHandler();
      // getParcels();
      
    }
  };
  const handleSubmit = () => {
    if (mode === "Update") {
      updateParcel();
    } else {
      addParcel();
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
    updateClickHandler
  };
};

export default useBikerTool;
