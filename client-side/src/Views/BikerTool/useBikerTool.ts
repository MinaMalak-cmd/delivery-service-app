import { useEffect, useState } from "react";
import { get, patch, update } from "../../Services/httpMethods";
import { IParcel, IParcelStatus } from "../../Utils/interfaces";
import { retrieveUserDetails } from "../../Utils/localStorageGetters";

const useBikerTool = () => {
  const userName = retrieveUserDetails()?.userName;
  const [parcels, setParcels] = useState<IParcel[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [validated, setValidated] = useState(false);
  const [mode, setMode] = useState("Add");
  const [addedItem, setAddedItem] = useState<IParcel>({} as IParcel);
  const [statusesList, setStatusesList] = useState<IParcelStatus[]>([]);
  const [responseMessage, setResponseMessage] = useState("");
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
    const response = await get("/parcel");
    if (response?.data?.message === "parcels retrieved successfully") {
      setParcels(response?.data?.parcels);
    } else {
      setParcels([]);
    }
  };
  const getStatusesList = async () => {
    const response = await get("/parcel/get-statuses");
    if (response?.data?.message === "statuses retrieved successfully") {
      setStatusesList(response?.data?.statuses);
    } else {
      setStatusesList([]);
    }
  };
  const updateParcelStatus = async () => {
    if (addedItem.parcelStatus) {
      const updatedValues = {
        status: addedItem.parcelStatus,
      };
      const response = await patch(
        `/parcel/update-parcel-status/${addedItem._id}`,
        updatedValues
      );
      if (response?.data?.message === "Parcel status updated successfully") {
        setResponseMessage(response?.data?.message);
        setShowToast(true);
        getParcels();
        resetHandler();
      }
    }
  };
  const updateClickHandler = (item: any, type: string) => {
    setAddedItem(item);
    setMode(type);
  };
  const updateParcel = async () => {
    if (addedItem.pickupTime && addedItem.dropOffTime) {
      const updatedValues = {
        pickupTime: addedItem.pickupTime,
        dropOffTime: addedItem.dropOffTime,
      };
      const response = await update(
        `/parcel/assign-to/${addedItem._id}`,
        updatedValues
      );
      if (response?.data?.message === "Parcel picked successfully") {
        setResponseMessage(response?.data?.message);
        setShowToast(true);
        getParcels();
        resetHandler();
      }
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
    setAddedItem({} as IParcel);
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
    resetHandler,
    updateClickHandler,
    statusesList,
    userName,
    responseMessage,
  };
};

export default useBikerTool;
