// student.js
const mongoose = require('mongoose');

// Define the schema for a student
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true,
  }
});

// Create a model using the schema
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = Student;