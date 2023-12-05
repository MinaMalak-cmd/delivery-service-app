import { reformatDate } from "../../Utils/dateFormat";
import { IParcel } from "../../Utils/interfaces";
import useSenderDashboard from "./useSenderDashboard";
import {
  Form,
  Toast,
  ToastContainer,
  Card,
} from "react-bootstrap";

const SenderDashboard = () => {
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
  } = useSenderDashboard();

  return (
    <>
      <div className="container-fluid py-3 px-3">
        <div className="row">
          <div className="col-sm-11 m-auto">
            <Card bg="info" text="dark" className="mb-2 ">
              <Card.Header>
                Add Parcel
              </Card.Header>
              <Card.Body>
                <Card.Title>
                Add Parcel
                </Card.Title>
                <Card.Text>
                  <Form
                    autoComplete="off"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
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
                      onClick={handleSubmit}
                    >
                      {(mode === "Update") ? "Update Parcel" : "Add Parcel"}
                    </button>
                    {(mode === "Update") && 
                      <button
                        className="btn btn-dark mx-2"
                        type="button"
                        onClick={resetHandler}
                      >
                        Reset
                      </button>
                    }
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-11 m-auto">
            <h2 className="text-primary mt-2">My Parcels List</h2>
            <table className="table table-info table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Parcel Name</th>
                  <th>Pickup Address</th>
                  <th>Dropoff Address</th>
                  <th>Parcel Status</th>
                  <th className="text-danger">Parcel Delivered by</th>
                  <th>Parcel Pickup Time</th>
                  <th>Parcel Dropoff Time</th>
                </tr>
              </thead>
              <tbody>
                {parcels?.map((parcel: IParcel) => {
                  return (
                    <tr key={parcel._id}>
                      <td>{parcel.parcelName}</td>
                      <td>{parcel.pickupAddress}</td>
                      <td>{parcel.dropOffAddress}</td>
                      <td>{parcel.parcelStatus}</td>
                      <td>{parcel.deliveredBy?.userName || 'not picked yet'}</td>
                      <td>{reformatDate(parcel?.pickupTime)}</td>
                      <td>{reformatDate(parcel?.dropOffTime)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
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

export default SenderDashboard;
