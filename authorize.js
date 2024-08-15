const authorize = (req, res, next)=>{
    const {user} = req.query;
    if (user == 'vivek'){
        req.user = {name : 'vivek', is: 3};
        next();
    }
    else{
        res.status(401).send('unable to authorize');
    }
}

module.exports = authorize