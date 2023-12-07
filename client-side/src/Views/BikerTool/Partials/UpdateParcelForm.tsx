import {
  ButtonGroup,
  Card,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import { IUpdateParcelForm } from "../BikerTool.interface";

const UpdateParcelForm = ({
  mode,
  handleSubmit,
  validated,
  addedItem,
  handleInputChange,
  statusesList,
  resetHandler,
}: IUpdateParcelForm) => {
  const formHeader =
    mode === "assign" ? "Assign Parcel" : "Update Parcel Status";
  const isSubmitBtnDisabled =
    mode === "assign"
      ? !addedItem.pickupTime || !addedItem.dropOffTime
      : !addedItem.parcelStatus;
  const submitButtonTitle =
    mode === "assign" ? "Assign Parcel" : "Update Parcel Status";
  const isUserInUpdateMode = ["assign", "update-status"].includes(mode);
  return (
    <>
      {isUserInUpdateMode && (
        <div className="row">
          <div className="col-sm-11 m-auto">
            <Card bg="info" text="dark" className="mb-2 ">
              <Card.Header>{formHeader}</Card.Header>
              <Card.Body>
                <Card.Title>{formHeader}</Card.Title>
                <Card.Text>
                  <Form
                    autoComplete="off"
                    noValidate
                    validated={validated}
                    onSubmit={() => handleSubmit()}
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
                              handleInputChange("dropOffTime", e?.target.value)
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
                            handleInputChange("parcelStatus", statusesList[+e])
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
                      onClick={() => handleSubmit()}
                      disabled={isSubmitBtnDisabled}
                    >
                      {submitButtonTitle}
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
    </>
  );
};

export default UpdateParcelForm;
