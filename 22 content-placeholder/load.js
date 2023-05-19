setTimeout(function () {
  //   document.styleSheets[0].addRule(".username::before", "display:none"); // support IE
  //   document.styleSheets[0].addRule(".username::after", "display:none"); // support IE
  //   document.styleSheets[0].insertRule(".username::before { display:none }", 0); // support none-IE
  //   document.styleSheets[0].insertRule(".username::after { display:none }", 0); // support none-IE
  //   document.styleSheets[0].insertRule(".date::before { display:none }", 0);
  //   document.styleSheets[0].insertRule(".date::after { display:none }", 0);

  //   document.styleSheets[0].insertRule("h1::before { display:none }", 0);
  //   document.styleSheets[0].insertRule("h1::after { display:none }", 0);
  //   document.styleSheets[0].insertRule("h3::before { display:none }", 0);
  //   document.styleSheets[0].insertRule("h3::after { display:none }", 0);

  //   document.styleSheets[0].insertRule(".avatar::before { display:none }", 0);
  //   document.styleSheets[0].insertRule(".avatar::after { display:none }", 0);

  //   document.styleSheets[0].insertRule(".picture::before { display:none }", 0);
  //   document.styleSheets[0].insertRule(".picture::after { display:none }", 0);

  document.styleSheets[0].insertRule("*::before { display:none }", 0);
  document.styleSheets[0].insertRule("*::after { display:none }", 0);
}, 3000);
