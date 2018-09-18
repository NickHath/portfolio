$(document).ready(function() {
  const baseUrlRegExp = /^https?:\/\/[^\/]+/i;
  fetch('http://localhost:4500/api/readings')
    .then(res => res.json())
    .then(data => {
      const { list } = data;
      let articleIDs = Object.keys(list).sort((a, b) => parseInt(list[b].time_added) - parseInt(list[a].time_added));
      // limit to last ten articles
      articleIDs = articleIDs.slice(0, 10);
      let htmlList = ``;
      articleIDs.forEach(articleID => {
        const article = list[articleID];
        const readDate = new Date(parseInt(article.time_added) * 1000);
        const summary = article.excerpt.split(' ').slice(0, 20).join(' ') || '';
        // <p>Estimated Read Time: ${article.time_to_read} minutes</p>
        htmlList += `
          <section class="article">
            <a class="title" href="${article.resolved_url}" target="_blank">${article.resolved_title}</a>
            <a class="article-url" href="${article.resolved_url}" target="_blank">${article.resolved_url.match(baseUrlRegExp)[0]}</a>
            <p class="read-date">Read on ${readDate.toLocaleDateString()}</p>
            <p>${summary}...</p>
          </section>
        `
      });
      $('#reading-list').append(htmlList);
    })
    .catch(console.error);
})