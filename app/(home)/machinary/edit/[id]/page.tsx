import EditMachinaryCard from "@/components/EditMachinaryCard";
import { getMachinaryById } from "@/lib/actions/machinary.actions";

const EditMachinary = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const signledata = await getMachinaryById(id as string);

  console.log(id, "id", signledata, "signledata");

  // console.log(signledata, "signledata");

  return (
    <div className="flex flex-col items-center justify-start mt-20 w-full h-screen">
      <div>
        <h1 className="text-3xl font-bold text-center">Edit Machinary</h1>
      </div>
      <EditMachinaryCard
        id={signledata?.MachineID as string}
        type={signledata?.Type as string}
        status={signledata?.MaintenanceStatus as string}
        maintenance={
          new Date(signledata?.LastMaintenanceDate?.toDateString() as string)
        }
        predictive={signledata?.PredictiveMaintenanceRequired as boolean}
      />
    </div>
  );
};

export default EditMachinary;
