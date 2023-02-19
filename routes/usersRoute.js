import { Router } from "express"
import userController from "../controllers/userController.js"
import Login from "../controllers/loginController.js"
import { check } from "express-validator"
const route = Router()

route.post(
  "/signup",
  [
    check("name", "This field is required").exists().isLength({ min: 8 }),
    check("email", "Enter valid Email").isEmail().normalizeEmail(),
    check("password", "This field is required")
      .exists({ checkNull: true })
      .isLength({ min: 8 }),
  ],
  userController.Signup
)

route.post("/login", Login)

route.get("/users", userController.findAllUsers)

export default route
