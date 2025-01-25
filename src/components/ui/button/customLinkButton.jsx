import React from "react";
import { Link } from "react-router-dom";

const CustomLinkButton = ({ Icon, color, ref }) => {
  return <Link href={ref}>{Icon && <Icon style={{ color: color }} />}</Link>;
};

export default CustomLinkButton;
