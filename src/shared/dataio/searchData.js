{/*https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux*/}
module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();  //careful with this line
    localStorage.setItem('searchresult', JSON.stringify([
      {"NIIN":"015126362","NSN":"2040-01-512-6362","NAME":"MONITORING SYSTEM,RESERVOIR","FSC":"2040"},
      {"NIIN":"015121111","NSN":"2040-01-512-1111","NAME":"Number 1 SYSTEM,RESERVOIR","FSC":"2041"},
      {"NIIN":"015122222","NSN":"2040-01-512-2222","NAME":"Number 2 SYSTEM,RESERVOIR","FSC":"2042"},
      {"NIIN":"015133333","NSN":"2040-01-512-3333","NAME":"Number 3 SYSTEM,RESERVOIR","FSC":"2043"},
      {"NIIN":"015144444","NSN":"2040-01-512-4444","NAME":"Number 4 SYSTEM,RESERVOIR","FSC":"2044"}
    ]));
  }

};