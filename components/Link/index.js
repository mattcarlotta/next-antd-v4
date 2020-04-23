import React from "react";
import Link from "next/link";
import { Button } from "antd";

const CustomLink = ({ children, href }) => (
  <Button type="primary">
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </Button>
);

export default CustomLink;
