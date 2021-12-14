import React, { Fragment,useEffect,useState  } from "react";
import { Switch } from "antd";
export default (props) => {
  const {onChange,filedId}=props
  debugger
  return <Switch {...props} onChange={(check,event)=>{
    debugger
    onChange(check,event,filedId)
  }}></Switch>
};