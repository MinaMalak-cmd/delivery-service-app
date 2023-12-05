import useBikerTool from "./useBikerTool";
import { Form, Modal, Toast, ToastContainer, Card } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Alert from "react-bootstrap/Alert";

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
    setMode,
    resetHandler,
    setAddedItem,
    updateClickHandler,
    statusesList,
    userName,
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
            <h2 className="text-primary mt-2">All parcels List</h2>
            <table className="table table-info table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Parcel Name</th>
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
                {parcels?.map((parcel: any) => {
                  return (
                    <tr key={parcel._id}>
                      <td>{parcel.parcelName}</td>
                      <td>{parcel.pickupAddress}</td>
                      <td>{parcel.dropOffAddress}</td>
                      <td>{parcel.parcelStatus}</td>
                      <td>
                        {parcel.deliveredBy?.userName || "not picked yet"}
                      </td>
                      <td>{parcel?.pickupTime || "--"}</td>
                      <td>{parcel?.dropOffTime || "--"}</td>
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
                                Assign to me
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
                              <Alert  variant='danger' className="my-0  py-1">
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
          </div>
        </div>
        {/* <div className="row">
          <Modal
            show={deletedItem ? true : false}
            onHide={() => setDeletedItem(NaN)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item ?</Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-secondary"
                onClick={() => setDeletedItem(NaN)}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={deleteParcel}>
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
        </div> */}
        <div className="row">
          <ToastContainer className="bottom-end">
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={3000}
              autohide
              bg="primary"
            >
              <Toast.Body className="text-white">
                your request done successfully
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    </>
  );
};

export default BikerTool;
