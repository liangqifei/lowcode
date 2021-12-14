import React, { Fragment, useState } from "react";
import { Button, Input, Modal } from "antd";
export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectPathParent, setProjectPathParent] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Button type="primary" onClick={showModal}>
        创建项目
      </Button>
      <Modal
        title="创建项目"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
          placeholder="请输入项目名称"
        ></Input>
      </Modal>
    </Fragment>
  );
};
