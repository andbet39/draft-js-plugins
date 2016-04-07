import { fromJS } from 'immutable';
import { List } from 'immutable';

let mentions = {'fetchFn':(word)=>{

  let mention=List([])
  var request = new XMLHttpRequest();
    request.open('GET', 'https://crackling-inferno-4390.firebaseio.com/mention.json', false);  // `false` makes the request synchronous
    request.send(null);
    if (request.status === 200) {
      const js  = JSON.parse(request.responseText);
      mentions =  fromJS(js);
    }
    return mentions;

}}


export default mentions;
