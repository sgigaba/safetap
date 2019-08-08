router.get('/api', function(req, res, next) {
    console.log(req.query);
    var newUser = new User({
      studentId: 1234,
      firstname: req.query.name
    })
  
  
    newUser.save(function(err, user) {
      console.log(user);
      User.find({}, function (err, doc) {
        if (err)
          throw err;
        console.log(doc);
        res.render('index', { title: user.firstname });
      })
    })
  });