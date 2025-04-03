const express = require('express');
const router = express.Router();
// const { join, login } = require('../controller/userController');


router.post('/join', (req, res) => {
    res.send("회원가입 API");
});


/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: 로그인 API
 *     description: 사용자가 로그인할 수 있다.
 *     responses:
 *       200:
 *         description: 성공
 */
router.post('/login', ()=> {
    res.send("로그인 API");
});

module.exports = router;
