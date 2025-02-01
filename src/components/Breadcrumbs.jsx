export default function Breadcrumbs({ path }) {
  return (
    <nav className="breadcrumbs">
      {path.map((item, index) => (
        <span className="lastBorn" key={index}>
          <a className="" href="#">
            {item}{" "}
            <span className="ml-3 ">{index < path.length - 1 && " > "}</span>
          </a>
        </span>
      ))}
    </nav>
  );
}
