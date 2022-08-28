import express from 'express';
import { getPostBySearch,getPosts ,createPost ,updatePost,deletePost,likePost,getPostsByCreator,commentPost} from '../controllers/posts.js';

const router = express.Router();
import auth from '../middleware/auth.js'

router.get('/creator', getPostsByCreator);
router.get('/search',getPostBySearch);

router.get('/',getPosts);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);
router.post('/:id/commentPost', commentPost);


export default router