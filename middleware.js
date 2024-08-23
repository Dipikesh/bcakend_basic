exports.validation = (req, res, next) => {
    console.log("Request accepted by validator")
  const email = req.body.email;
  const password = req.body.password;

  console.log({email: email, password: password})
  if (!email || !password) {
    return res.send("Please enter a valid email or password");
  }

  next();
};
