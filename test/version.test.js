const test = require("node:test");
const assert = require("node:assert/strict");
const { server } = require("../src/app");

test("GET /version returns service name and version", async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  try {
    const res = await fetch(`http://127.0.0.1:${port}/version`);
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), {
      service: "platform-demo",
      version: "1.0.0",
    });
  } finally {
    server.close();
  }
});