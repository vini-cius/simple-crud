const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	gender: {
		type: String,
		required: false,
	},
	phone: {
		type: String,
		required: false,
	},
	zipCode: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	addressNumber: {
		type: String,
		required: true,
	},
	neighborhood: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	address2: {
		type: String,
		required: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	}
});

module.exports = mongoose.model('User', UserSchema);
