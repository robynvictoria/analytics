import React, { useEffect } from "react";
import Router from "next/router";

const Dashboard = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/races");
    }
  });
};

export default Dashboard;
