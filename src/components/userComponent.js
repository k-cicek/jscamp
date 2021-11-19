import { BaseLogger } from "../crossCuttingConcerns/logging/loger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi");

let logger1 = new BaseLogger();
let userService = new UserService(logger1);

let user1 = new User(1,"Kevser", "Çiçek", "İstanbul");
let user2 = new User(2,"Ilgın", "Kazdal", "İstanbul");

userService.add(user1);
userService.add(user2);

console.log(userService.list())
console.log(userService.getById(2))

