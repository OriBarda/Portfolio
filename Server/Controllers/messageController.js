const Message = require("../Models/messageModel"); 

exports.sendMessage = async (req, res) => {
  try {
    const message = req.body;
    const newMessage = await Message.create(message); 
    res.status(201).json(newMessage); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
