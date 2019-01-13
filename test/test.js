const extRequest = require('../index.js');
const request = require('request');

const TEST_CTRL = {
  REQUEST: true,
  REQUEST_GET: true,
  REQUEST_POST: true,
  REQUEST_ORIGIN: true
};

const TEST_URL = 'http://www.yy.com/yyweb/user/queryUserInfo.json';

const fn = {
  checkError(err, res, body) {
    expect(err).toEqual(null);
    expect(/200|403/.test(`${res.statusCode}`)).toEqual(true);
    expect(body !== null).toEqual(true);
  }
};

if (TEST_CTRL.REQUEST) {
  it('extRequest(url)', async () => {
    const [err, res, body] = await extRequest(TEST_URL);
    fn.checkError(err, res, body);
  });

  it('extRequest(opt)', async () => {
    const [err, res, body] = await extRequest( {method: 'GET', url: TEST_URL} );
    fn.checkError(err, res, body);
  });
}

if (TEST_CTRL.REQUEST_GET) {
  it('extRequest.get(url)', async () => {
    const [err, res, body] = await extRequest.get(TEST_URL);
    fn.checkError(err, res, body);
  });

  it('extRequest.get(opt)', async () => {
    const [err, res, body] = await extRequest.get({
      url: TEST_URL,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36 YYL/0.1.0'
      }
    });

    fn.checkError(err, res, body);
  });

  it('extRequest.get(url)', async () => {
    const [err, res, body] = await extRequest.get(TEST_URL);
    fn.checkError(err, res, body);
  });

  it('extRequest.get(url, opt)', async () => {
    const [err, res, body] = await extRequest.get(TEST_URL, {
      form: {
        debug: 1
      }
    });
    fn.checkError(err, res, body);
  });
}

if (TEST_CTRL.REQUEST_POST) {
  it('extRequest.post(url)', async () => {
    const [err, res, body] = await extRequest.post(TEST_URL);
    fn.checkError(err, res, body);
  });

  it('extRequest.post(opt)', async () => {
    const [err, res, body] = await extRequest.post( { url: TEST_URL } );
    fn.checkError(err, res, body);
  });

  it('extRequest.post(url, opt)', async () => {
    const [err, res, body] = await extRequest.post(TEST_URL, { form: { callback: 'hello' } });
    fn.checkError(err, res, body);
  });
}

if (TEST_CTRL.REQUEST_ORIGIN) {
  it('extRequest.origin', async () => {
    expect(extRequest.origin).toEqual(request);
  });
}
