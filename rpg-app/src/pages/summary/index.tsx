import React from "react";
import { Redirect } from "react-router-dom";

interface SummaryProps {
  authorized: boolean;
}

const Summary: React.FC<SummaryProps> = ({ authorized }) => {
  if (authorized) {
    return <div>DEU BOM</div>;
  } else {
    return <div>DEU RUIM</div>;
  }
};

export default Summary;
