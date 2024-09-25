import Card from "./card";

export default function CardSet() {
  return (
    <div className="w-full flex justify-center items-center space-x-10">
      <Card title="Programs" color="#087071" url="/events" />
      <Card title="Membership" color="#c17024" url="/membership" />
      <Card title="Events" color="#7a3b59" url="/events" />
    </div>
  );
}
