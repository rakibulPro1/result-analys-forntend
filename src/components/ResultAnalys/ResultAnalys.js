import React, { useState } from "react";
import {
  Col,
  Container,
  Image,
  Row,
  ProgressBar,
  Badge,
} from "react-bootstrap";
import resultAnalysImg from "../../images/result-analys/result-analysis.png";
import "./ResultAnalysis.css";

const ResultAnalys = () => {
  const [result, setResult] = useState({});
  const [studentId, setStudentId] = useState("");
  const getStudentId = (e) => {
    setStudentId(e.target.value);
  };
  const handleResult = () => {
    fetch(`https://floating-plains-03367.herokuapp.com/results/${studentId}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  };

  // get total percentage
  const subjectCount = 5;
  const totalMarks =
    parseInt(result.math) +
    parseInt(result.pysics) +
    parseInt(result.chemistry) +
    parseInt(result.biology) +
    parseInt(result.english);
  const totalPercentage = Math.floor(totalMarks / subjectCount);
  console.log(totalPercentage);

  return (
    <Container>
      <h1
        className="mt-3 mb-5 text-center px-2"
        style={{ color: "#544af4", fontWeight: "bold" }}
      >
        Result Aalays
      </h1>
      <Row xs={1} md={2} className="g-4">
        <Col className="">
          <h3 className="fw-bold mb-4">Get Result With Percentage Lavel</h3>
          <div className="d-block">
            <input
              onChange={getStudentId}
              type="number"
              placeholder="Student Id"
              className="form-control mb-3 w-100 w-md-50"
            />
            <button onClick={handleResult} className="result-btn">
              Result
            </button>
          </div>
          <div className="progress-area mt-5">
            <h3 className="fw-bold mb-3">Subject Percentage</h3>
          </div>
          {/* Math  */}
          <div className="mb-3">
            <h4>Mathematics :</h4>
            <ProgressBar
              variant={
                result.math < 30
                  ? "danger"
                  : result.math < 50
                  ? "info"
                  : result.math < 70
                  ? "warning"
                  : result.math < 90
                  ? "primary"
                  : "success"
              }
              now={result.math || 0}
              label={`${result.math}%`}
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "white",
                height: "22px",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* Physics  */}
          <div className="mb-3">
            <h4>Physics :</h4>
            <ProgressBar
              variant={
                result.pysics < 30
                  ? "danger"
                  : result.pysics < 50
                  ? "info"
                  : result.pysics < 70
                  ? "warning"
                  : result.pysics < 90
                  ? "primary"
                  : "success"
              }
              now={result.pysics || 0}
              label={`${result.pysics}%`}
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "white",
                height: "22px",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* Chemestry  */}
          <div className="mb-3">
            <h4>Chemistry :</h4>
            <ProgressBar
              variant={
                result.chemistry < 30
                  ? "danger"
                  : result.chemistry < 50
                  ? "info"
                  : result.chemistry < 70
                  ? "warning"
                  : result.chemistry < 90
                  ? "primary"
                  : "success"
              }
              now={result.chemistry || 0}
              label={`${result.chemistry}%`}
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "white",
                height: "22px",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* Biology  */}
          <div className="mb-3">
            <h4>Biology :</h4>
            <ProgressBar
              variant={
                result.biology < 30
                  ? "danger"
                  : result.biology < 50
                  ? "info"
                  : result.biology < 70
                  ? "warning"
                  : result.biology < 90
                  ? "primary"
                  : "success"
              }
              now={result.biology || 0}
              label={`${result.biology}%`}
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "white",
                height: "22px",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* English  */}
          <div className="mb-3">
            <h4>English :</h4>
            <ProgressBar
              variant={
                result.english < 30
                  ? "danger"
                  : result.english < 50
                  ? "info"
                  : result.english < 70
                  ? "warning"
                  : result.english < 90
                  ? "primary"
                  : "success"
              }
              now={result.english || 0}
              label={`${result.english}%`}
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "white",
                height: "22px",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* Total Percentage  */}
          <div className="mt-5">
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold fs-3">Total Percentage :</span>
              <Badge
                className="px-3"
                style={{ borderRadius: "10px" }}
                bg={
                  totalPercentage < 30
                    ? "danger"
                    : totalPercentage < 50
                    ? "info"
                    : totalPercentage < 70
                    ? "warning"
                    : totalPercentage < 90
                    ? "primary"
                    : "success"
                }
              >
                {totalPercentage < 30
                  ? "Fail"
                  : totalPercentage < 50
                  ? "Pass"
                  : totalPercentage < 70
                  ? "Good Result"
                  : totalPercentage < 90
                  ? "Excellent Result"
                  : "Supper Result"}
              </Badge>
            </div>
            <ProgressBar
              variant={
                totalPercentage < 30
                  ? "danger"
                  : totalPercentage < 50
                  ? "info"
                  : totalPercentage < 70
                  ? "warning"
                  : totalPercentage < 90
                  ? "primary"
                  : "success"
              }
              now={totalPercentage || 0}
              label={`${totalPercentage}%`}
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "white",
                height: "25px",
                borderRadius: "15px",
              }}
            />
          </div>
        </Col>
        <Col className=" d-flex justify-content-center">
          <Image fluid src={resultAnalysImg}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default ResultAnalys;
