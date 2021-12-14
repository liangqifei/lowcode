import React, { Fragment,useEffect,useState } from "react";
import FormTemp from "../../form/index";
import { Tabs } from "antd";
const { TabPane } = Tabs;
export default ({ propScheam }) => {
  const [tabkey] = useState("1");
  const onChange=()=>{}
  return (
    <Fragment>
      <Tabs value={tabkey} onChange={onChange}>
        <TabPane tab="属性设置" key="1">
          <FormTemp propScheam={propScheam}></FormTemp>
        </TabPane>
        <TabPane tab="Tab222" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
