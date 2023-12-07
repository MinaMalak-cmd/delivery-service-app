import { useEffect, useState } from "react";
import { get, post } from "../../Services/httpMethods";
import { IParcel } from "../../Utils/interfaces";

const useSenderDashboard = () => {
  const [parcels, setParcels] = useState<IParcel[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [validated, setValidated] = useState(false);
  const [mode, setMode] = useState("Add");
  const [responseMessage, setResponseMessage] = useState("");
  const [addedItem, setAddedItem] = useState({
    parcelName: "",
    pickupAddress: "",
    dropOffAddress: "",
  });
  useEffect(() => {
    getMyParcels();
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
  const getMyParcels = async () => {
    const response = await get("/parcel/get-all-user-assigned-parcels");
    if (response?.data?.message === "parcels retrieved successfully") {
      setParcels(response?.data?.parcels);
    } else {
      setParcels([]);
    }
  };
  const addParcel = async () => {
    if (
      addedItem.parcelName &&
      addedItem.pickupAddress &&
      addedItem.dropOffAddress
    ) {
      const response = await post("/parcel/create", addedItem);
      if (response?.data?.message === "Parcel created successfully") {
        setResponseMessage(response?.data?.message);
        setShowToast(true);
        resetHandler();
        getMyParcels();
      }
    }
  };
  const resetHandler = () => {
    setAddedItem({
      parcelName: "",
      pickupAddress: "",
      dropOffAddress: "",
    });
    setMode("Add");
  };
  return {
    parcels,
    showToast,
    setShowToast,
    validated,
    setValidated,
    addParcel,
    handleInputChange,
    addedItem,
    mode,
    resetHandler,
    responseMessage
  };
};

export default useSenderDashboard;
