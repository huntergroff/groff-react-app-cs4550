import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "./a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "./a4/ReduxExamples/AddRedux/addReducer";
import todoReducer from "./a4/ReduxExamples/todos/todoReducer";

const store = configureStore({
    reducer: {
        helloReducer: helloReducer, //can be written just as helloReducer since name is same
        counterReducer,
        addReducer,
        todoReducer,
    },
});

export default store