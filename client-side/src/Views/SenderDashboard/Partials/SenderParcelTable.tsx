import StatusWrapper from "../../../Components/StatusWrapper/StatusWrapper";
import { reformatDate } from "../../../Utils/dateFormat";
import { IParcel } from "../../../Utils/interfaces";
import { IParcelTable } from "../SenderDashboard.interface";

const SenderParcelTable = ({ parcels }: IParcelTable) => {
  const tableHeaders = [
    "Parcel Name",
    "Pickup Address",
    "Dropoff Address",
    "Parcel Status",
    "Parcel Delivered by",
    "Parcel Pickup Time",
    "Parcel Dropoff Time",
  ];

  return parcels.length > 0 ? (
    <table className="table table-info table-striped table-bordered table-hover">
      <thead>
        <tr>
          {tableHeaders.map((header) => {
            return (
              <th
                key={header}
                className={
                  header === "Parcel Delivered by" ? "text-danger" : ""
                }
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
              <td>{parcel.pickupAddress}</td>
              <td>{parcel.dropOffAddress}</td>
              <td>
                <StatusWrapper parcelStatus={parcel.parcelStatus} />
              </td>
              <td>{parcel.deliveredBy?.userName || "not picked yet"}</td>
              <td>{reformatDate(parcel?.pickupTime)}</td>
              <td>{reformatDate(parcel?.dropOffTime)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <h4 className="text-danger mt-3">No items found !</h4>
  );
};

export default SenderParcelTable;
