$(document).ready(function() {
  const baseUrlRegExp = /^https?:\/\/[^\/]+/i;
  fetch('https://us-central1-nickhath-portfolio.cloudfunctions.net/readings')
    .then(res => res.json())
    .then(data => {
      const { list } = data;
      let articleIDs = Object.keys(list).sort((a, b) => parseInt(list[b].time_added) - parseInt(list[a].time_added));
      // limit to last ten articles
      articleIDs = articleIDs.slice(0, 7);
      let htmlList = ``;
      articleIDs.forEach(articleID => {
        const article = list[articleID];
        const readDate = new Date(parseInt(article.time_added) * 1000);
        const summary = article.excerpt.split(' ').slice(0, 20).join(' ') || '';
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