import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./styles.css";
import { LuGripVertical } from "react-icons/lu";
import { FaPlus, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
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
        <button className="btn btn-danger ms-2">+ Module</button>
        <button className="btn btn-outline-secondary ms-2">
          <FaEllipsisV />
        </button>
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
                  <FaPlus />
                  <FaEllipsisV className="ms-2" />
                </div>
              </li>
            </ul>
          ))
      }
    </div>
  );
}
export default ModuleList;