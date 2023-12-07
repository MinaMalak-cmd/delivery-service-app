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
    <>
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
            {/* {parcels.length > 0 ? (
              <table className="table table-info table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Parcel Name</th>
                    <th className="text-danger">Created by</th>
                    <th>Pickup Address</th>
                    <th>Dropoff Address</th>
                    <th>Parcel Status</th>
                    <th>Parcel Delivered by</th>
                    <th>Parcel Pickup Time</th>
                    <th>Parcel Dropoff Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {parcels?.map((parcel: IParcel) => {
                    return (
                      <tr key={parcel._id}>
                        <td>{parcel.parcelName}</td>
                        <td>{parcel.createdBy.userName}</td>
                        <td>{parcel.pickupAddress}</td>
                        <td>{parcel.dropOffAddress}</td>
                        <td>
                          <StatusWrapper parcelStatus={parcel.parcelStatus} />
                        </td>
                        <td>
                          {parcel.deliveredBy?.userName || "not picked yet"}
                        </td>
                        <td>{reformatDate(parcel?.pickupTime)}</td>
                        <td>{reformatDate(parcel?.dropOffTime)}</td>
                        <td>
                          <div
                            aria-label="parcel table actions"
                            className="d-flex"
                          >
                            {!parcel.deliveredBy?.userName ||
                            userName === parcel.deliveredBy?.userName ? (
                              <>
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    updateClickHandler(parcel, "assign")
                                  }
                                >
                                  {userName === parcel.deliveredBy?.userName
                                    ? "Update my parcel"
                                    : "Assign to me"}
                                </button>
                                <button
                                  className="btn btn-warning mx-2"
                                  onClick={() =>
                                    updateClickHandler(parcel, "update-status")
                                  }
                                >
                                  Update status
                                </button>
                              </>
                            ) : (
                              <>
                                <Alert
                                  variant="danger"
                                  className="my-0  py-1 not-asigned"
                                >
                                  This parcel is assigned to another biker !
                                </Alert>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h4 className="text-danger mt-3">No items found !</h4>
            )} */}
            <ParcelTable parcels={parcels} userName={userName} updateClickHandler={updateClickHandler}/>
          </div>
        </div>
        <ToastComponent
          showToast={showToast}
          onCloseHandler={() => setShowToast(false)}
          responseMessage={responseMessage}
        />
      </div>
    </>
  );
};

export default BikerTool;
