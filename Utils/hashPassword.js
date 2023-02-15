import bcrypt from "bcryptjs"

const hashPassword = async (password) => {
  try {
    const newPassword = await bcrypt.hash(password, 10)
    return newPassword
  } catch (error) {
    throw new Error("Internal Server Error")
  }
}
export default hashPassword
