#!/usr/bin/env node
require('isomorphic-fetch')
var _ =require('lodash')

var TOKEN = process.env.QIITA_TOKEN;
if(TOKEN === undefined){
  console.err('Set your QIITA_TOKEN at ENV');
  return;
}

var ENDPOINT = process.env.QIITA_ENDPOINT === undefined ? 'https://qiita.com' : process.env.QIITA_ENDPOINT;

var Qiita = require('qiita-js');
Qiita.setEndpoint(ENDPOINT);
Qiita.setToken(TOKEN);

// Is there any API to handle items_count for Qiita::Team?
const all_items_count = process.env.QIITA_ITEMS_COUNT
const per_page = 100
var last_page = parseInt(all_items_count / per_page) + 1
var promises = []

for(var i = 0; i < last_page + 1; i++){
  var promise = Qiita.Resources.Item.list_items(
      { page: i,
        per_page: per_page }
  );
  promises.push(promise);
}

console.info('start to fetching...');
Promise.all(promises).then((all_items)=>{
  _.each(all_items,(items)=>{
    _.each(items,(item)=>{
      console.log(item.title);
    });
  });
  console.info('-- END --');
});


