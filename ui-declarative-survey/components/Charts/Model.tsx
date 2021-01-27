import { NextPage } from "next";
import React from "react";
import { Doughnut } from "react-chartjs-2";

interface IProps {
  data: any[];
  type: "star" | "issues" | "contributors" | "ask_questions" | "npm" | null;
  package?: string;
  name?: string;
}


const App: NextPage<IProps> = ({ data, type }) => {
  const response = {
    datasets: [
      {
        label: "Label",
        order: 0,
        data,
        backgroundColor: [
          "#f94144",
          "#f3722c",
          "#f8961e",
          "#f9844a",
          "#f9c74f",
          "#90be6d",
          "#43aa8b",
          "#4d908e",
          "#577590",
          "#277da1",
          "#001845",
          "#3a5a40",
        ],
        borderWidth: 8,
        borderColor: "#fff",
        hoverBorderColor: "#ffff",
      },
    ],
    labels: [
      "Ant-designer",
      "Material-UI",
      "Chackria",
      "Styled-system",
      "Semantic-UI",
      "React-bootstrap"
    ],
  };

  if (type == "star") {
    return (
      <>
        <h2 className="font-weight-bold text-center">Variável: Start (Github)</h2>
        <Doughnut data={response} />
      </>
    );
  }

  if (type == "issues") {
    return (
      <>
        <h2 className="font-weight-bold text-center">Variável: Issues (Github)</h2>
        <Doughnut data={response} />
      </>
    );
  }

  if (type == "contributors") {
    return (
      <>
        <h2 className="font-weight-bold text-center">Variável: Contribuidores (Github)</h2>
        <Doughnut data={response} />
      </>
    );
  }
  if (type == "ask_questions") {
    return (
      <>
        <h2 className="font-weight-bold text-center">
          Variável: Questões no Stackoverflow
        </h2>
        <Doughnut data={response} />
      </>
    );
  }
  if (type == "npm") {
    return (
      <>
        <h2 className="font-weight-bold text-center">Variável: NPM</h2>
        <Doughnut data={response} />
      </>
    );
  }

  return null;
};

export default App;
