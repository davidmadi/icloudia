var BaseCrud = global.rootRequire('app/routes/baseCrud');

class GlobalPrototype
{
  inject(globalVar)
  {
    globalVar.BaseCrud = BaseCrud;
  }
}

module.exports = new GlobalPrototype();