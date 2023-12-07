import { Alert } from "react-bootstrap";
import StatusWrapper from "../../../Components/StatusWrapper/StatusWrapper";
import { reformatDate } from "../../../Utils/dateFormat";
import { IParcel } from "../../../Utils/interfaces";
import { IParcelTable } from "../BikerTool.interface";

const ParcelTable = ({
  parcels,
  userName,
  updateClickHandler,
}: IParcelTable) => {
  const tableHeaders = [
    "Parcel Name",
    "Created by",
    "Pickup Address",
    "Dropoff Address",
    "Parcel Status",
    "Parcel Delivered by",
    "Parcel Pickup Time",
    "Parcel Dropoff Time",
    "Actions",
  ];
  const setParcelActions = (parcel: IParcel) => {
    return(<div aria-label="parcel table actions" className="d-flex">
      {!parcel.deliveredBy?.userName ||
      userName === parcel.deliveredBy?.userName ? (
        <>
          <button
            className="btn btn-primary"
            onClick={() => updateClickHandler(parcel, "assign")}
          >
            {userName === parcel.deliveredBy?.userName
              ? "Update my parcel"
              : "Assign to me"}
          </button>
          <button
            className="btn btn-warning mx-2"
            onClick={() => updateClickHandler(parcel, "update-status")}
          >
            Update status
          </button>
        </>
      ) : (
        <>
          <Alert variant="danger" className="my-0  py-1 not-asigned">
            This parcel is assigned to another biker !
          </Alert>
        </>
      )}
    </div>);
  };
  return parcels.length > 0 ? (
    <table className="table table-info table-striped table-bordered table-hover">
      <thead>
        <tr>
          {tableHeaders.map((header) => {
            return (
              <th
                key={header}
                className={header === "Created by" ? "text-danger" : ""}
              >
                {header}
              </th>
            );
          })}
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
              <td>{parcel.deliveredBy?.userName || "not picked yet"}</td>
              <td>{reformatDate(parcel?.pickupTime)}</td>
              <td>{reformatDate(parcel?.dropOffTime)}</td>
              <td>
                {setParcelActions(parcel)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <h4 className="text-danger mt-3">No items found !</h4>
  );
};

export default ParcelTable;
