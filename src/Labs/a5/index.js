import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const a = [1, 2, 3]
  console.log(a);

  const e = [...a, 4]
  const [g, b, c, f] = e
  console.log(f)

  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href="http://localhost:4000/a5/welcome"
           className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;