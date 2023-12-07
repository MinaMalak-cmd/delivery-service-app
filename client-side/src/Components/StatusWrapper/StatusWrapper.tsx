import { IParcelStatus } from "../../Utils/interfaces";

const StatusWrapper = ({ parcelStatus }: { parcelStatus: IParcelStatus}) => {
  return (
    <div className={`my-0  py-1 status-container status-${parcelStatus}`}>{parcelStatus}</div>
  );
};

export default StatusWrapper;
