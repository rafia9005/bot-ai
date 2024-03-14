function _0x2252() {
  const _0x3a0736 = [
    "Do\x20not\x20share\x20your\x20session\x20with\x20anyone.\x0a\x0aNow\x20upload\x20your\x20creds.json\x20in\x20A17-SESSION\x20folder.\x0aThen\x20you\x20can\x20deploy\x20on\x20your\x20favourite\x20platform.\x0a\x0a*Thnaks\x20for\x20using\x20A17\x20Wishing\x20you\x20an\x20great\x20day...\x20😇*",
    "82165XyQJTQ",
    "150378OaExJV",
    "119WmSceT",
    "GhRGdwfaMVDCEoeAdzILfl",
    "statusCode",
    "./A17-SESSION/creds.json",
    "55630bHthlm",
    "readFileSync",
    "application/json",
    "508248iIjDIs",
    "A17\x20Multi\x20QR",
    "qrcode-terminal",
    "output",
    "99aqsvze",
    "open",
    "60sVBILL",
    "./A17-SESSION",
    "sendMessage",
    "@adiwajshing/baileys",
    "Hey\x20guys,\x20A17\x20here!",
    "133152pbaGkj",
    "messages.upsert",
    "exit",
    "error",
    "creds.json",
    "6CZVTyj",
    "close",
    "user",
    "creds.update",
    "21887EmmgRu",
    "1.0.0",
    "312408OROGWq",
  ];
  _0x2252 = function () {
    return _0x3a0736;
  };
  return _0x2252();
}
const _0x4d525c = _0x3cd6;
(function (_0x378f4c, _0x2b729c) {
  const _0x376c11 = _0x3cd6,
    _0x5527ab = _0x378f4c();
  while (!![]) {
    try {
      const _0x3e82cb =
        -parseInt(_0x376c11(0x1a9)) / 0x1 +
        -parseInt(_0x376c11(0x1ae)) / 0x2 +
        (-parseInt(_0x376c11(0x1a5)) / 0x3) *
          (-parseInt(_0x376c11(0x1ab)) / 0x4) +
        (parseInt(_0x376c11(0x1ad)) / 0x5) *
          (-parseInt(_0x376c11(0x19b)) / 0x6) +
        (-parseInt(_0x376c11(0x1af)) / 0x7) *
          (-parseInt(_0x376c11(0x1a0)) / 0x8) +
        parseInt(_0x376c11(0x195)) / 0x9 +
        (parseInt(_0x376c11(0x1b3)) / 0xa) *
          (-parseInt(_0x376c11(0x199)) / 0xb);
      if (_0x3e82cb === _0x2b729c) break;
      else _0x5527ab["push"](_0x5527ab["shift"]());
    } catch (_0x3738f3) {
      _0x5527ab["push"](_0x5527ab["shift"]());
    }
  }
})(_0x2252, 0x2cf57);
function _0x3cd6(_0x3e77d3, _0x3676a1) {
  const _0x2252de = _0x2252();
  return (
    (_0x3cd6 = function (_0x3cd62c, _0x4ff196) {
      _0x3cd62c = _0x3cd62c - 0x194;
      let _0x4de260 = _0x2252de[_0x3cd62c];
      return _0x4de260;
    }),
    _0x3cd6(_0x3e77d3, _0x3676a1)
  );
}
const makeWASocket = require("@adiwajshing/baileys")["default"],
  qrcode = require(_0x4d525c(0x197)),
  pino = require("pino"),
  fs = require("fs"),
  { delay, useMultiFileAuthState } = require(_0x4d525c(0x19e));
async function connect() {
  const _0x327830 = _0x4d525c,
    { state: _0x176c17, saveCreds: _0x4f2863 } = await useMultiFileAuthState(
      _0x327830(0x19c)
    );
  async function _0x49bee3() {
    const _0x990e38 = _0x327830;
    let _0x119858 = makeWASocket({
      auth: _0x176c17,
      printQRInTerminal: !![],
      logger: pino({ level: "fatal" }),
      auth: _0x176c17,
      browser: [_0x990e38(0x196), "Safari", _0x990e38(0x1aa)],
    });
    _0x119858["ev"]["on"]("connection.update", async (_0x5356e2) => {
      const _0x2e83a4 = _0x990e38,
        { connection: _0x592ee8, lastDisconnect: _0x473984 } = _0x5356e2;
      if (_0x592ee8 == _0x2e83a4(0x19a)) {
        await delay(0x3e8 * 0xa);
        let _0x2d4329 = fs[_0x2e83a4(0x1b4)](_0x2e83a4(0x1b2));
        await delay(0x3e8 * 0x2);
        const _0xd4b6e = await _0x119858[_0x2e83a4(0x19d)](
          _0x119858[_0x2e83a4(0x1a7)]["id"],
          {
            document: _0x2d4329,
            mimetype: _0x2e83a4(0x194),
            fileName: _0x2e83a4(0x1a4),
          }
        );
        await _0x119858["sendMessage"](
          _0x119858[_0x2e83a4(0x1a7)]["id"],
          { text: _0x2e83a4(0x1ac) },
          { quoted: _0xd4b6e }
        ),
          await delay(0x3e8 * 0x2);
        const _0x2fad19 = await _0x119858["groupAcceptInvite"](
          _0x2e83a4(0x1b0)
        );
        await delay(0x3e8 * 0x2),
          _0x119858["sendMessage"](_0x2fad19, { text: _0x2e83a4(0x19f) }),
          await delay(0x3e8 * 0xa),
          process[_0x2e83a4(0x1a2)](0x0);
      }
      _0x592ee8 === _0x2e83a4(0x1a6) &&
        _0x473984 &&
        _0x473984[_0x2e83a4(0x1a3)] &&
        _0x473984[_0x2e83a4(0x1a3)][_0x2e83a4(0x198)][_0x2e83a4(0x1b1)] !=
          0x191 &&
        _0x49bee3();
    }),
      _0x119858["ev"]["on"](_0x990e38(0x1a8), _0x4f2863),
      _0x119858["ev"]["on"](_0x990e38(0x1a1), () => {});
  }
  _0x49bee3();
}
connect();
