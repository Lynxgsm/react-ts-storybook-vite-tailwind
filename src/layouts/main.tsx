import React, { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default Layout;
