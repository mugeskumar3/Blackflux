// Medium.tsx
import React, { useState } from "react";
import { Form, Input, Modal, Radio } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MediumTable from "./mediumtable";
interface Values {
  title: string;
  description: string;
  phoneNumber: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Add Medium"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((errorInfo) => {
            console.log("Validate Failed:", errorInfo);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input the phone number!" },
          ]}
        >
          <PhoneInput country={"in"} />
        </Form.Item>
        <Form.Item
          name="medium"
          label="Medium"
          rules={[{ required: true, message: "Please select a medium!" }]}
        >
          <Radio.Group>
            <Radio value="Tamil">Tamil Medium</Radio>
            <Radio value="English">English Medium</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Medium: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <div>
      <PlusCircleOutlined
        style={{ fontSize: "30px", color: "green" }}
        onClick={() => {
          setOpen(true);
        }}
      />
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
        <MediumTable   />
    </div>
  );
};

export default Medium;
