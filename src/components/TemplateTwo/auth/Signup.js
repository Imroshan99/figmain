import React, { useState } from "react";
import LogoXmonies from "../Layout/LogoXmonies";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import { Form, Input, Radio, Button, Select } from "antd";
// import { Option } from "antd/lib/mentions";

export const Signup = () => {
  const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
  const [activeStep, setActiveStep] = useState(0);

  const [data, setData] = useState([]);

  const fun1 = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div className="signup-inputs">
            <Form.Item label="Name" name="name">
              <Input
                onChange={(e) =>
                  setData((prevState) => [
                    { ...prevState, name: e.target.value },
                  ])
                }
                size="large"
              />
            </Form.Item>
            <Form.Item label="Email ID" name="email">
              <Input
                size="large"
                onChange={(e) =>
                  setData((prevState) => [
                    { ...prevState, email: e.target.value },
                  ])
                }
              />
            </Form.Item>
            <Form.Item label="Date Of Birth">
              <select>
                <option>20</option>
              </select>
              <select>
                <option>March</option>
                <option>April</option>
              </select>
              <select>
                <option>2022</option>
              </select>
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Form.Item
                prefixCls="
                  "
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="M">Male</Radio>
                  <Radio value="F">Female</Radio>
                  <Radio value="o">Other</Radio>
                </Radio.Group>
              </Form.Item>
            </Form.Item>
          </div>
        );

        break;
      case 1:
        return (
          <div className="signup-inputs">
            <Form.Item label="Select Country" name="country">
              {/* <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select> */}
              <Input />
            </Form.Item>
          </div>
        );

        break;
      case 2:
        return <div>2222222222</div>;

        break;

      default:
        break;
    }
  };

  return (
    <div className="signup">
      <LogoXmonies />
      <div className="signup-right">
        <div className="signup-div">
          <span className="signup-head">Signup</span>
          <div className="container signup-form">
            <Stepper
              className="stepper-cls"
              activeStep={activeStep}
              alternativeLabel={true}
            >
              <Step>
                <StepLabel>Step 1</StepLabel>
              </Step>
              <Step>
                <StepLabel>Step 2</StepLabel>
              </Step>
              <Step>
                <StepLabel>Step 3</StepLabel>
              </Step>
            </Stepper>
            {/* <form>{fun1(activeStep)}</form> */}
            <Form
              onFinish={(values) => {
                console.log("---Data---", values);
                setData((prevState) => [...prevState, values]);
              }}
            >
              {fun1(activeStep)}
              {activeStep}

              <Button
                htmlType="submit"
                // onClick={console.log("hi data",data)}
              >
                submit
              </Button>
            </Form>
            <button
              // disabled={false}
              // color={"primary"}
              // fullWidth={true}
              onClick={() => {
                setActiveStep((currentStep) => currentStep + 1);
                // console.log("---data---",data)
              }}
            >
              Next
            </button>

            <span className="rtnlogin">Return to Log In</span>
          </div>
        </div>
      </div>
    </div>
  );
};
