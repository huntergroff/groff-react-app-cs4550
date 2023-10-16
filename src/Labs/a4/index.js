import Add from "./Addition";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariables from "./DateStateVariables";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {
    function sayHello() {
        alert("what");
      }
    
    return (
      <div className="container">
        <h1>Assignment 4</h1>
        <ReduxExamples />
        <Add a={3} b={6} />
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello}/>
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariables />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
      </div>
    );
  }
  export default Assignment4;