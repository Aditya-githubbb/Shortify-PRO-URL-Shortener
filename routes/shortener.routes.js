import { Router } from "express";
import {
  postURLShortener,
  getShortenerPage,
  redirectToShortLink,
  getShortenerEditPage,
  postShortenerEditPage,
  deleteShortCode,
} from "../controllers/postshortener.controller.js";

const router = Router();

router.get("/", getShortenerPage);
router.post("/", postURLShortener);

// EDIT routes FIRST
router
  .route("/edit/:id")
  .get(getShortenerEditPage)
  .post(postShortenerEditPage);

// DELETE route
router.route("/delete/:id").post(deleteShortCode);

// 🚨 SHORT CODE ROUTE MUST BE LAST
router.get("/:shortCode", redirectToShortLink);

export const shortenerRoutes = router;
