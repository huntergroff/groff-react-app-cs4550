import React from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { LuGripVertical } from "react-icons/lu";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./moduleReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wd-module-top-buttons">
        <button className="btn btn-outline-secondary ms-2">Collapse All</button>
        <button className="btn btn-outline-secondary ms-2">View Progress</button>
        <Dropdown className="ms-2">
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            <FaCheckCircle className="text-success me-1" />
            Publish All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="btn btn-outline-secondary ms-2">
          <FaEllipsisV />
        </button>
      </div>

      <hr />

      <div className="d-flex align-items-start justify-content-between">
        <div className="me-2 w-75">
          <label for="module-title-box" className="form-label">Title</label>
          <input className="form-control mb-2" id="module-title-box" value={module.name}
            onChange={(e) => dispatch(setModule({
              ...module, name: e.target.value
            }))}
          />
          <label for="module-description-box" className="form-label">Description</label>
          <textarea className="form-control" id="module-description-box" value={module.description}
            onChange={(e) => dispatch(setModule({
              ...module, description: e.target.value
            }))}
          />
        </div>
        <div>
          <button className="btn btn-success me-2" onClick={() => dispatch(addModule(module))}>Add</button>
          <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>Update</button>
        </div>
      </div>

      <hr />


      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ul key={index} className="list-group wd-module-list mb-4">
              <li className="list-group-item list-group-item-secondary">
                <div className="d-flex align-items-center">
                  <LuGripVertical />
                  <div className="ms-3">
                    <h5 className="m-0 d-inline">
                      {module.name}
                    </h5>
                    <p className="m-0">{module.description}</p>
                  </div>
                </div>
                <div className="wd-list-group-end-icons">
                  <button className="btn btn-warning me-2" onClick={() => dispatch(setModule(module))}>Edit</button>
                  <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                </div>
              </li>
            </ul>
          ))
      }
    </div>
  );
}
export default ModuleList;