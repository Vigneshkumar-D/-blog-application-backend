const express = require('express');
const postController = require('../controller/postController');
const authenticateToken = require('../middleware/middleware');

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Posts
 *     description: Operations related to blog posts
 */
/**
 * @openapi
 * /posts:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get all posts
 *     description: Retrieve a list of all blog posts
 *     responses:
 *       200:
 *         description: Successfully retrieved posts
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
 *                   title:
 *                     type: string
 *                     example: Sample Post
 *                   content:
 *                     type: string
 *                     example: This is the content of the post.
 *                   username:
 *                     type: string
 *                     example: john
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-23T12:34:56Z
 *       500:
 *         description: Server error
 */
router.get('/posts', authenticateToken, postController.getAllPosts);

/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get a specific post by ID
 *     description: Retrieve a single blog post by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the post to retrieve
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved the post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: Sample Post
 *                 content:
 *                   type: string
 *                   example: This is the content of the post.
 *                username:
 *                   type: string
 *                   example: john
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-08-23T12:34:56Z
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.get('/posts/:id', authenticateToken, postController.getPostById);

/**
 * @openapi
 * /posts:
 *   post:
 *     tags:
 *       - Posts
 *     summary: Create a new post
 *     description: Add a new blog post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: New Post
 *               content:
 *                 type: string
 *                 example: This is the content of the new post.
 *               username:
 *                 type: string
 *                 example: john
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 title:
 *                   type: string
 *                   example: New Post
 *                 content:
 *                   type: string
 *                   example: This is the content of the new post.
 *                 username:
 *                   type: string
 *                   example: john
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-08-23T12:34:56Z
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/posts', authenticateToken, postController.createPost);

/**
 * @openapi
 * /posts/{id}:
 *   put:
 *     tags:
 *       - Posts
 *     summary: Update a specific post by ID
 *     description: Modify an existing blog post by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the post to update
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
 *               title:
 *                 type: string
 *                 example: Updated Post
 *               content:
 *                 type: string
 *                 example: This is the updated content of the post.
 *               username:
 *                 type: string
 *                 example: john
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: Updated Post
 *                 content:
 *                   type: string
 *                   example: This is the updated content of the post.
 *                 username:
 *                    type: string
 *                    example: john
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
router.put('/posts/:id', authenticateToken, postController.updatePost);

/**
 * @openapi
 * /posts/{id}:
 *   delete:
 *     tags:
 *       - Posts
 *     summary: Delete a specific post by ID
 *     description: Remove a blog post by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the post to delete
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Post deleted successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.delete('/posts/:id', authenticateToken, postController.deletePost);

module.exports = router;