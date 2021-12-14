import React,{Fragment,useState } from 'react'
import {Select} from 'antd'
const {Option}=Select
import platIcon from "../../static/img/platIcon.png";
import CreateProject from './createProject'
export default ()=>{
    const [mode,setMode]=useState('pc')
    const [project,setProject]=useState('')
    const handleChange=(val)=>{
        setMode(val)
    }
    return <Fragment>
    <img src={platIcon} className='logo'></img>
    <Select
      value={mode}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="mobile">手机模式</Option>
      <Option value="pc">pc模式</Option>
    </Select>
    {/* <Select
      value={project}
      style={{ width: 120 }}
      onChange={projectChange}
      placeholder='请选择项目'
    >
      <Option value="mobile">手机模式</Option>
      <Button value="pc">创建项目</Button>
    </Select> */}
    <CreateProject></CreateProject>
  </Fragment>
}