import React, { useState, createElement, Fragment } from "react";
import componentConfig from "../../bootstrap/componentConfig";
import { Tabs,  } from 'antd';

const { TabPane } = Tabs;
import './index.scss'
export default ({setActiveKey,activeKey}) => {
  const [componentsList] = useState(() => componentConfig.getComponentsList());
  return (
    <div className='leftSection'>
      <Tabs tabPosition='left' style={{ height: '100%' }} onTabClick={(key)=>setActiveKey(key)} activeKey={activeKey}>
        {componentsList.map(item => (
          <TabPane tab={item.text} key={item.key} >
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
