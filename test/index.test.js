"use strict" /* global describe, it, before */;
var should = require("should");
var writtenNumber = require("..");

describe("written-number", function () {

  describe("writtenNumber(n, { lang: 'zzz', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("defaults to english on wrong language", function () {
      writtenNumber(1, { lang: 'zzz' }).should.equal("one");
    });
  });

  describe("writtenNumber(n, { lang: 'en', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "en";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("negative numbers return \"\"", function () {
      writtenNumber(-3).should.equal("");
      writtenNumber(-5).should.equal("");
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("zero");
      writtenNumber("0.8").should.equal("one");
      writtenNumber("2.8").should.equal("three");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1000000000.123").should.equal("one billion");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("zero");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1000000000).should.equal("one billion");
      writtenNumber(3).should.equal("three");
      writtenNumber(8).should.equal("eight");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("thirteen");
      writtenNumber(19).should.equal("nineteen");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("twenty");
      writtenNumber(25).should.equal("twenty-five");
      writtenNumber(88).should.equal("eighty-eight");
      writtenNumber(73).should.equal("seventy-three");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(200).should.equal("two hundred");
      writtenNumber(242).should.equal("two hundred and forty-two");
      writtenNumber(1234).should.equal(
        "one thousand two hundred and thirty-four"
      );
      writtenNumber(4323).should.equal(
        "four thousand three hundred and twenty-three"
      );
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "four million three hundred twenty-three thousand"
      );
      writtenNumber(4323055).should.equal(
        "four million three hundred twenty-three thousand and fifty-five"
      );
      writtenNumber(1570025).should.equal(
        "one million five hundred seventy thousand and twenty-five"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("one billion");
      writtenNumber(2580000000).should.equal(
        "two billion five hundred eighty million"
      );
      writtenNumber(1000000000000).should.equal("one trillion");
      writtenNumber(3627000000000).should.equal(
        "three trillion six hundred twenty-seven billion"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'es', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "es";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1).should.equal("uno");
      writtenNumber(3).should.equal("tres");
      writtenNumber(8).should.equal("ocho");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("trece");
      writtenNumber(16).should.equal("diecis??is");
      writtenNumber(19).should.equal("diecinueve");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("veinte");
      writtenNumber(25).should.equal("veinticinco");
      writtenNumber(88).should.equal("ochenta y ocho");
      writtenNumber(73).should.equal("setenta y tres");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("ciento cuarenta y cuatro");
      writtenNumber(200).should.equal("doscientos");
      writtenNumber(1234).should.equal("mil doscientos treinta y cuatro");
      writtenNumber(4323).should.equal("cuatro mil trescientos veintitr??s");
      writtenNumber(242).should.equal("doscientos cuarenta y dos");
      writtenNumber(2100).should.equal("dos mil cien");
      writtenNumber(1100).should.equal("mil cien");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "cuatro millones trescientos veintitr??s mil"
      );
      writtenNumber(4323055).should.equal(
        "cuatro millones trescientos veintitr??s mil cincuenta y cinco"
      );
      writtenNumber(1570025).should.equal(
        "uno mill??n quinientos setenta mil veinticinco"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("mil millones");
      writtenNumber(2580000000).should.equal(
        "dos mil quinientos ochenta millones"
      );
      writtenNumber(1000000000000).should.equal("un bill??n");
      writtenNumber(3627000000000).should.equal(
        "tres billones seiscientos veintisiete mil millones"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'pt', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "pt";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(3).should.equal("tr??s");
      writtenNumber(8).should.equal("oito");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("treze");
      writtenNumber(19).should.equal("dezenove");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("vinte");
      writtenNumber(25).should.equal("vinte e cinco");
      writtenNumber(88).should.equal("oitenta e oito");
      writtenNumber(73).should.equal("setenta e tr??s");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("cento e quarenta e quatro");
      writtenNumber(200).should.equal("duzentos");
      writtenNumber(1234).should.equal("mil duzentos e trinta e quatro");
      writtenNumber(4323).should.equal("quatro mil trezentos e vinte e tr??s");
      writtenNumber(242).should.equal("duzentos e quarenta e dois");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "quatro milh??es trezentos e vinte e tr??s mil"
      );
      writtenNumber(4323055).should.equal(
        "quatro milh??es trezentos e vinte e tr??s mil e cinquenta e cinco"
      );
      writtenNumber(1570025).should.equal(
        "um milh??o quinhentos e setenta mil e vinte e cinco"
      );
    });

    it("works for 14101 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14101).should.equal("catorze mil cento e um");
    });

    it("works for 14201 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14201).should.equal("catorze mil duzentos e um");
    });

    it("works for 1001000 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001000).should.equal("um milh??o e mil");
    });

    it("works for 1001200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001200).should.equal("um milh??o mil e duzentos");
    });

    it("works for 14200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14200).should.equal("catorze mil e duzentos");
    });

    it("works for 14100 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14100).should.equal("catorze mil e cem");
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("um bilh??o");
      writtenNumber(2580000000).should.equal(
        "dois bilh??es quinhentos e oitenta milh??es"
      );
      writtenNumber(1000000000000000).should.equal("um quadrilh??o");
      writtenNumber(3627000000000).should.equal(
        "tr??s trilh??es seiscentos e vinte e sete bilh??es"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'ptPT', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "ptPT";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(3).should.equal("tr??s");
      writtenNumber(8).should.equal("oito");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("treze");
      writtenNumber(19).should.equal("dezanove");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("vinte");
      writtenNumber(25).should.equal("vinte e cinco");
      writtenNumber(88).should.equal("oitenta e oito");
      writtenNumber(73).should.equal("setenta e tr??s");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("cento e quarenta e quatro");
      writtenNumber(200).should.equal("duzentos");
      writtenNumber(1234).should.equal("mil duzentos e trinta e quatro");
      writtenNumber(4323).should.equal("quatro mil trezentos e vinte e tr??s");
      writtenNumber(242).should.equal("duzentos e quarenta e dois");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "quatro milh??es trezentos e vinte e tr??s mil"
      );
      writtenNumber(4323055).should.equal(
        "quatro milh??es trezentos e vinte e tr??s mil e cinquenta e cinco"
      );
      writtenNumber(1570025).should.equal(
        "um milh??o quinhentos e setenta mil e vinte e cinco"
      );
    });

    it("works for 14101 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14101).should.equal("catorze mil cento e um");
    });

    it("works for 14201 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14201).should.equal("catorze mil duzentos e um");
    });

    it("works for 1001000 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001000).should.equal("um milh??o e mil");
    });

    it("works for 1001200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(1001200).should.equal("um milh??o mil e duzentos");
    });

    it("works for 14200 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14200).should.equal("catorze mil e duzentos");
    });

    it("works for 14100 (https://github.com/yamadapc/js-written-number/issues/38)", function () {
      writtenNumber(14100).should.equal("catorze mil e cem");
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("mil milh??es");
      writtenNumber(2580000000).should.equal(
        "dois mil quinhentos e oitenta milh??es"
      );
      writtenNumber(1000000000000000).should.equal("mil bili??es");
      writtenNumber(3627000000000).should.equal(
        "tr??s bili??es seiscentos e vinte e sete mil milh??es"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'fr', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "fr";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("z??ro");
      writtenNumber(3).should.equal("trois");
      writtenNumber(8).should.equal("huit");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("treize");
      writtenNumber(19).should.equal("dix-neuf");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("vingt");
      writtenNumber(25).should.equal("vingt-cinq");
      writtenNumber(73).should.equal("soixante-treize");
      writtenNumber(80).should.equal("quatre-vingts");
      writtenNumber(88).should.equal("quatre-vingt-huit");
      writtenNumber(90).should.equal("quatre-vingt-dix");
      writtenNumber(91).should.equal("quatre-vingt-onze");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(100).should.equal("cent");
      writtenNumber(110).should.equal("cent dix");
      writtenNumber(200).should.equal("deux cents");
      writtenNumber(242).should.equal("deux cent quarante-deux");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1234).should.equal("mille deux cent trente-quatre");
      writtenNumber(4000).should.equal("quatre mille");
      writtenNumber(4323).should.equal("quatre mille trois cent vingt-trois");
      writtenNumber(1000000).should.equal("un million");
      writtenNumber(2000000).should.equal("deux millions");
      writtenNumber(2000001).should.equal("deux millions un");
      writtenNumber(4323000).should.equal(
        "quatre millions trois cent vingt-trois mille"
      );
      writtenNumber(4323055).should.equal(
        "quatre millions trois cent vingt-trois mille cinquante-cinq"
      );
      writtenNumber(1570025).should.equal(
        "un million cinq cent soixante-dix mille vingt-cinq"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("un milliard");
      writtenNumber(2580000000).should.equal(
        "deux milliards cinq cent quatre-vingts millions"
      );
      writtenNumber(1000000000000).should.equal("un billion");
      writtenNumber(3627000000000).should.equal(
        "trois billions six cent vingt-sept milliards"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'it', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "it";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(3).should.equal("tre");
      writtenNumber(8).should.equal("otto");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("tredici");
      writtenNumber(19).should.equal("diciannove");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("venti");
      writtenNumber(23).should.equal("ventitr??");
      writtenNumber(73).should.equal("settantatr??");
      writtenNumber(80).should.equal("ottanta");
      writtenNumber(88).should.equal("ottantotto");
      writtenNumber(90).should.equal("novanta");
      writtenNumber(91).should.equal("novantuno");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(100).should.equal("cento");
      writtenNumber(101).should.equal("centuno");
      writtenNumber(201).should.equal("duecentuno");
      writtenNumber(242).should.equal("due cento quarantadue");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1234).should.equal("mille due cento trentaquattro");
      writtenNumber(4000).should.equal("quattro mila");
      writtenNumber(4323).should.equal("quattro mila tre cento ventitr??");
      writtenNumber(1000000).should.equal("un milione");
      writtenNumber(2000000).should.equal("due milioni");
      writtenNumber(2000001).should.equal("due milioni un");
      writtenNumber(4323000).should.equal(
        "quattro milioni tre cento ventitr?? mila"
      );
      writtenNumber(4323055).should.equal(
        "quattro milioni tre cento ventitr?? mila cinquantacinque"
      );
      writtenNumber(1570025).should.equal(
        "un milione cinque cento settanta mila venticinque"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("un miliardo");
      writtenNumber(2580000000).should.equal(
        "due miliardi cinque cento ottanta milioni"
      );
      writtenNumber(1000000000000).should.equal("un bilione");
      writtenNumber(3627000000000).should.equal(
        "tre bilioni sei cento ventisette miliardi"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'enIndian', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "enIndian";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("zero");
      writtenNumber("0.8").should.equal("one");
      writtenNumber("2.8").should.equal("three");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber(1000000000).should.equal("one hundred crore");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("zero");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1000000000).should.equal("one hundred crore");
      writtenNumber(3).should.equal("three");
      writtenNumber(8).should.equal("eight");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("thirteen");
      writtenNumber(19).should.equal("nineteen");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("twenty");
      writtenNumber(25).should.equal("twenty-five");
      writtenNumber(88).should.equal("eighty-eight");
      writtenNumber(73).should.equal("seventy-three");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(200).should.equal("two hundred");
      writtenNumber(242).should.equal("two hundred and forty-two");
      writtenNumber(1234).should.equal(
        "one thousand two hundred and thirty-four"
      );
      writtenNumber(4323).should.equal(
        "four thousand three hundred and twenty-three"
      );
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "forty-three lakh twenty-three thousand"
      );
      writtenNumber(4323055).should.equal(
        "forty-three lakh twenty-three thousand and fifty-five"
      );
      writtenNumber(1570025).should.equal(
        "fifteen lakh seventy thousand and twenty-five"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("one hundred crore");
      writtenNumber(2580000000).should.equal("two hundred fifty-eight crore");
      writtenNumber(1000000000000).should.equal("one lakh crore");
      writtenNumber(3627000000000).should.equal(
        "three lakh sixty-two thousand seven hundred crore"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'tr', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "tr";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("s??f??r");
      writtenNumber("0.8").should.equal("bir");
      writtenNumber("2.8").should.equal("????");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("s??f??r");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("s??f??r");
      writtenNumber(3).should.equal("????");
      writtenNumber(6).should.equal("alt??");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("on ????");
      writtenNumber(19).should.equal("on dokuz");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("yirmi");
      writtenNumber(25).should.equal("yirmi be??");
      writtenNumber(40).should.equal("k??rk");
      writtenNumber(88).should.equal("seksen sekiz");
      writtenNumber(73).should.equal("yetmi?? ????");
    });

    it("correctly converts numbers < 10000", function () {
      writtenNumber(200).should.equal("iki y??z");
      writtenNumber(242).should.equal("iki y??z k??rk iki");
      writtenNumber(1234).should.equal(
        "bin iki y??z otuz d??rt"
      );
      writtenNumber(4323).should.equal(
        "d??rt bin ???? y??z yirmi ????"
      );
    });

    it("correctly converts numbers > 10000", function () {
      writtenNumber(4323000).should.equal(
        "d??rt milyon ???? y??z yirmi ???? bin"
      );
      writtenNumber(4323055).should.equal(
        "d??rt milyon ???? y??z yirmi ???? bin elli be??"
      );
      writtenNumber(1570025).should.equal(
        "bir milyon be?? y??z yetmi?? bin yirmi be??"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("bir milyar");
      writtenNumber(2580000000).should.equal(
        "iki milyar be?? y??z seksen milyon"
      );
      writtenNumber(1000000000000).should.equal("bir trilyon");
      writtenNumber(3627000000000).should.equal(
        "???? trilyon alt?? y??z yirmi yedi milyar"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'az', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "az";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("s??f??r");
      writtenNumber("0.8").should.equal("bir");
      writtenNumber("2.8").should.equal("????");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("s??f??r");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("s??f??r");
      writtenNumber(3).should.equal("????");
      writtenNumber(6).should.equal("alt??");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("on ????");
      writtenNumber(19).should.equal("on doqquz");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("iyirmi");
      writtenNumber(25).should.equal("iyirmi be??");
      writtenNumber(40).should.equal("q??rx");
      writtenNumber(88).should.equal("s??ks??n s??kkiz");
      writtenNumber(73).should.equal("yetmi?? ????");
    });

    it("correctly converts numbers < 10000", function () {
      writtenNumber(200).should.equal("iki y??z");
      writtenNumber(242).should.equal("iki y??z q??rx iki");
      writtenNumber(1234).should.equal(
        "min iki y??z otuz d??rd"
      );
      writtenNumber(4323).should.equal(
        "d??rd min ???? y??z iyirmi ????"
      );
    });

    it("correctly converts numbers > 10000", function () {
      writtenNumber(4323000).should.equal(
        "d??rd milyon ???? y??z iyirmi ???? min"
      );
      writtenNumber(4323055).should.equal(
        "d??rd milyon ???? y??z iyirmi ???? min ??lli be??"
      );
      writtenNumber(1570025).should.equal(
        "bir milyon be?? y??z yetmi?? min iyirmi be??"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("bir milyard");
      writtenNumber(2580000000).should.equal(
        "iki milyard be?? y??z s??ks??n milyon"
      );
      writtenNumber(1000000000000).should.equal("bir trilyon");
      writtenNumber(3627000000000).should.equal(
        "???? trilyon alt?? y??z iyirmi yeddi milyard"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'uk', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "uk";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });
    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("????????");
      writtenNumber(1).should.equal("????????");
      writtenNumber(2).should.equal("??????");
      writtenNumber(3).should.equal("??????");
      writtenNumber(9).should.equal("???????????????");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(11).should.equal("????????????????????");
      writtenNumber(13).should.equal("????????????????????");
      writtenNumber(19).should.equal("???????????????????????????");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("????????????????");
      writtenNumber(21).should.equal("???????????????? ????????");
      writtenNumber(25).should.equal("???????????????? ???????????");
      writtenNumber(73).should.equal("???????????????? ??????");
      writtenNumber(80).should.equal("????????????????????");
      writtenNumber(88).should.equal("???????????????????? ??????????");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(100).should.equal("??????");
      writtenNumber(101).should.equal("?????? ????????");
      writtenNumber(110).should.equal("?????? ????????????");
      writtenNumber(111).should.equal("?????? ????????????????????");
      writtenNumber(146).should.equal("?????? ?????????? ??????????");
      writtenNumber(200).should.equal("????????????");
      writtenNumber(242).should.equal("???????????? ?????????? ??????");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1000).should.equal("???????? ????????????");
      writtenNumber(2000).should.equal("?????? ????????????");
      writtenNumber(3000).should.equal("?????? ????????????");
      writtenNumber(4000).should.equal("???????????? ????????????");
      writtenNumber(5000).should.equal("??????????? ??????????");
      writtenNumber(1234).should.equal("???????? ???????????? ???????????? ???????????????? ????????????");
      writtenNumber(4323).should.equal("???????????? ???????????? ???????????? ???????????????? ??????");
      writtenNumber(1000000).should.equal("???????? ??????????????");
      writtenNumber(2000000).should.equal("?????? ????????????????");
      writtenNumber(2000001).should.equal("?????? ???????????????? ????????");
      writtenNumber(5000000).should.equal("??????????? ??????????????????");
      writtenNumber(21000000).should.equal(
        "???????????????? ???????? ??????????????"
      );
      writtenNumber(111000000).should.equal(
        "?????? ???????????????????? ??????????????????"
      );
      writtenNumber(214567891).should.equal(
        "???????????? ???????????????????????? ?????????????????? ??????????????? ?????????????????? ?????? ?????????? ???????????????? ????????????????????? ????????"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("???????? ??????????????");
      writtenNumber(2580000000).should.equal(
        "?????? ???????????????? ??????????????? ???????????????????? ??????????????????"
      );
      writtenNumber(1000000000000).should.equal("???????? ????????????????");
      writtenNumber(3627000000000).should.equal(
        "?????? ?????????????????? ?????????????? ???????????????? ?????? ??????????????????"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'ar', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "ar";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("??????");
      writtenNumber("0.8").should.equal("????????");
      writtenNumber("2.8").should.equal("??????????");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("??????");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(0).should.equal("??????");
      writtenNumber(3).should.equal("??????????");
      writtenNumber(6).should.equal("??????");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(11).should.equal("?????? ??????");
      writtenNumber(13).should.equal("?????????? ??????");
      writtenNumber(19).should.equal("???????? ??????");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("??????????");
      writtenNumber(25).should.equal("???????? ????????????");
      writtenNumber(40).should.equal("????????????");
      writtenNumber(88).should.equal("???????????? ??????????????");
      writtenNumber(73).should.equal("?????????? ????????????");
      writtenNumber(99).should.equal("???????? ????????????");
    });

    it("correctly converts numbers < 10000", function () {
      writtenNumber(200).should.equal("????????????");
      writtenNumber(310).should.equal("???????????????? ??????????");
      writtenNumber(242).should.equal("???????????? ???????????? ??????????????");
      writtenNumber(1234).should.equal("?????? ?????????????? ???????????? ??????????????");
      writtenNumber(3000).should.equal("?????????? ????????");
      writtenNumber(4323).should.equal("?????????? ???????? ?????????????????? ???????????? ????????????");
    });

    it("correctly converts numbers > 10000", function () {
      writtenNumber(10000).should.equal("???????? ????????");
      writtenNumber(11000).should.equal("?????? ?????? ??????");
      writtenNumber(4323000).should.equal("?????????? ???????????? ?????????????????? ???????????? ???????????? ??????");
      writtenNumber(4323055).should.equal("?????????? ???????????? ?????????????????? ???????????? ???????????? ?????? ?????????? ????????????");
      writtenNumber(1570025).should.equal("?????????? ???????????????? ???????????? ?????? ?????????? ????????????");
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("??????????");
      writtenNumber(2580000000).should.equal("?????????????? ???????????????? ?????????????? ??????????");
      writtenNumber(1000000000000).should.equal("??????????????");
      writtenNumber(3627000000000).should.equal("?????????? ?????????????? ?????????????? ?????????? ???????????? ??????????");
    });
  });

  describe("writtenNumber(n, { lang: 'id', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "id";
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1).should.equal("satu");
      writtenNumber(3).should.equal("tiga");
      writtenNumber(8).should.equal("delapan");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(11).should.equal("sebelas");
      writtenNumber(13).should.equal("tiga belas");
      writtenNumber(19).should.equal("sembilan belas");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("dua puluh");
      writtenNumber(25).should.equal("dua puluh lima");
      writtenNumber(88).should.equal("delapan puluh delapan");
      writtenNumber(73).should.equal("tujuh puluh tiga");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(144).should.equal("seratus empat puluh empat");
      writtenNumber(200).should.equal("dua ratus");
      writtenNumber(242).should.equal("dua ratus empat puluh dua");
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(1111).should.equal("seribu seratus sebelas");
      writtenNumber(1234).should.equal("seribu dua ratus tiga puluh empat");
      writtenNumber(111234).should.equal(
        "seratus sebelas ribu dua ratus tiga puluh empat"
      );
      writtenNumber(432055).should.equal(
        "empat ratus tiga puluh dua ribu lima puluh lima"
      );
      writtenNumber(1111234).should.equal(
        "satu juta seratus sebelas ribu dua ratus tiga puluh empat"
      );

    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("satu miliar");
      writtenNumber(2580000000).should.equal(
        "dua miliar lima ratus delapan puluh juta"
      );
      writtenNumber(1000000000000).should.equal("satu triliun");
      writtenNumber(3627000000000).should.equal(
        "tiga triliun enam ratus dua puluh tujuh miliar"
      );
    });
  });

  describe("writtenNumber(n, { lang: 'ru', ... })", function () {
    before(function () {
      writtenNumber.defaults.lang = "ru";
    });

    it("gets exposed", function () {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("negative numbers return \"\"", function () {
      writtenNumber(-3).should.equal("");
      writtenNumber(-5).should.equal("");
    });

    it("doesn't blow up weirdly with invalid input", function () {
      writtenNumber("asdfasdfasdf").should.equal("");
      writtenNumber("0.as").should.equal("");
      writtenNumber("0.123").should.equal("????????");
      writtenNumber("0.8").should.equal("????????");
      writtenNumber("2.8").should.equal("??????");
      writtenNumber("asdf.8").should.equal("");
      writtenNumber("120391938123..").should.equal("");
      writtenNumber("1000000000.123").should.equal("???????? ????????????????");
      writtenNumber("1/3").should.equal("");
      writtenNumber(1 / 3).should.equal("????????");
      writtenNumber("1/2").should.equal("");
      writtenNumber("1.123/2").should.equal("");
    });

    it("correctly converts numbers < 10", function () {
      writtenNumber(1000000000).should.equal("???????? ????????????????");
      writtenNumber(3).should.equal("??????");
      writtenNumber(8).should.equal("????????????");
    });

    it("correctly converts numbers < 20", function () {
      writtenNumber(13).should.equal("????????????????????");
      writtenNumber(19).should.equal("????????????????????????");
    });

    it("correctly converts numbers < 100", function () {
      writtenNumber(20).should.equal("????????????????");
      writtenNumber(25).should.equal("???????????????? ????????");
      writtenNumber(88).should.equal("?????????????????????? ????????????");
      writtenNumber(73).should.equal("?????????????????? ??????");
    });

    it("correctly converts numbers < 1000", function () {
      writtenNumber(200).should.equal("????????????");
      writtenNumber(242).should.equal("???????????? ?????????? ??????");
      writtenNumber(1234).should.equal(
        "???????? ???????????? ???????????? ???????????????? ????????????"
      );
      writtenNumber(4323).should.equal(
        "???????????? ???????????? ???????????? ???????????????? ??????"
      );
    });

    it("correctly converts numbers > 1000", function () {
      writtenNumber(4323000).should.equal(
        "???????????? ???????????????? ???????????? ???????????????? ?????? ????????????"
      );
      writtenNumber(4323055).should.equal(
        "???????????? ???????????????? ???????????? ???????????????? ?????? ???????????? ?????????????????? ????????"
      );
      writtenNumber(1570025).should.equal(
        "???????? ?????????????? ?????????????? ?????????????????? ?????????? ???????????????? ????????"
      );
    });

    it("correctly converts numbers > 1 000 000 000", function () {
      writtenNumber(1000000000).should.equal("???????? ????????????????");
      writtenNumber(2580000000).should.equal(
        "?????? ?????????????????? ?????????????? ?????????????????????? ??????????????????"
      );
      writtenNumber(1000000000000).should.equal("???????? ????????????????");
      writtenNumber(3627000000000).should.equal(
        "?????? ?????????????????? ???????????????? ???????????????? ???????? ????????????????????"
      );
    });
  });
});
