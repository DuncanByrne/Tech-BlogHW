const editFormHandler = async function(event){
  event.preventDefault();

  const title = document.getElementById('post-title');
  const body = document.getElementById('post-body');
  const postId = document.getElementById('post-id');

  fetch("/api/post" + postId.nodeValue, {
    method: "put",
    body: JSON.stringify({
      title: title.nodeValue,
      body: body.value
    }),
    headers: {"Content-Type": "application/json"}
  })
  .then(function(){
    document.location.replace("/dashboard");
  })
  .catch(err => console.log(err))
}
document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);