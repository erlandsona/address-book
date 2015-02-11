/* jshint mocha: true, expr: true, strict: false, undef: false */


describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function () {
  it('should return world', function () {
    hello().should.equal('world');
  });
});


describe('DOM', function () {
  describe('table', function () {
    before(function () {
      if(window.__karma__) {
        $('body').append('<table><thead></thead><tbody id="friendList"></tbody></table>');
      }
    });
    beforeEach(function () {
      $('tbody').empty();
    });
    describe('addContactToTable', function () {
      it('should add a row to the table', function () {
        var contact = {
          photoURL: 'https://www.facebook.com/photo.php?fbid=10152885693074479&l=edfeb6ec76',
          firstName: 'Austin',
          lastName: 'Erlandson',
          pNum1: '555',
          pNum2: '555',
          pNum3: '5555',
          emailAddress: 'austin@erlandson.com'
        };
        $('tr').length.should.equal(0);
        addContactToTable(contact);
        $('tr').length.should.equal(1);
      });
      it('should ignore a phoneNumber with letters', function () {
        var contact = {
          photoURL: 'https://www.facebook.com/photo.php?fbid=10152885693074479&l=edfeb6ec76',
          firstName: 'Austin',
          lastName: 'Erlandson',
          pNum1: 'fff',
          pNum2: '555',
          pNum3: '5555',
          emailAddress: 'austin@erlandson.com'
        };

        $('tr').length.should.equal(0);
        addContactToTable(contact);
        $('tr').length.should.equal(0);
      });
     it('should use contactForm data in the appended row', function () {
        var contact     = {
            photoURL    : 'https://www.facebook.com/photo.php?fbid=10152885693074479&l=edfeb6ec76',
            firstName   : 'Austin',
            lastName    : 'Erlandson',
            pNum1       : '555',
            pNum2       : '555',
            pNum3       : '5555',
            emailAddress: 'austin@erlandson.com'
       },
        $row = addContactToTable(contact),
        $tds = $row.find('td');

        $tds.length.should.equal(5);
        $($tds[0]).text().should.equal('https://www.facebook.com/photo.php?fbid=10152885693074479&l=edfeb6ec76');
        $($tds[1]).text().should.equal('Austin');
        $($tds[2]).text().should.equal('Erlandson');
        $($tds[3]).text().should.equal('555-555-5555');
        $($tds[4]).text().should.equal('austin@erlandson.com');
      });
    });
    describe('retrieveFriends', function () {
      it('should clear the dom table', function () {
        retrieveFriends();
        $('tr').length.should.equal(0);
      });
      it('should repopulate the dom with data from firebase', function () {
  //      retrieve
      });
    });
    describe('assignDataAtt', function () {
      it('should assign data attribute to table row', function () {
        get uuid
        attatch uuid
        build row
      });
      it('', function () {
        
      });
    });
  });
});
