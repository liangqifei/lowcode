import ReactDOM from 'react-dom'
import React from 'react'
import 'antd/dist/antd.css';
import '../main.scss';
import Layout from '../layout'
import componentConfig from './componentConfig'
//注册组件
import KButton from '../components/KButton'
import KSwitch from '../components/KSwitch'
componentConfig.register({
    preview:()=>{
        return <KButton></KButton>
    },
    key:'KButton',
    render:(props)=>{
        return <KButton {...props}></KButton>
    },
    text:'KButton组件'
})
componentConfig.register({
    preview:()=>{
        return <KSwitch></KSwitch>
    },
    key:'KSwitch',
    render:(props)=>{
        return <KSwitch {...props}></KSwitch>
    },
    text:'KSwitch'
})
componentConfig.register({
    preview:()=>{
        return <KButton></KButton>
    },
    key:'KButton2',
    render:(props)=>{
        return <KButton {...props}></KButton>
    },
    text:'KButton组件2'
})
ReactDOM.render(
    <Layout />,
    document.getElementById('root')
);