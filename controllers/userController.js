import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
}

export const postJoin = (req, res) => {
  const {
    body: { name, email, Password, Password2 }
  } = req;
  if(Password !== Password2) {
    res.status(400); // status code http check
    res.render("join", { pageTitle: "Join" })
  } else {
    // To do: Register User
    // To do: Log User in
    res.redirect(routes.home)
  }
  res.render("join", { pageTitle: "Join" });
}

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // to po : process logout
  res.redirect(routes.home);
}

export const userDetail = (req, res) =>
 res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
 res.render("editProfile", { pageTitle: "Edit ProFile" });
export const changePassword = (req, res) =>
 res.render("changePassword", { pageTitle: "Change Password" });