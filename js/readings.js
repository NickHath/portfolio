// function fetchReadings() {
//   const Http = new XMLHttpRequest();
//   Http.open('GET', 'http://localhost:4500/api/readings');
//   Http.send();
//   Http.onreadystatechange = e => {
//     // console.log(e);
//     // get rid of error here
//     let readingsJSON = JSON.parse(Http.response);
//     console.log(readingsJSON);
//   }
// }

// function loadReadings() {

// }

// fetchReadings();

$(document).ready(function() {
  fetch('http://localhost:4500/api/readings')
    .then(res => res.json())
    .then(data => {
      const { list } = data;
      let htmlList = ``;
      for (var articleID in list) {
        const article = list[articleID];
        htmlList += `
          <a href="${article.resolved_url}" target="_blank">
            <section class="article">
              <p>${article.resolved_title}</p>
              <p>Read: ${article.time_added}</p>
              <p>${article.excerpt}</p>
            </section>
          </a>
        `
      }
      $('#reading-list').append(htmlList);
    })
    .catch(console.error);
})

// function getReadings() {
//   fetch('http://localhost:4500/api/readings')
//     .then(res => res.json())
//     .then(data => console.log(data.list))
//     .catch(console.error);
// }

// getReadings();

// const options = {
//   method: "POST",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ "consumer_key": process.env.POCKET_CONSUMER_KEY, "access_token": process.env.POCKET_ACCESS_TOKEN })
// };

// fetch(`https://getpocket.com/v3/get`, options)
//   .then(console.log)
//   .catch(console.error);
