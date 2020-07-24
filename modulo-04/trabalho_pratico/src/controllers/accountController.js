import Account from "../models/account.js";

const deposito = async (req, res) => {
  try {
    const { agencia, conta, valor } = req.body;

    const contaDoc = await Account.findOneAndUpdate(
      { agencia, conta },
      { $inc: { balance: valor } },
      { new: true }
    );

    if (!contaDoc) {
      return res.status(404).send("Conta não encontrada!");
    }

    return res.send(contaDoc);
  } catch (error) {
    return res.status(500).send({ erro: error.getMessage() });
  }
};

const saque = async (req, res) => {
  try {
    const { agencia, conta, valor } = req.body;
    const TARIFA_SAQUE = 1.0;

    let contaDoc = await Account.findOne({ agencia, conta });

    if (!contaDoc) {
      return res.status(404).send("Conta não encontrada!");
    }

    const newBalance = contaDoc["balance"] + -1 * (valor + TARIFA_SAQUE);

    if (newBalance < 0) {
      return res.status(400).send("Saldo insuficiente para este valor!");
    }

    contaDoc = await Account.findByIdAndUpdate(
      contaDoc["_id"],
      { balance: newBalance },
      { new: true }
    );

    return res.send(contaDoc);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const saldo = async (req, res) => {
  try {
    const { agencia, conta } = req.body;

    const contaDoc = await Account.findOne({ agencia, conta });

    if (!contaDoc) {
      return res.status(404).send("Conta não encontrada!");
    }

    return res.send(contaDoc);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const remove = async (req, res) => {
  try {
    const { agencia, conta } = req.body;

    const contaDoc = await Account.findOneAndDelete({
      agencia,
      conta,
    });

    if (!contaDoc) {
      return res.status(404).send("Conta não encontrada!");
    }

    const totalContas = await Account.countDocuments({ agencia });

    return res.send(totalContas.toString());
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const transferencia = async (req, res) => {
  try {
    const { contas, valor } = req.body;

    let contaDocOrigem = await Account.findOne({ conta: contas["origem"] });

    if (!contaDocOrigem) {
      return res.status(404).send("Conta de origem não encontrada!");
    }

    let contaDocDestino = await Account.findOne({ conta: contas["destino"] });

    if (!contaDocDestino) {
      return res.status(404).send("Conta de destino não encontrada!");
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export { deposito, saque, saldo, remove, transferencia };
