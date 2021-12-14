import { Input, Switch } from "antd";
import React from "react";
import "./index.scss";
import compoentsConfig from "../bootstrap/componentConfig";
export default (props)=>{
  console.log(compoentsConfig)
  const componentsMap=compoentsConfig.getComponentsMap()
  const {propScheam}=props
  return propScheam&&propScheam.map(item=>{
    return <div>{item.label}
      {componentsMap[item.components].render({...item.antdProps,filedId:item.filedId})}
    </div>
  })
}
