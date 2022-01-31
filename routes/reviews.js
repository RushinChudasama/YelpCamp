const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../Utils/catchAsync');
const Review = require('../models/review');
const Campground = require('../models/campgrounds');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const reviews = require('../controllers/reviews');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;