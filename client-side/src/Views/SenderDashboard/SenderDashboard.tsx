import ToastComponent from "../../Components/Toast/ToastComponent";
import AddParcelForm from "./Partials/AddParcelForm";
import SenderParcelTable from "./Partials/SenderParcelTable";
import useSenderDashboard from "./useSenderDashboard";

const SenderDashboard = () => {
  const {
    parcels,
    showToast,
    setShowToast,
    validated,
    handleInputChange,
    addedItem,
    mode,
    resetHandler,
    addParcel,
    responseMessage,
  } = useSenderDashboard();

  return (
    <div className="container-fluid py-3 px-3">
      <AddParcelForm
        validated={validated}
        addParcel={addParcel}
        addedItem={addedItem}
        handleInputChange={handleInputChange}
        mode={mode}
        resetHandler={resetHandler}
      />
      <div className="row mt-2">
        <div className="col-sm-11 m-auto">
          <h2 className="text-info my-3-">My Parcels List</h2>
          <SenderParcelTable parcels={parcels}/>
        </div>
      </div>
      <ToastComponent
        showToast={showToast}
        onCloseHandler={() => setShowToast(false)}
        responseMessage={responseMessage}
      />
    </div>
  );
};

export default SenderDashboard;
