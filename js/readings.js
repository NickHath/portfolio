$(document).ready(function() {
  const baseUrlRegExp = /^https?:\/\/[^\/]+/i;
  fetch('http://localhost:4500/api/readings')
    .then(res => res.json())
    .then(data => {
      const { list } = data;
      let htmlList = ``;
      console.log(list);
      for (var articleID in list) {
        const article = list[articleID];
        // <p>Read on ${moment(article.time_added).tz('America/Denver').format('MMMM Do, YYYY')}</p>
        // <p>${article.excerpt}</p>
        htmlList += `
          <section class="article">
            <a class="title" href="${article.resolved_url}" target="_blank">${article.resolved_title}</a>
            <a class="article-url" href="${article.resolved_url}" target="_blank">${article.resolved_url.match(baseUrlRegExp)[0]}</a>
            <p>Read time: ${article.time_to_read} minutes</p>
          </section>
        `
      }
      $('#reading-list').append(htmlList);
    })
    .catch(console.error);
})