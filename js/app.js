function get_paintings() {
  axios
    .request({
      url: "http://127.0.0.1:5000/api/painting",
    })
    .then((res) => {
      for (let i = 0; i <= res[`data`].length; i++) {
        let container = document.querySelector(`#painting_container`);
        container.insertAdjacentHTML(
          `afterbegin`,
          `<article>
          <h3>${res[`data`][i][`title`]}</h3>
          <h4>${res[`data`][i][`artist`]}</h4>
          <h5>${res[`data`][i][`year`]}</h5>
          <img width="100px" src="${res[`data`][i][`image_url`]}">
        </article>`
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

let submit_button = document.querySelector(`#post_button`);
submit_button.addEventListener(`click`, () => {
  axios
    .request({
      url: `http://127.0.0.1:5000/api/painting`,
      method: `POST`,
      data: {
        artist: document.querySelector(`#artist_input`).value,
        title: document.querySelector(`#title_input`).value,
        year: document.querySelector(`#year_input`).value,
        image_url: document.querySelector(`#image_url_input`).value,
      },
    })
    .then((res) => {
      document
        .querySelector(`#title`)
        .insertAdjacentHTML(`afterend`, `<p>UPLOAD SUCCESS</p>`);
      get_paintings();
    })
    .catch((err) => {
      document
        .querySelector(`#title`)
        .insertAdjacentHTML(`afterend`, `<p>UPLOAD FAILURE</p>`);
    });
});

get_paintings();
