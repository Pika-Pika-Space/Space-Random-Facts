const authController = {};

//setting a cookie:
authController.setCookie = (req, res, next) => {
	const { user, pass } = req.body;
	console.log('entered setcookie');
	console.log('user:', user, '--pass:', pass);
	if (user === 'spaceCadet' && pass === 'ilovespace') {
		res.locals.cookie = {token: 'spaceCadet'};
		// res.cookie('token', 'spaceCadet');
		//console.log('res cookie:', res.cookie);
	} else if (user === 'otherUser' && pass === 'ilikespace') {
		res.locals.cookie = {token: 'otherUser'};
		// res.cookie('token', 'otherUser');
		//console.log(res.cookie);
	} else {
		return res.send('Unsuccessful login attempt');
	}
	return next();
};

//verifying a user:
authController.verifyUser = (req, res, next) => {
	const { cookies } = req;
	//destructure token from req.cookies?
	console.log('cookie: ',cookies);
	if (cookies['token'] !== 'spaceCadet' || cookies['token'] === 'otherUser') {
		return res.send('You must be signed in to view this page');
	}
	return next();
};

export default authController;
