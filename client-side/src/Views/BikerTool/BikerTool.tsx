import useBikerTool from "./useBikerTool";
import { Form, Card } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Alert from "react-bootstrap/Alert";
import { IParcel } from "../../Utils/interfaces";
import { reformatDate } from "../../Utils/dateFormat";
import ToastComponent from "../../Components/Toast/ToastComponent";

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
      <div className="container-fluid py-3 px-3">
        {["assign", "update-status"].includes(mode) && (
          <div className="row">
            <div className="col-sm-11 m-auto">
              <Card bg="info" text="dark" className="mb-2 ">
                <Card.Header>
                  {mode === "assign" ? "Assign Parcel" : "Update Parcel Status"}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {mode === "assign"
                      ? "Assign Parcel"
                      : "Update Parcel Status"}
                  </Card.Title>
                  <Card.Text>
                    <Form
                      autoComplete="off"
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="parcel.ControlInput1"
                      >
                        <Form.Label>Parcel Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={addedItem.parcelName}
                          readOnly
                          required
                          value={addedItem.parcelName}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Parcel Name.
                        </Form.Control.Feedback>
                      </Form.Group>
                      {mode === "assign" ? (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="parcel.ControlInput2"
                          >
                            <Form.Label>Pickup Time</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Enter your Pickup Time"
                              onChange={(e: any) =>
                                handleInputChange("pickupTime", e?.target.value)
                              }
                              value={addedItem.pickupTime}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="parcel.ControlInput3"
                          >
                            <Form.Label>Dropoff Time</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Enter your Dropoff Time"
                              onChange={(e: any) =>
                                handleInputChange(
                                  "dropOffTime",
                                  e?.target.value
                                )
                              }
                              value={addedItem.dropOffTime}
                            />
                          </Form.Group>
                        </>
                      ) : (
                        <div className="mb-2">
                          <Form.Label className="mx-2">
                            Parcel Status :
                          </Form.Label>
                          <DropdownButton
                            as={ButtonGroup}
                            variant="primary"
                            title={addedItem.parcelStatus}
                            onSelect={(e: any) =>
                              handleInputChange(
                                "parcelStatus",
                                statusesList[+e]
                              )
                            }
                            defaultValue={addedItem.parcelStatus}
                          >
                            {statusesList.map((status: string, idx: number) => (
                              <Dropdown.Item
                                eventKey={idx}
                                key={idx}
                                active={addedItem.parcelStatus === status}
                              >
                                {status.toUpperCase()}
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                          <br />
                        </div>
                      )}
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={handleSubmit}
                        disabled={
                          mode === "assign"
                            ? !addedItem.pickupTime || !addedItem.dropOffTime
                            : !addedItem.parcelStatus
                        }
                      >
                        {mode === "assign"
                          ? "Assign Parcel"
                          : "Update Parcel Status"}
                      </button>
                      <button
                        className="btn btn-dark mx-2"
                        type="button"
                        onClick={resetHandler}
                      >
                        Reset
                      </button>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
        <div className="row mt-2">
          <div className="col-sm-11 m-auto">
            <h2 className="text-info mt-2">All parcels List</h2>
            {parcels.length > 0 ?
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
                        <td>{parcel.parcelStatus}</td>
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
                                <Alert variant="danger" className="my-0  py-1">
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
            :
            <h4 className="text-danger mt-3">No items found !</h4>
            }
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
