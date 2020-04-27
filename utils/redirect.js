import Router from "next/router";

export const redirectToLogin = (server) => {
  const login = "/?redirected=true";
  if (server) {
    server.writeHead(302, {
      Location: login,
    });
    server.end();
  } else {
    Router.push(login);
  }
};

export const redirectToHome = (server) => {
  const home = "/home?redirected=true";
  if (server) {
    server.writeHead(302, {
      Location: home,
    });
    server.end();
  } else {
    Router.push(home);
  }
};