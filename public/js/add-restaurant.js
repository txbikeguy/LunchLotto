// (hard) POST route for adding a restaurant to an existing group
app.post("/api/groups/:id", function (req, res) {
    console.log(req.body);
    db.Post.create({
      group_name: req.body.group_name,
      user_name: req.body.user_name
    })
      .then(function (data) {
        res.json(data);
      });
  });