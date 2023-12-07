import { Form, Card } from "react-bootstrap";
import { IAddParcelFormParcelForm } from "../SenderDashboard.interface";

const AddParcelForm = ({
  validated,
  addParcel,
  addedItem,
  handleInputChange,
  mode,
  resetHandler,
}: IAddParcelFormParcelForm) => {
  return (
    <div className="row">
      <div className="col-sm-11 m-auto">
        <Card bg="info" text="dark" className="mb-2 ">
          <Card.Header>Add Parcel</Card.Header>
          <Card.Body>
            <Card.Title>Add Parcel</Card.Title>
            <Card.Text>
              <Form
                autoComplete="off"
                noValidate
                validated={validated}
                onSubmit={() => addParcel()}
              >
                <Form.Group className="mb-3" controlId="parcel.ControlInput1">
                  <Form.Label>Parcel Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Parcel Name"
                    required
                    onChange={(e: any) =>
                      handleInputChange("parcelName", e?.target.value)
                    }
                    value={addedItem.parcelName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Parcel Name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="parcel.ControlInput2">
                  <Form.Label>Pickup Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Pickup Address"
                    onChange={(e: any) =>
                      handleInputChange("pickupAddress", e?.target.value)
                    }
                    value={addedItem.pickupAddress}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="parcel.ControlInput2">
                  <Form.Label>Dropoff Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Dropoff Address"
                    onChange={(e: any) =>
                      handleInputChange("dropOffAddress", e?.target.value)
                    }
                    value={addedItem.dropOffAddress}
                  />
                </Form.Group>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => addParcel()}
                >
                  Add Parcel
                </button>
                {mode === "Update" && (
                  <button
                    className="btn btn-dark mx-2"
                    type="button"
                    onClick={resetHandler}
                  >
                    Reset
                  </button>
                )}
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddParcelForm;
