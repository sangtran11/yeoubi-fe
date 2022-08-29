import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Col, Row, Form, Input, Button, Radio, Slider } from "antd";
import axios from "axios";
import { AppContext } from "../Context/AppProvider";
import { useNavigate } from "react-router-dom";

const inquiry_1 =
  "https://lh3.googleusercontent.com/oYS9Zalrk1s2esIZvgzvOiuxaOcCwm_Ht6pVP3Sc7H8Jk9ynLB7ZAvI4h8YSAsnLLS1ANQWPANzdojyT0okYsuWD3EsA_JmtHERAT3cxTwGe-TFwuYBEthpWDHoHkZid8807dA9Y8w=w2400";
const inquiry_2 =
  "https://lh3.googleusercontent.com/Tzm9jRAvm0tAwXEQld-dCKN8ioPFMVQvSlRTfHNJ3YAvUAkgEbdwFUJHLVLSbFfwin7r4waN4WaMPx2bfd1pVBOM3iVFfLVqg1iDvKMvtE_QaYFes1Bg1Cs6_RCrEA3pTsnQILedVg=w2400";
const inquiry_3 =
  "https://lh3.googleusercontent.com/eU6zPoqCJk27ZlgOtltMFiy_KeWKFCL8nksrLGdXCe9D5RNTx9XwQwuTNcist3MjkBQcrQBDLXq7E585ivY5lSW3z4Oal96bKj-PaC3-iOBEVqnSr1kiIhMHBxsC-yJBr34nmuu2Qw=w2400";
const inquiry_4 =
  "https://lh3.googleusercontent.com/_q5yhuSvRWDCQPNNlxmJ3KyRoKjQVaqFXfGv5vKFYU-DJSJuxaLraMF610WqEB8Qzl3cqrCQSGb32hgu0sZaTqQUzgpXLvQObMcbJk2J0fTnlf5BeV6nZLT7apkKtvW_8VCA-dDMyA=w2400";
const inquiry_5 =
  "https://lh3.googleusercontent.com/L-79UkCeHnAAURJPoZ7kUdTp8C1UHgv5yEYTCDeCzXTJ37JXFzLvccF_ASkqzibeYWs9SzGAKUtRyV8mdZDjiY_tQZ3MJRH8VXPP6I4EoGtRw0dugR2QHp_LFGbHAB2MZ37op8sTqw=w2400";

const RightContentInMobile = () => {
  return (
    <Row className="right-content-mobile">
      <Col className="gutter-row" span={12}>
        <div className="item-wrapper">
          <div className="title">(submit inquiry)</div>
          <img className="img" src={inquiry_1} alt="i_1" />
        </div>
      </Col>
      <Col span={12}>
        <div className="item-wrapper">
          <div className="title">(curate order details & send quotations)</div>
          <img className="img" src={inquiry_2} alt="i_2" />
        </div>
      </Col>
      <Col span={12}>
        <div className="item-wrapper">
          <div className="title">(select, confirm & make payments)</div>
          <img className="img" src={inquiry_3} alt="i_3" />
        </div>
      </Col>
      <Col span={12}>
        <div className="item-wrapper">
          <div className="title">(sit back & relax)</div>
          <img className="img" src={inquiry_4} alt="i_4" />
        </div>
      </Col>
      <Col span={24}>
        <div className="item-wrapper">
          <div className="title">(receive your candles)</div>
          <img className="img" src={inquiry_5} alt="i_5" />
        </div>
      </Col>
    </Row>
  );
};

const Inquiry = () => {
  const [form] = Form.useForm();
  const { setIsOpenSubmitModal, isResetForm, setIsResetForm, setIsLoading } =
    useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const widthScreen = document.documentElement.clientWidth;
  const navigate = useNavigate();
  const onFinish = (values) => {
    let payload = {
      name: values.name,
      title: values.otherTitle
        ? `${values.title}/${values.otherTitle}`
        : values.title,
      phone: values.phone,
      email: values.email,
      otherContactMethod: values.otherMethod,
      language: values.language,
      purpose: values.otherPurpose
        ? `${values.purpose}/${values.otherPurpose}`
        : values.purpose,
      quantity: values.quantity,
      packaging: values.packaging,
      when: `${values.day}/${values.month}/${values.year}`,
      where: values.where,
      discover: values.discoverYeoubi,
      vatInvoiceIssued: values.invoiceIssued,
      notes: values.notes,
    };
    try {
      setIsDisabled(true);
      setIsLoading(true);
      if (widthScreen > 991) {
        setIsOpenSubmitModal(true);
      } else {
        navigate("/submit-inquiry");
      }
      axios
        .post(`https://yeoubi-nodemailer.herokuapp.com/api/email`, {
          payload,
        })
        .finally(() => {
          form.resetFields();
          setIsResetForm(false);
          setIsDisabled(false);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isResetForm) {
      form.resetFields();
    }
  }, [isResetForm]);
  return (
    <div className="inquiry-page">
      <div className="text-section">
        yeoubi thank you for your interest in our products. we are happy to
        assist you with large-quantity orders for your special occasions. please
        fill out this form at your convenience for our better understanding of
        your wants and needs. after your submission, our team will review and
        contact you for the next steps.
      </div>
      {widthScreen < 992 && <RightContentInMobile />}
      <div className="form-section">
        <div className="form-title">inquiry form</div>
        <Form
          className="inquiry-form ant-form ant-form-horizontal inquiry-form"
          autoComplete="off"
          onFinish={onFinish}
          form={form}
        >
          <Row gutter={16}>
            <Col className="gutter-row title-field" span={24} lg={8}>
              your name<span className="color-red">*</span>
            </Col>
            <Col className="gutter-row title-field" span={24} lg={16}>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "(please input your name)" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row title-field" span={24} lg={8}>
              title<span className="color-red">*</span>
            </Col>
            <Col className="gutter-row title-field" span={24} lg={16}>
              <Form.Item
                name="title"
                rules={[
                  { required: true, message: "(please input your title)" },
                ]}
              >
                <Radio.Group>
                  <Radio.Button className="mr-px" value="Mr">
                    mr.
                  </Radio.Button>
                  <Radio.Button value="Ms">ms.</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <div className="other-wrapper">
                <div className="other-label">other:</div>
                <div className="other-field">
                  <Form.Item
                    className="float-right text-align-right"
                    name="otherTitle"
                  >
                    <Input className="other-input" />
                  </Form.Item>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row title-field" span={24} lg={8}>
              phone number<span className="color-red">*</span>
            </Col>
            <Col className="gutter-row title-field" span={24} lg={16}>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "(please input your phone number)",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row title-field" span={24} lg={8}>
              email address<span className="color-red">*</span>
            </Col>
            <Col className="gutter-row title-field" span={24} lg={16}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "(please input your email)",
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row title-field" span={24} lg={8}>
              other contact method
            </Col>
            <Col className="gutter-row title-field" span={24} lg={16}>
              <Form.Item name="otherMethod">
                <Input placeholder="zalo, viber, whatsapp, etc." />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row title-field" span={24} lg={8}>
                preferred language
                <br />
                of communication<span className="color-red">*</span>
              </Col>
            ) : (
              <Col className="gutter-row title-field" span={24} lg={8}>
                preferred language of communication
                <span className="color-red">*</span>
              </Col>
            )}

            <Col className="gutter-row title-field" span={24} lg={8}>
              <Form.Item
                name="language"
                rules={[
                  { required: true, message: "(please select one option)" },
                ]}
              >
                <Radio.Group>
                  <Radio.Button className="mr-px" value="VIETNAMESE">
                    vi
                  </Radio.Button>
                  <Radio.Button value="ENGLISH">en</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row title-field" span={24} lg={8}>
                order purpose<span className="color-red">*</span>
                <br />
                <p className="sub-text">
                  (knowing the exact occasion
                  <br />
                  helps us to plan for appropriate
                  <br />
                  packaging designs)
                </p>
              </Col>
            ) : (
              <Col className="gutter-row title-field" span={24} lg={8}>
                order purpose<span className="color-red">*</span>
                <br />
                <p className="sub-text mb-subtext">
                  (knowing the exact occasion helps us to plan for appropriate
                  packaging designs)
                </p>
              </Col>
            )}

            <Col className="gutter-row title-field" span={24} lg={16}>
              <Form.Item
                name="purpose"
                rules={[
                  { required: true, message: "(please select one option)" },
                ]}
              >
                <Radio.Group>
                  <Radio.Button className="mb-1r" value="Corporate Events">
                    corporate events
                  </Radio.Button>
                  <Radio.Button value="Party Favors">party favors</Radio.Button>
                  <Radio.Button value="Birthday Gifts">
                    birthday gifts
                  </Radio.Button>
                  <Radio.Button value="Wedding">wedding</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <div className="other-wrapper">
                <div className="other-label">other:</div>
                <div className="other-field">
                  <Form.Item
                    className="float-right text-align-right"
                    name="otherPurpose"
                  >
                    <Input className="other-input" />
                  </Form.Item>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row" span={24} lg={8}>
                estimated quantity<span className="color-red">*</span>
                <br />
                <p className="sub-text">
                  (what is the estimated quantity
                  <br />
                  that you need?)
                </p>
              </Col>
            ) : (
              <Col className="gutter-row title-field" span={24} lg={8}>
                estimated quantity<span className="color-red">*</span>
                <br />
                <p className="sub-text">
                  (what is the estimated quantity that you need?)
                </p>
              </Col>
            )}

            <Col className="gutter-row" span={24} lg={16}>
              <Form.Item
                name="quantity"
                rules={[
                  { required: true, message: "(please input the quantity)" },
                ]}
              >
                <Slider min={30} max={300} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row title-field" span={24} lg={8}>
              packaging<span className="color-red">*</span>
              <br />
              <p className="sub-text mb-subtext">(do you need packaging?)</p>
            </Col>
            <Col className="gutter-row" span={24} lg={16}>
              <Form.Item
                name="packaging"
                rules={[
                  { required: true, message: "(please input the packaging)" },
                ]}
              >
                <Radio.Group>
                  <Radio.Button className="mr-px" value="YES">
                    yes
                  </Radio.Button>
                  <Radio.Button value="NO">no</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row" span={24} lg={8}>
                when<span className="color-red">*</span>
                <br />
                <p className="sub-text">
                  (when do you need this
                  <br />
                  order ready by?)
                </p>
              </Col>
            ) : (
              <Col className="gutter-row title-field" span={24} lg={8}>
                when<span className="color-red">*</span>
                <br />
                <p className="sub-text mb-subtext">
                  (when do you need this order ready by?)
                </p>
              </Col>
            )}
            <Col className="when-field gutter-row" span={24} lg={16}>
              <Form.Item
                className="item"
                name="day"
                rules={[{ required: true, message: "(please input the day)" }]}
              >
                <Input placeholder="dd" type="number" />
              </Form.Item>
              <Form.Item
                className="item"
                name="month"
                rules={[
                  { required: true, message: "(please input the month)" },
                ]}
              >
                <Input placeholder="mm" type="number" />
              </Form.Item>
              <Form.Item
                className="item"
                name="year"
                rules={[{ required: true, message: "(please input the year)" }]}
              >
                <Input placeholder="yy" type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row" span={24} lg={8}>
                where<span className="color-red">*</span>
                <br />
                <p className="sub-text">
                  (where will the order be
                  <br />
                  delivered to?)
                </p>
              </Col>
            ) : (
              <Col className="gutter-row title-field" span={24} lg={8}>
                where<span className="color-red">*</span>
                <br />
                <p className="sub-text mb-subtext">
                  (where will the order be delivered to?)
                </p>
              </Col>
            )}

            <Col className="gutter-row" span={24} lg={16}>
              <Form.Item
                name="where"
                rules={[
                  { required: true, message: "(please input the address)" },
                ]}
              >
                <Input placeholder="region, city, etc." />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row title-field" span={24} lg={8}>
                would you like a<br />
                vat invoice issued?
              </Col>
            ) : (
              <Col className="gutter-row title-field" span={24} lg={8}>
                would you like a vat invoice issued?
              </Col>
            )}

            <Col className="gutter-row" span={24} lg={16}>
              <Form.Item name="invoiceIssued">
                <Radio.Group>
                  <Radio.Button className="mr-px" value="YES">
                    yes
                  </Radio.Button>
                  <Radio.Button value="NO">no</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row" span={24} lg={8}>
                additional notes
                <br />
                <p className="sub-text">
                  (anything else that you would like
                  <br />
                  us to know?)
                </p>
              </Col>
            ) : (
              <Col className="gutter-row title-field" span={24} lg={8}>
                additional notes
                <br />
                <p className="sub-text mb-subtext">
                  (anything else that you would like us to know?)
                </p>
              </Col>
            )}

            <Col className="gutter-row" span={24} lg={16}>
              <Form.Item name="notes">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {widthScreen > 991 ? (
              <Col className="gutter-row title-field" span={24} lg={8}>
                how did you
                <br />
                discover yeoubi?
              </Col>
            ) : (
              <Col
                className="gutter-row title-field mb-subtext"
                span={24}
                lg={8}
              >
                how did you discover yeoubi?
              </Col>
            )}
            <Col className="gutter-row" span={24} lg={16}>
              <Form.Item name="discoverYeoubi">
                <Radio.Group>
                  {widthScreen > 991 ? (
                    <Radio.Button className="mb-1r" value="IG/FB">
                      ig/fb
                    </Radio.Button>
                  ) : (
                    <Radio.Button className="mb-1r" value="IG/FB">
                      ig/fb
                    </Radio.Button>
                  )}

                  <Radio.Button className="mb-1r" value="GOOGLE">
                    google
                  </Radio.Button>
                  <Radio.Button value="FRIEND/FAMILY">
                    friend/family
                  </Radio.Button>
                  <Radio.Button value="OTHER">other</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={24} lg={8}></Col>
            <Col className="gutter-row" span={24} lg={16}>
              <Form.Item>
                <Button
                  className="btn-submit"
                  type="primary"
                  htmlType="submit"
                  disabled={isDisabled}
                >
                  submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <span className="float-right sub-text">
                (<span className="color-red">*</span>required field)
              </span>
            </Col>
          </Row>
          <Row className="contact">
            <Col className="gutter-row" span={24}>
              <span className="text">
                for general inquiries about our products and services, please
                contact us at contact@atyeoubi.com.
              </span>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Inquiry;
