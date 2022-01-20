const introRoot = (req, res) => {
    let jwtname = req.body.jwtname;
    res.render('intro/intro', { name: jwtname, cookie: req.cookies.user });
}

const getBusiness = (req, res) => {
    let jwtname = req.body.jwtname;
    res.render('intro/business', { name: jwtname, cookie: req.cookies.user });
}

const getOrganization = (req, res) => {
    let jwtname = req.body.jwtname;
    res.render('Intro/organization', { name: jwtname, cookie: req.cookies.user });
}

module.exports = {
    introRoot,
    getBusiness,
    getOrganization
}