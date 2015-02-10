/* jshint jquery: true */
'use strict';

function hello() {
  return 'world';
}



function addContactToTable (contact) {
  
}


function addContactToTable(contact) {
  var $row = $('<tr></tr>');

  if ($.isNumeric(contact.pNum1 || contact.pNum2 || contact.pNum3) === false) {
    console.log('Please enter a valid phone number');
    return;
  }

  $row.append('<td>' + contact.photoURL + '</td>');
  $row.append('<td>' + contact.firstName + '</td>');
  $row.append('<td>' + contact.lastName + '</td>');
  $row.append('<td>' + contact.pNum1 + '-' + contact.pNum2 + '-' + contact.pNum3 + '</td>');
  $row.append('<td>' + contact.emailAddress + '</td>');

  $('tbody').append($row);

  return $row;
}








