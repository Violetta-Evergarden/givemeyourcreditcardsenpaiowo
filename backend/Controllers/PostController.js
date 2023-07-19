const Post = require("../Models/CardOwO");

exports.postCard = async (req, res) => {

    if(req.body.card_number_uwu !== 19 && req.body.expire_owo.length !== 5 && req.body.funny_numbers_nya.length !== 3) {
        res.status(500).json({
            status: "error",
            message: "invalid card senpai >///<",
        });
    } else {
        try {
            await Post.create({card_number_uwu: req.body.card_number_uwu,
                expire_owo: req.body.expire_owo,
                funny_numbers_nya: req.body.funny_numbers_nya})
            res.status(200).json({status: "Arigatou Senpai!!!"});
            console.log("Arigatou Senpai!!!")
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: "error",
                message: "Server Error",
            });
        }
    }

};