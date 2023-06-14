axios
  .request({
    url: "http://127.0.0.1:5000/api/painting",
  })
  .then((res) => {
    for (i = 0; i <= res[`data`].length; i++) {
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
