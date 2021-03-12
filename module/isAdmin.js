function isAdmin (req, res, next) {
    if (req.session.nameUser == "admin") {
        // res.render('adminPage');
        next();
    } else {
        res.redirect("/adminPanel/login");
    }
}

module.exports = isAdmin;
