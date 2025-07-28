import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // missing password field

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dlbqw7atu/image/upload/v1747734054/userImage_dhytay.png",
    },
    role: {
      type: String,
      enum: ["admin", "user", "deliveryman"],
      default: "user",
    },

    addresses: [
      {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        postalCode: { type: String, required: true },
        isDefault: { type: Boolean, default: false },
      },
    ],

    wishlist: [],
    cart: [],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
