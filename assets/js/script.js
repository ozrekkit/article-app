var modalSaveBtn = document.getElementById('modal-save-btn');
modalSaveBtn.addEventListener('click', function () {
    var title = document.getElementById('new-article-title').value;
    var content = document.getElementById('new-article-content').value;
    var article = new Article(title, content);
    localStorage.setItem('article', JSON.stringify(article));
    renderArticle(article);
});

function Article(title, content) {
    this.id = getArticleId();
    this.title = title;
    this.content = content;
    this.creationDate = new Date();

    function getArticleId() {
        //TODO решить потом
        return 123;
    }
}

function renderArticle(article) {
    // TODO создать элемент
    // 1 создать артикл
    var articleElem = document.createElement('article');
    articleElem.setAttribute('class', 'article');

    // 2 создать header и поместить в article
    var header = document.createElement('header');
    articleElem.appendChild(header);


    // 3 создать main и поместить в article
    var main = document.createElement('main');
    articleElem.appendChild(main);

    // 4 создать footer и поместить в article
    var footer = document.createElement('footer');
    footer.setAttribute('class', 'clearfix');
    articleElem.appendChild(footer);

    // TODO поместить в нужное место дом дерева
    var articleContainer = document.getElementById('article-container');
    articleContainer.appendChild(articleElem);
}
