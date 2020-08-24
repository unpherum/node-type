import server from "./src/lib/server";

const { PORT = "4000" } = process.env;

(async function main() {
  server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
})().catch(async (err) => {
  console.error(err);

  process.exit(1);
});
