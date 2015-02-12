/* jshint node: true */
'use strict';

//var _        = require('lodash'),
//    $        = require('jquery'),
//    Firebase = require('firebase');

function hello() {
  return 'world';
}

var FIREBASE_URL = 'https://friends-address-book.firebaseio.com';

$('#submit').click(submit);



//function assignDataAtt (res) {
//  
//}


function submit (event) {
  event.preventDefault();
  var contact = {
    'photoUrl' : $('#photoUrl').val(),
    'firstName' : $('#firstName').val(),
    'lastName' : $('#lastName').val(),
    'pNum1' : $('#pNum1').val(),
    'pNum2' : $('#pNum2').val(),
    'pNum3' : $('#pNum3').val(),
    'emailAddress' : $('#emailAddress').val()
  };
  addContactToDb(contact, assignDataAtt);
  addContactToTable(contact);
}

function addContactToDb(contact, cb) {
  var url           = FIREBASE_URL + '/friends.json',
      jsonData = JSON.stringify(contact);
  $.post(url, jsonData, function (res) { return cb(res); });
}

function addContactToTable(contact) {
  var $row = $('<tr></tr>');

  if ($.isNumeric(contact.pNum1 || contact.pNum2 || contact.pNum3) === false) {
    return;
  }

  $row.append('<td>' + contact.photoURL + '</td>');
  $row.append('<td>' + contact.firstName + '</td>');
  $row.append('<td>' + contact.lastName + '</td>');
  $row.append('<td>' + contact.pNum1 + '-' + contact.pNum2  + '-' + contact.pNum3 + '</td>');
  $row.append('<td>' + contact.emailAddress + '</td>');

  $('#friendList').append($row);

  return $row;
}
