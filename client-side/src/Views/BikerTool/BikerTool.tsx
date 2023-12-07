import useBikerTool from "./useBikerTool";
import ToastComponent from "../../Components/Toast/ToastComponent";
import UpdateParcelForm from "./Partials/UpdateParcelForm";
import ParcelTable from "./Partials/ParcelTable";

const BikerTool = () => {
  const {
    parcels,
    showToast,
    setShowToast,
    validated,
    handleSubmit,
    handleInputChange,
    addedItem,
    mode,
    resetHandler,
    updateClickHandler,
    statusesList,
    userName,
    responseMessage,
  } = useBikerTool();

  return (
    <div className="biker-tool container-fluid py-3 px-3">
      <UpdateParcelForm
        mode={mode}
        handleSubmit={handleSubmit}
        validated={validated}
        addedItem={addedItem}
        handleInputChange={handleInputChange}
        statusesList={statusesList}
        resetHandler={resetHandler}
      />
      <div className="row mt-2">
        <div className="col-sm-11 m-auto">
          <h2 className="text-info mt-2 mb-3">All parcels List</h2>
          <ParcelTable
            parcels={parcels}
            userName={userName}
            updateClickHandler={updateClickHandler}
          />
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

export default BikerTool;
