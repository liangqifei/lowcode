import React, { Fragment,useEffect,useState } from "react";
import "./index.scss";
import Header from './header'
import LeftMain from './left'
import RightMain from './right'
import useButton from '../button'
export default () => {
  const [activeKey,setActiveKey]=useState('')
  //初始化数据和propertierScheam
  const ButtonPropertiesScheam=[
    {
        label:"将按钮宽度调整为其父宽度的选项",
        filedId:'block',
        components:'KSwitch',
        antdProps:{
            onChange:(checked, event,filedId)=>{
              debugger
              setDataScheam({
                ...dataScheam,
                [filedId]:checked
              })
            }
        },
        value:false
    }
  ]
  const [computedPropsScheam,computedDataScheam]=useButton({scheam:{},properScheam:ButtonPropertiesScheam})

  const [propScheam,setPropScheam]=useState(()=>computedPropsScheam)
  const [dataScheam,setDataScheam]=useState(()=>computedDataScheam)


  useEffect(()=>{
    if(activeKey=='KButton'){
      // const data=changeScheamForm({
      //   scheam:{},
      //   formScheam:ButtonPropertiesScheam
      // })
      setPropScheam(ButtonPropertiesScheam)
      setDataScheam({})
    }else{
      setPropScheam([])
      setDataScheam({})
    }
  },[activeKey])

  console.log(dataScheam,'dataScheamdataScheamdataScheamdataScheam')
  return (
    <div className="app">
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="app-content">
        <div className="app-content-left">
          <LeftMain activeKey={activeKey} setActiveKey={setActiveKey}></LeftMain>
        </div>
        <div className="app-content-center">

        </div>
        <div className="app-content-right">
        {/* changeScheamForm={changeByForm} */}
          <RightMain propScheam={propScheam}></RightMain>
        </div>
      </div>
    </div>
  );
};
