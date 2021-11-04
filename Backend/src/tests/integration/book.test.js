const request = require("supertest");
let server;

describe("api", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(() => {
    server.close();
  });

  describe("GET /shelf/poetry/read", () => {
    test("should return all books on the poetry shelf", async () => {
      const res = await request(server).get("/api/shelf/poetry/read");
      expect(res.status).toBe(200);
      expect(res.body.result.length).toBe(38);
      expect(
        res.body?.result?.some(
          (b) => b.title.toLowerCase() == "practical rubber fish"
        )
      ).toBeTruthy();
    });
  });
  describe("GET /book/slugName/read", () => {
    test("should return details on a particular book", async () => {
      const res = await request(server).get(
        "/api/book/practical-rubber-fish-31/read"
      );
      expect(res.status).toBe(200);
      expect(res.body.result).toBeTruthy();
      expect(res.body.result).toMatchObject({ title: "Practical Rubber Fish" });
    });
  });
});
