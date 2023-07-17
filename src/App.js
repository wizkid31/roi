import { useState } from "react";
import "./App.scss";
//bootstrap import
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const fields = [
    "Number of Reps",
    "Number of Demos per Rep (Monthly)",
    "Close Rate (%)",
    "Sales Cycle (in Months)",
    "Average Annual Contract Value ($)",
    "Current Value",
    "Increase in number of Demos (Monthly)",
    "Discover",
    "(Contact database, Mobile Phone Numbers, Advanced Search, Chrome Extension) ",
    "Discover + Connect",
    "(Autodialer, Email Sequences, AI Generated Emails, AI Call Coaching)",
  ];
  const [demosPerRep, setDemosPerRep] = useState(0);
  const [discover, setDiscover] = useState(0);
  const [discoverNconnect, setDiscoverNconnect] = useState(0);
  const [inputs, setInputs] = useState({
    reps: 0,
    cr: 0,
    sc: 0,
    aa: 0,
    increaseDemos: 0,
  });
  const handleChangeInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: Number(event.target.value),
    });
  };
  const handle1 = (event) => {
    const value = Number(event.target.value);
    setDemosPerRep(value);
    setDiscover(2 * value);
    setDiscoverNconnect(3 * value);
  };
  const handle2 = (event) => {
    const value = Number(event.target.value);
    setDemosPerRep(value / 2);
    setDiscover(value);
    setDiscoverNconnect(1.5 * value);
  };
  const handle3 = (event) => {
    const value = Number(event.target.value);
    setDemosPerRep(value / 3);
    setDiscover(value / 1.5);
    setDiscoverNconnect(value);
  };
  const calculateCV = () => {
    const ans =
      inputs.reps *
      demosPerRep *
      (inputs.cr / 100) *
      (11 - inputs.sc) *
      inputs.aa;
    return Number(ans).toFixed(0);
  };
  const calculateMin = () => {
    const ans =
      inputs.reps *
      2 *
      demosPerRep *
      (inputs.cr / 100) *
      (11 - inputs.sc) *
      inputs.aa;
    return Number(ans).toFixed(0);
  };
  const calculateMax = () => {
    const ans =
      inputs.reps *
      3 *
      demosPerRep *
      (inputs.cr / 100) *
      (11 - inputs.sc) *
      inputs.aa;
    return Number(ans).toFixed(0);
  };
  return (
    <>
      <Container
        style={{
          fontFamily: "PlusJakartaSans-Medium",
          color: "#1c3b71",
          padding: "50px 0px",
          fontSize: 17,
        }}
      >
        {/* ------------------------------------- */}
        <Row>
          <Row style={{ textAlign: "center" }}>
            <h4 style={{ fontFamily: "PlusJakartaSans-SemiBold" }}>
              ROI Calculator
            </h4>
          </Row>
          <Row
            style={{
              backgroundColor: "#F0F5FD",
              width: "50%",
              margin: "20px auto",
              verticalAlign: "center",
              paddingRight: 3,
            }}
          >
            <Col
              lg={{ span: 8 }}
              style={{
                color: "#616680",
                paddingTop: 5,
              }}
            >
              {fields[0]}
            </Col>
            <Col style={{ padding: "4px 0px 4px 0px" }}>
              <input
                min="0"
                className="inputs"
                type="number"
                onChange={handleChangeInput}
                style={{
                  width: "60%",
                  color: "#1c3b71",
                  textAlign: "right",
                  border: "none",
                  float: "right",
                  fontSize: 19,
                  fontFamily: "PlusJakartaSans-SemiBold",
                }}
                name="reps"
                value={inputs.reps}
              />
            </Col>
          </Row>
        </Row>
        {/* ----------------------------------------------------- */}
        <Row>
          <Col>
            <Row>
              <h5 style={{ textAlign: "center" }}>Without Infotelligent</h5>
            </Row>
            <Row
              style={{
                backgroundColor: "#f6f9fe",
                margin: "10px auto",
                verticalAlign: "center",
                paddingRight: 3,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{ fontSize: 16, color: "#616680", paddingTop: 5 }}
              >
                {fields[1]}
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <input
                  min="0"
                  className="inputs"
                  type="number"
                  onChange={handle1}
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                  }}
                  name="demosPerRep"
                  value={demosPerRep}
                />
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "#F0F5FD",
                margin: "10px auto",
                verticalAlign: "center",
                paddingRight: 3,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{ fontSize: 16, color: "#616680", paddingTop: 5 }}
              >
                {fields[2]}
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <input
                  min="0"
                  className="inputs"
                  type="number"
                  onChange={handleChangeInput}
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                  }}
                  name="cr"
                  value={inputs.cr}
                />
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "#F6f9fe",
                margin: "10px auto",
                verticalAlign: "center",
                paddingRight: 3,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{ fontSize: 16, color: "#616680", paddingTop: 5 }}
              >
                {fields[3]}
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <input
                  min="0"
                  className="inputs"
                  type="number"
                  onChange={handleChangeInput}
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                  }}
                  name="sc"
                  value={inputs.sc}
                />
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "#F0F5FD",
                margin: "10px auto",
                verticalAlign: "center",
                paddingRight: 3,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{ fontSize: 16, color: "#616680", paddingTop: 5 }}
              >
                {fields[4]}
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <input
                  min="0"
                  className="inputs"
                  type="number"
                  onChange={handleChangeInput}
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                  }}
                  name="aa"
                  value={inputs.aa}
                />
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "#F6f9fe",
                margin: "10px auto 0px auto",
                verticalAlign: "center",
                paddingRight: 3,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{
                  fontSize: 16,
                  paddingTop: 5,
                  color: "#1c3b71",
                  fontFamily: "PlusJakartaSans-SemiBold",
                }}
              >
                {fields[5]}
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <span
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                    padding: "2.5px 15px 2.5px 0px",
                    backgroundColor: "#fff",
                  }}
                >
                  {calculateCV()}
                </span>
              </Col>
            </Row>
          </Col>
          {/* -------------divider---------------- */}
          {/* ------------divider---------------- */}
          <Col style={{ borderLeft: "1px solid #616680" }}>
            <Row>
              <h5 style={{ textAlign: "center" }}>With Infotelligent</h5>
            </Row>
            <Row
              style={{
                backgroundColor: "#F6f9fe",
                margin: "10px auto 14px auto",
                verticalAlign: "center",
                paddingRight: 3,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{
                  color: "#616680",
                  paddingTop: 5,
                  fontSize: 16,
                }}
              >
                {fields[6]}
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <input
                  min="0"
                  className="inputs"
                  type="number"
                  onChange={handleChangeInput}
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                  }}
                  name="increaseDemos"
                  value={inputs.increaseDemos}
                />
              </Col>
            </Row>
            {/* -------------------------- */}
            <Row
              style={{
                backgroundColor: "#F0F5FD",
                margin: "10px auto 14px auto",
                verticalAlign: "center",
                paddingRight: 7,
                paddingBottom: 5,
                paddingTop: 4,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{
                  fontSize: 16,
                  color: "#616680",
                  paddingTop: 5,
                }}
              >
                {fields[7]}
                <br />
                <span style={{ fontSize: 14 }}>{fields[8]}</span>
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <input
                  min="0"
                  className="inputs"
                  type="number"
                  onChange={handle2}
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                    height: "100%",
                  }}
                  name="discover"
                  value={discover}
                />
              </Col>
            </Row>
            {/* ------------------------------------- */}
            <Row
              style={{
                backgroundColor: "#f6f9fe",
                margin: "10px auto 0px auto",
                verticalAlign: "center",
                paddingRight: 7,
                paddingBottom: 5,
                paddingTop: 4,
              }}
            >
              <Col
                lg={{ span: 8 }}
                style={{
                  fontSize: 16,
                  color: "#616680",
                  paddingTop: 5,
                }}
              >
                {fields[9]}
                <br />
                <span style={{ fontSize: 14 }}>{fields[10]}</span>
              </Col>
              <Col style={{ padding: "4px 0px 4px 0px" }}>
                <input
                  min="0"
                  className="inputs"
                  type="number"
                  onChange={handle3}
                  style={{
                    fontFamily: "PlusJakartaSans-SemiBold",
                    color: "#1c3b71",
                    width: "60%",
                    textAlign: "right",
                    border: "none",
                    float: "right",
                    fontSize: 19,
                    height: "100%",
                  }}
                  name="discoverNconnect"
                  value={discoverNconnect}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* -------------------------w/o infotelligent------------- */}
        <Row
          style={{
            backgroundColor: "#f0f5fd",
            margin: "30px auto",
            padding: "8px",
          }}
        >
          <Row style={{ position: "relative" }}>
            <p
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "PlusJakartaSans-SemiBold",
                letterSpacing: "2px",
              }}
            >
              Expected increase in net value
            </p>
          </Row>
          {/* ------min col--------- */}
          <Col
            span={{ lg: 6 }}
            style={{
              margin: "5px",
              borderRadius: 4,
              textAlign: "center",
              padding: "10px 10px 10px 20px",
              fontSize: 20,
              fontFamily: "PlusJakartaSans-Bold",
              background: "linear-gradient(90deg, #616680 11%, #fff 11%)",
            }}
          >
            <span
              style={{
                float: "left",
                backgroundColor: "#616680",
                color: "#fff",
                fontFamily: "PlusJakartaSans-Medium",
                height: "100%",
                textAlign: "center",
              }}
            >
              Min
            </span>
            $ {calculateMin()}
          </Col>
          <span
            style={{
              position: "absolute",
              left: "48.2%",
              top: "73%",
              backgroundColor: "#f0f5fd",
              height: 35,
              width: 35,
              fontSize: 20,
              textAlign: "center",
              borderRadius: "50%",
            }}
          >
            -
          </span>
          {/* ------max col-------- */}
          <Col
            lg={{ span: 6 }}
            style={{
              borderRadius: 4,
              textAlign: "center",
              padding: "10px 20px 10px 10px",
              fontSize: 20,
              margin: "5px",
              fontFamily: "PlusJakartaSans-Bold",
              background: "linear-gradient(to left, #616680 12%, #fff 12%)",
            }}
          >
            <span
              style={{
                float: "right",
                backgroundColor: "#616680",
                color: "#fff",
                fontFamily: "PlusJakartaSans-Medium",
                height: "100%",
                textAlign: "center",
              }}
            >
              Max
            </span>
            $ {calculateMax()}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
