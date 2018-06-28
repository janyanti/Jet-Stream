var generateBody = function(event){
  const user = event.target[0].value;
  const secret = event.target[1].value;
  const body = JSON.stringify({
    'user': user,
    'pass': secret
  });
  return body
}
