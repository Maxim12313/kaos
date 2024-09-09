import BigText from "../../components/bigText";
import programImage from "../../images/programs.jpg";

// programs
export default function Page() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <BigText title="Programs" image={programImage} />
    </div>
  );
}
