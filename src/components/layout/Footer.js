import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import Image from "../elements/Image";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import { Link } from "react-router-dom";
import { Radio, Typography, Divider } from "antd";
import {
  CheckOutlined,
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
} from "@ant-design/icons";

import { Row, Col } from "antd";
const { Paragraph } = Typography;
const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer
      {...props}
      className={classes}

      // style={{ background: "rgb(219,100,36)", color: "#ffff", height: "360px" }}
    >
      {/* <Row style={{ padding: "40px 60px" }}>
        <Col span={6}>
          <div className="footer-top space-between text-xxs">
            <Logo />
          </div>
        </Col>
        <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Typography.Title level={3} style={{ color: "#ffff" }}>
              Services
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>Web design & development</li>
              <li style={{ margin: "8px 0px" }}>Point of Sales System</li>
              <li>Software Quality Assurance</li>
            </ul>
          </div>
        </Col>
        <Col
          span={3}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <Typography.Title level={3} style={{ color: "#ffff" }}>
              About us
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>
                {" "}
                We’re a team of enthusiastic tech experts determined to inflect
                change within the digital landscape, a team from diverse
                backgrounds that is always willing to come together, work with
                the grit, transparency and proactivity needed to change the tech
                landscape starting with you!
              </li>
            </ul>
          </div>
        </Col>
        <Col
          span={9}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div style={{ width: "60%" }}>
            <Typography.Title level={3} style={{ color: "#ffff" }}>
              Our Office
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>
                Office 1205, Grosvenor Business Tower, <br /> P.O. Box: 123439,
                Tecom, Dubai, UAE
              </li>
            </ul>
          </div>
          <div style={{ width: "60%" }}>
            <Typography.Title level={5} style={{ color: "#ffff" }}>
              CONTACT DETAILS
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>Tel:  </li>
              <li>Email: services@rocket-io.com</li>
            </ul>
          </div>
        </Col>
      </Row> */}
        <div className={classNames("site-footer-inner", topDivider && "")}>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">            
            <div className="middle">
            <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    margin: "14px 14px 14px 0px",
                  }}
                >
                  <div style={{ margin: "0px 8px", padding: "10px", borderRadius: "50%", backgroundColor: "white" }}>
                    <a href="https://facebook.com/">
                      <svg
                        width="32"
                        height="30"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
                      </svg>
                    </a>
                  </div>
                  <div style={{ margin: "0px 8px", padding: "10px", borderRadius: "50%", backgroundColor: "white"}}>
                    <a href="https://twitter.com/">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter</title>
                        <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
                      </svg>
                    </a>
                  </div>
                  <div style={{ margin: "0px 8px", padding: "10px", borderRadius: "50%", backgroundColor: "white" }}>
                    <a href="https://google.com/">
                      <svg
                        width="32"
                        height="30"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <g>
                          <circle cx="12.145" cy="3.892" r="1" />
                          <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                          <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
                        </g>
                      </svg>
                    </a>
                  </div>
            </div>
            <div className="sections">
                <Link to="/" className="bet-links" >
                  Home
                </Link>
                  
                <Link to="/contact-us" className="bet-links">
                  Contact Us
                </Link>
                   
                {/* <Link to="/about-us" className="bet-links">
                  About Us
                </Link>               */}
            </div>

            <div style={{	borderTop: "1px solid white" , width: "100%", paddingTop :"10px"}} className="sections">
              All Rights Reserved.
              By
              <a
                style={{ color: "black", margin: "4px" }}
                href="http://rocket-io.com"
              >
                {" "}
                <Image
                  src={require("./../../assets/images/Rockett.png")}
                  alt="Features tile icon 01"
                  width={50}
                  height={50}
                />
              </a>
            </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
