import bcrypt from "bcryptjs"
import userSchema from "../Models/userSchema.js"

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const isDataFound = await userSchema.findOne({ email: email })
    if (!isDataFound) {
      return res.status(404).json({ status: false, message: "Invalid" })
    }
    const hashPassword = isDataFound.password
    const isMatch = await bcrypt.compare(password, hashPassword)
    if (isMatch != true)
      return res.status(404).json({ status: false, message: "Invalid" })
    res.status(200).json({ ststus: true, message: "Login Successful" })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export default Login
