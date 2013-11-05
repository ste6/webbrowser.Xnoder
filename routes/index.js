
/*
 * GET home page.
 */

exports.index = function(req, res){


  res.render('index', { title: 'Express Browser' });


};

exports.webpage= function(req, res){


  res.render('webpage', { title: 'Express Browser' });


};

exports.newAddress = function (req, res) {

    var newAddress = req.body.address;
    console.log(newAddress);

    res.render("webpage", { title: newAddress });
  //  res.redirect("webpage", { title: "lol" }, { source: newAddress });

};