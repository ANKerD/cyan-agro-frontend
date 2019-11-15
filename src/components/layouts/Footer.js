import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

// export default props => <div>This is my Footer</div>;

const Footer = () => {
  return (
    <Typography
      style={{ marginTop: 300, marginBottom: 40 }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit">Cyan Agroanalytics</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
