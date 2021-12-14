import React, { useEffect, useState } from "react";
export default ({ scheam,properScheam }) => {
  function dealPropScheam(initdata,initProp){
    initProp&&initProp.map(item=>{
      if(initdata[item.filedId]){
        item.value=initdata[item.filedId]
      }
    })
    return [initProp,initdata]
  }
  const [computedPropScheam,computedData]=dealPropScheam(scheam,properScheam)
  return [computedPropScheam,computedData];
};
