// ===========================express and router===========================
const express = require("express");
const router = express.Router();

// ===========================import routes===========================
const {
    createNewProject,
    getAllProjects,
    getAllUserProjects,
    getProjectById,
    editProject,
    toggleLikes,
    addComment,
    deleteProject,
} = require("../Controllers/ProjectController");
const {protection} = require("../Middleware/protectionMiddleware")

// ===========================all routes===========================
// =========================Create=========================
// 1) Create new project
// unprotected route
router.post("/",protection,createNewProject)

// =========================Read=========================
// 1) Get all projects from database
// only for testing 
router.get("/",getAllProjects)

// 2) Get all projects of a specific user
// unprotected route
router.get("/:userId",getAllUserProjects)

// 3) Get project by Id
// unprotected route
router.get("/:projectId",getProjectById)

// =========================Update=========================
// 1) Edit project details (except for likes and comments)
// protected route
router.put("/:projectid",editProject)

// 2) Like/Unlike a project
// unprotectedroute
router.put("/like",toggleLikes)

// 3) Comment on a post
router.put("/comment/add",addComment)


// =========================Delete=========================
// 1) Delete a project
router.delete("/:projectId",deleteProject)

// ===========================routes===========================
module.exports = router;
