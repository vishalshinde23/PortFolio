const mongoose = require("mongoose");
const nodemailer = require('nodemailer');
const Queue = require('bull');

// Initialize the Nodemailer transporter once
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Initialize a job queue for email processing
const emailQueue = new Queue('emailQueue');

// Define your schema
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

// Add a job to the queue after a document is saved
fileSchema.post('save', function (doc) {
    emailQueue.add({
        email: doc.email,
        message: doc.message
    });
});

// Process the email queue
emailQueue.process(async (job, done) => {
    const { email, message } = job.data;

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.MAIL_USER,
            subject: 'Contact for portfolio',
            html: `<h2>Hello Vishal</h2><p>This is a message from <h3>${email}</h3><p>${message}</p>`
        });
        done();  // Mark the job as completed
    } catch (error) {
        done(error);  // Handle the error if sending fails
    }
});

module.exports = mongoose.model("File", fileSchema);
