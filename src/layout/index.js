import React, { Fragment,useEffect,useState } from "react";
import "./index.scss";
import Header from './header'
import LeftMain from './left'
import RightMain from './right'
import compoentsConfig from "../bootstrap/componentConfig";
import { Button, Popover } from "antd";

const componentsMap = compoentsConfig.getComponentsMap();
export default () => {
  const [activeKey, setActiveKey] = useState("");

  const dealPropScheam = (initdata, initProp) => {
    initProp &&
      initProp.map((item) => {
        if (initdata[item.field]) {
          item.value = initdata[item.field];
        }
      });
    return [initdata, initProp];
  };

  const [initdata1, initprops1] = dealPropScheam(
    {},
    ButtonPropertiesScheam | []
  );
  const [propScheam, setPropScheam] = useState(initprops1);
  const [dataScheam, setDataScheam] = useState(initdata1);
  const changeValue = (checked, event, field) => {
    dataScheam[field] = checked;
    setDataScheam({
      ...dataScheam,
    });
  };
  //初始化数据和propertierScheam
  const ButtonPropertiesScheam = [
    {
      label: "将按钮宽度调整为其父宽度的选项",
      field: "block",
      components: "KSwitch",
      antdProps: {},
      customProps: {
        onChangeValue: changeValue,
      },
      value: false,
    },
    {
      label: "设置危险按钮",
      field: "danger",
      components: "KSwitch",
      antdProps: {},
      customProps: {
        onChangeValue: changeValue,
      },
      value: false,
    },
    {
      label: "按钮失效状态",
      field: "disabled",
      components: "KSwitch",
      antdProps: {},
      customProps: {
        onChangeValue: changeValue,
      },
      value: false,
    },
    {
      label: "幽灵属性，使按钮背景透明",
      field: "ghost",
      components: "KSwitch",
      antdProps: {},
      customProps: {
        onChangeValue: changeValue,
      },
      value: false,
    },
  ];
  useEffect(() => {
    if (activeKey == "KButton") {
      // const data=changeScheamForm({
      //   scheam:{},
      //   formScheam:ButtonPropertiesScheam
      // })
      setPropScheam(ButtonPropertiesScheam);
      setDataScheam({});
    } else {
      setPropScheam([]);
      setDataScheam({});
    }
  }, [activeKey]);

  const content = () => {
    return <div>{`${JSON.stringify(dataScheam)}`}</div>;
  };
  return (
    <div className="app">
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="app-content">
        <div className="app-content-left">
          <LeftMain
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          ></LeftMain>
        </div>
        <div className="app-content-center">
          {componentsMap[activeKey] &&
            componentsMap[activeKey].render({ ...dataScheam })}
          {JSON.stringify(dataScheam)}
          {activeKey && (
            <div style={{ textAlign: "right" }}>
              <Popover
                placement="bottom"
                title={`${activeKey}组件`}
                content={content}
                trigger="click"
              >
                <Button style={{ marginTop: "20px" }} type="primary">
                  查看属性
                </Button>
              </Popover>
            </div>
          )}
        </div>
        <div className="app-content-right">
          {/* changeScheamForm={changeByForm} */}
          <RightMain propScheam={propScheam}></RightMain>
        </div>
      </div>
    </div>
  );
};
