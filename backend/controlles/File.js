const File = require("../Models/File");

// AddFile Controller
exports.addFile = async (req, res) => {
  try {
    // Destructure body once
    const { name, email, message } = req.body;

    // Validate inputs early to avoid unnecessary DB calls
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // Create new user file entry in DB
    const user = await File.create({
      name,
      email,
      message,
    });

    // Respond immediately after successful creation
    return res.status(200).json({
      success: true,
      data: user,
      message: "File created successfully",
    });

  } catch (error) {
    // Asynchronous logging for production (replace with real logger)
    console.error(error.message);

    // Fail fast
    return res.status(500).json({
      success: false,
      message: "Something went wrong during file creation",
    });
  }
};
