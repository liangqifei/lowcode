import React, { Fragment,useEffect,useState  } from "react";
import { Switch } from "antd";
export default (props) => {
  const { onChange, onChangeValue, field } = props;
  return (
    <Switch
      {...props}
      onChange={(check, e) => {
        onChange && onChange(check, e);
        onChangeValue && onChangeValue(check, e, field);
      }}
    ></Switch>
  );
};