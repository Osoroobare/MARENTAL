const router = require("express").Router();
const Owner = require("../models/Owner");
const bcrypt = require("bcrypt");
const verify = require("../verifyToken");


//UPADTE
router.put("/:id", verify, async (req, res) => {
  if (req.owner.id === req.params.id || req.owner.isAdmin) {
    if (req.body.password) {
      req.body.password = bcrypt.hash(
        req.body.password,
        'my_secret_key'
      );//.toString();
    }
    try {
      const  updatedowner = await Owner.findByIdAndUpdate(
        req.params.id,
        {
          $set:req.body
        },
        { new: true }
      );
      res.redirect("/frontend/housify/src/components/templates/LoginForm.js");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only update your account!")
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.owner.id === req.params.id || req.owner.isAdmin) {
    try {
      await Owner.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only delete your account!")
  }
});

//GET
router.get("/find/:id", async (req, res) => {
    try {
      const owner = await owner.findById(req.params.id);
      const { password, ...info } = owner._doc;
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ALL
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.owner.isAdmin) {
    try {
      const owner = query ? await Owner.find().sort({_id:-1}).limit(5) : await Owner.find();
      res.status(200).json(owners);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users...")
  }
});

//GET USER STATS
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    const data = await Owner.aggregate([
      {
        $project:{
          month: {$month: "$createdAt"}
        }
      },{
        $group: {
          _id: "$month",
          total: {$sum:1}
        }
      }
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
