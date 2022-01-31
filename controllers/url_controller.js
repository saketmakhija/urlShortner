const Url = require('../models/url');
const nanoid = require('nanoid');

module.exports.createUrl = (req, res)=>{
    Url.findOne({url: req.body.url}, (err, url)=>{
        if(err){
            console.log('error in finding short url');
            return;
        }
        if(!url){
            Url.create(
            {url: req.body.url,
             hcode: nanoid.nanoid(6)
            }, (err, url)=>{
                if(err){
                    console.log('error in gebnerating short url');
                    return;
                }
                return res.render('shortner', {hcode: url.hcode, title: 'shortit!'});
            });
        }else{
            return res.render('shortner', {hcode: url.hcode, title: 'shortit!'});
        }
    });
}

module.exports.openUrl = (req, res)=>{
    Url.findOne({hcode: req.body.hcode}, (err, url)=>{
        if(err){
            console.log('error in finding url');
            return;
        }
        if(url){
            res.redirect(url.url);
        }
        return res.redirect('back');
    })
}