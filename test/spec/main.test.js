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
        $('body').append('<table><thead></thead><tbody></tbody></table>');
      }
    });
    beforeEach(function () {
      $('tbody').empty();
    });

   // describe('refreshStockPrices', function () {
   //   it('should edit each stock in the table with a new price', function () {
   //     var stocks = [
   //                    { Symbol: 'AAPL', LastPrice: 12.45 },
   //                    { Symbol: 'MSFT', LastPrice: 23.56 }
   //                  ],
   //         $tbody = $('tbody'),
   //         $trs;

   //     $tbody.append('<tr><td>Apple Inc</td><td>AAPL</td><td>12.34</td><td>12.34</td></tr>');
   //     $tbody.append('<tr><td>Microsoft Corp</td><td>MSFT</td><td>23.45</td><td>23.45</td></tr>');
   //     $trs = $('tr');

   //     refreshStockPrices(stocks);

   //     $($($trs[0]).find('td')[3]).text().should.equal('12.45');
   //     $($($trs[1]).find('td')[3]).text().should.equal('23.56');
   //   });
   // });

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
            $row        = addContactToTable(contact),
            $tds        = $row.find('td');

        $tds.length.should.equal(5);
        $($tds[0]).text().should.equal('https://www.facebook.com/photo.php?fbid=10152885693074479&l=edfeb6ec76');
        $($tds[1]).text().should.equal('Austin');
        $($tds[2]).text().should.equal('Erlandson');
        $($tds[3]).text().should.equal('555-555-5555');
        $($tds[4]).text().should.equal('austin@erlandson.com');
      });
    });
    describe('sumbitButton', function () {
      it('should post form data to database', function () {

      });
      it('should add form data to table', function () {

      });
    });
  });
});
