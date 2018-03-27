var modalSaveBtn = document.getElementById('modal-save-btn');
modalSaveBtn.addEventListener('click', function () {
    var title = document.getElementById('new-article-title').value;
    var content = document.getElementById('new-article-content').value;
    var article = createArticle(title, content);
    localStorage.setItem('article', JSON.stringify(article));
    renderArticle(article);
});

function createArticle(title, content) {

    function getArticleId() {
        //TODO решить потом
        return 123;
    }

    return {
        id: getArticleId(),
        title: title,
        content: content,
        creationDate: new Date()
    }
}

function renderArticle(article) {
    //TODO создать дом элемент стати и вывести на экран
}
