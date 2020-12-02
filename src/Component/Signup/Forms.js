import React from "react";
import { useStep } from "react-hooks-helper";
import AccountInfo from "./AccountInfo";
import VerifyInfo from "./VerifyInfo";
import Personalinfo from "./Personalinfo";

const steps = [{ id: "account" }, { id: "verify" }, { id: "contact" }];

const Forms = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const props = { navigation };

  switch (id) {
    case "account":
      return <AccountInfo {...props} />;
    case "verify":
      return <VerifyInfo {...props} />;
    case "contact":
      return <Personalinfo {...props} />;
    default:
      return null;
  }
};

export default Forms;
