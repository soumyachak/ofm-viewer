const wellnames = async (req, res) => {
  try {
    var x = await dbase.parseTable("HEADERID");
    res.status(200).json(x);
  } catch (error) {
    res.json(error.message);
  }
};

const prod = async (req, res) => {
  try {
    var x = await dbase.parseTable("MONTHLYPROD");
    res.status(200).json(x);
  } catch (error) {
    res.json(error.message);
  }
};

const welltest = async (req, res) => {
  try {
    var x = await dbase.parseTable("Monthlytest");
    res.status(200).json(x);
  } catch (error) {
    res.json(error.message);
  }
};

const inj = async (req, res) => {
  try {
    var x = await dbase.parseTable("MONTHLYWTRINJ");
    res.status(200).json(x);
  } catch (error) {
    res.json(error.message);
  }
};

const revpr = async (req, res) => {
  try {
    var x = await dbase.parseTable("PRESSURES");
    res.status(200).json(x);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { wellnames, prod, welltest, inj, revpr };
