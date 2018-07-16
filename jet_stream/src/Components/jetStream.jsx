var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var bearer_token = ''
const card_properties = ['main_image_url','price','quantity','product_title','status','product_description','shipping_weight_pounds']
const table_properties = ['main_image_url','price','quantity','product_title','status','merchant_sku']

const properties = {
  card: card_properties,
  table: table_properties
}


// recusively find json data
function jsonRecurse(json_obj, target){
  let data = json_obj;
  if (target in data){
    return data[target]
    }
    for (var key in data){
      if (data[key] instanceof Object){
        let result = jsonRecurse(data[key], target)
        if (result !== undefined){
          return result
          }
        }
      else if (data[key] instanceof Array){
        for (var i = 0; i < data[key].length; i++){
          let result = jsonRecurse(data[key][i], target)
          if (result !== undefined){
            return result
            }
          }
      }
      else continue
    }
    return undefined
  }

// Take in json object and returns a json object filtered by targets list
export function jsonFilter(data, target){
  let targets = properties[target]
  let result = {}
  let len = targets.length
  for (let i = 0; i < len ; i++ ) {
    let key = targets[i]
    // Need to update to handle undefined values
    result[key] = jsonRecurse(data, key);
    result.id = i;
  }
  // console.log(result)
  return result
}

export function authenticateUser(event, props){
  // Collect user input from form values
    const user = event.target[0].value;
    const secret = event.target[1].value;
    const body = JSON.stringify({
      'user': user,
      'pass': secret
    });
    if ((user && secret)){
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://merchant-api.jet.com/api/token', true );
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.onload = () => {
          var res = JSON.parse(xhr.responseText);
          res.login_body = body
          props.idToken(res)            //Pass up data to App.js
          bearer_token = 'bearer ' + res.id_token
          console.log(bearer_token)
         }
      xhr.send(body);

    }
      else {alert('Username and Password are both required');}
    event.preventDefault();
}
