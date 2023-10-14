import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JSONStringify";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants />
          <VariableTypes />
          <BooleanVariables />
          <IfElse />
          <TernaryOperator />
          <WorkingWithFunctions />
          <WorkingWithArrays />
          <ArrayIndexAndLength />
          <AddingAndRemovingDataToFromArrays />
          <ForLoops />
          <MapFunction />
          <JsonStringify />
          <FindFunction />
          <FilterFunction />
          <TemplateLiterals />
          <House />
          <Spread />
          <Destructing />
          <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript