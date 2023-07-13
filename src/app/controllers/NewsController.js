
class NewsController {
    // [GET] /news
    index(req, res) {
        console.log('xinchaof');
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        console.log('xinchaof');
        res.send('xin chào');
    }
}

module.exports = new NewsController;
