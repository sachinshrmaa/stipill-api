import { validationResult } from "express-validator"
import userSchema from "../Models/userSchema.js"
import hashPassword from "../Utils/hashPassword.js"

const Signup = async (req, res) => {
  const { name, email, password } = req.body
  const error = validationResult(req)
  if (!error.isEmpty()) return res.send(error.array())
  const isEmailFound = await userSchema.findOne({ email: email })
  if (isEmailFound) {
    return res
      .status(404)
      .json({ status: false, message: "Email already exists" })
  }
  const newPassword = await hashPassword(password)
  const user = new userSchema({ name, email, password: newPassword })
  const result = await user.save()
  if (!result) {
    return res.status(400).json({
      status: false,
      message: "There was an error in while doing signup",
    })
  }
  res.status(200).json({ status: true, message: "Signup Successful" })
}

const findAllUsers = async (req, res) => {
  const user = await userSchema.find({})
  res.json(user)
}
export default { Signup, findAllUsers }
