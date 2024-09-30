const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

let users = [];

// 회원가입 엔드포인트
app.post('/users', (req, res) => {
    const { id, email, password } = req.body;
    const existingUser = users.find(user => user.id === id);
    if (existingUser) {
        return res.status(409).json({ message: "이미 존재하는 아이디입니다." });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ id, email, password: hashedPassword });
    res.status(201).send();
});

// 로그인 엔드포인트
app.post('/login', (req, res) => {
    const { id, password } = req.body;
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(401).json({ message: "사용자 정보를 찾을 수 없습니다." });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }
    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
    res.status(200).json({ accessToken: token });
});

// 로그아웃 엔드포인트
app.delete('/logout', (req, res) => {
    // 로그아웃 로직 
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
