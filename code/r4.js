fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())

  .then((json) => {
    let resp = json;
    console.log(resp);
    for (var i = 0; i < resp.results.length; i++) {
      var tr =
        `<tr>
              <td>` +
        resp.results[i].id +
        `</td>
              <td>` +
        resp.results[i].name +
        `</td>
              <td>` +
        resp.results[i].status +
        `</td>
              <td>` +
        resp.results[i].species +
        `</td>
              <td>` +
        resp.results[i].type +
        `</td>
            </tr>`;
      $("#table-body").append(tr);
    }
  });

$("#table-body").html("");
