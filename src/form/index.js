import { Input, Switch } from "antd";
import React from "react";
import "./index.scss";
import compoentsConfig from "../bootstrap/componentConfig";
export default (props) => {
  const componentsMap = compoentsConfig.getComponentsMap();
  const { propScheam } = props;
  return (
    propScheam &&
    propScheam.map((item) => {
      return (
        <div style={{ padding: "10px" }}>
          <div style={{ marginBottom: "10px" }}>
            <b>{item.field} </b>
            {item.label}
          </div>
          <div>
            {console.log({
              field: item.field,
            })}
            {componentsMap[item.components].render({
              ...item.antdProps,
              ...item.customProps,
              field: item.field,
            })}
          </div>
        </div>
      );
    })
  );
};
