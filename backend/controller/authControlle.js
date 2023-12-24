import bcryptjs from 'bcryptjs';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });
        req.session.user = newUser;
        res.status(201).json({
            status: "success",
            data: {
                user: newUser
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        })
    }
}