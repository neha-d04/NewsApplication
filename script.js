console.log("heyy");
// APIKey : c2a88163e5b229b80777f81685773547;

let newsItem = document.getElementById("newsItem");

fetch(
  "http://api.mediastack.com/v1/news?access_key=c2a88163e5b229b80777f81685773547&country=in"
)
  .then((res) => res.json())
  .then((data) => data)
  .then((data) => {
    console.log(data);
    let newsHTML = "";
    Object.keys(data.data).forEach((element) => {
      console.log(data.data[element].title);
      let news = `<div class="col-sm-4" id="newsItem" >
            <div >
                <div class="card" style="width: 25rem; height: 35rem" >
                    <img src="${data.data[element].image}" class="card-img-top" alt="Image failed to Load" onerror="this.src='https://static.yabiladi.com/files/articles/e3b76fef6b87cf909c63e4bd8c584e0320210803132514150.jpg';">
                    <div class="card-body">
                        <h5 class="card-title">${data.data[element].title}</h5>
                        <p class="card-text">Published at: ${data.data[element].published_at}</p>
                        <p class="card-text">Author: ${data.data[element].author}</p>
                        <a href="${data.data[element].url}" target="_blank"class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        </div>`;

      newsHTML += news;
    });
    newsItem.innerHTML = newsHTML;
  })
  .catch((error) => console.log(error));
