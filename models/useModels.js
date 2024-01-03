import mongoose from "mongoose";

let User;

try {
    User = mongoose.model('User');
} catch (error) {
    if (error.name === 'OverwriteModelError') {
        User = mongoose.model('User');
    } else {
        const UserSchema = new mongoose.Schema({
            userName: {
                type: String,
                required: [true, "Must provide a username"],
                unique: [true, "Must be unique"],
            },
            email: {
                type: String,
                required: [true, "Must provide an email"],
                unique: [true, "Must be unique"],
            },
            password: {
                type: String,
                required: [true, "Must provide a password"],
            },
            roles: {
                type: [String],
                default: ['user'],
            },
            isEmailVerified: {
                type: Boolean,
                default: false,
            },
            isDeleted: {
                type: Boolean,
                default: false,
            },
            isActive: {
                type: Boolean,
                default: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
            updatedAt: {
                type: Date,
                default: Date.now,
            },
        });

        // Middleware to update 'updatedAt' field before saving
        UserSchema.pre('save', function (next) {
            this.updatedAt = new Date();
            next();
        });

        User = mongoose.model('User', UserSchema);
    }
}

export default User;
