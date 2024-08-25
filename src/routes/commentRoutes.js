const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');
const authenticateToken = require('../middleware/middleware');

/**
 * @openapi
 * tags:
 *   - name: Comments
 *     description: Operations related to comments on posts
 */

/**
 * @openapi
 * /posts/{postId}/comments:
 *   get:
 *     tags:
 *       - Comments
 *     summary: Get comments for a specific post
 *     description: Retrieve all comments associated with a specific post by postId
 *     parameters:
 *       - name: postId
 *         in: path
 *         required: true
 *         description: ID of the post to fetch comments for
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   postId:
 *                     type: integer
 *                     example: 1
 *                   content:
 *                     type: string
 *                     example: This is a comment.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-23T12:34:56Z
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.get('/posts/:postId/comments', authenticateToken, commentController.getComments);

/**
 * @openapi
 * /posts/{postId}/comments:
 *   post:
 *     tags:
 *       - Comments
 *     summary: Create a new comment for a specific post
 *     description: Add a new comment to a post specified by postId
 *     parameters:
 *       - name: postId
 *         in: path
 *         required: true
 *         description: ID of the post to add a comment to
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: This is a new comment.
 *     responses:
 *       201:
 *         description: Comment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 postId:
 *                   type: integer
 *                   example: 1
 *                 content:
 *                   type: string
 *                   example: This is a new comment.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-08-23T12:34:56Z
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.post('/posts/:postId/comments', authenticateToken, commentController.createComment);

/**
 * @openapi
 * /comments/{id}:
 *   put:
 *     tags:
 *       - Comments
 *     summary: Update a specific comment
 *     description: Modify an existing comment by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the comment to update
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: Updated comment content.
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 postId:
 *                   type: integer
 *                   example: 1
 *                 content:
 *                   type: string
 *                   example: Updated comment content.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-08-23T12:34:56Z
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Server error
 */
router.put('/comments/:id', authenticateToken, commentController.updateComment);

/**
 * @openapi
 * /comments/{id}:
 *   delete:
 *     tags:
 *       - Comments
 *     summary: Delete a specific comment
 *     description: Remove a comment by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the comment to delete
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Comment deleted successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Server error
 */
router.delete('/comments/:id', authenticateToken, commentController.deleteComment);

module.exports = router;