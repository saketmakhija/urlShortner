const User = require('../models/user');

module.exports.signup = (req, res)=>{
    return res.render('signup', {
        title: 'signup'
    });
}

module.exports.signin = (req, res)=>{
    return res.render('signin', {
        title: 'signin'
    });
}

module.exports.createUser = (req, res)=>{
    //todo later
    User.findOne({email: req.body.email}, (err, user)=>{
        if(err){
            console.log('error in finding user ', err);
            return;
        }
        if(!user){
            User.create(req.body, (err, user)=>{
                if(err){
                    console.log('error in creating user ', err);
                    return;
                }
                return res.redirect('/users/signin');
            });
        }else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = (req, res)=>{
    //find the user
    User.findOne({email:req.body.email}, (err, user)=>{
        if(err){
            console.log('error in findiing user ', err);
            return;
        }
        if(user){
            //handle user found
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            return res.render('shortner',{
                name: user.name,
                title: 'shortit!',
                hcode: null,
                user: user
            });
            //return res.redirect('/');
        }
        return res.redirect('back');
    }); 

}

module.exports.signout = function(req, res){
    req.logout();
    return res.redirect('/');

}