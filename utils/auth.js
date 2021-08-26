// middle ware goes in aurh.js

const withAuth = (req, res, next )=>{
  if(!req.session.userId){
    res.redirect("/login");
  }else{
    next();
  }
};
// export
module.exports = withAuth;