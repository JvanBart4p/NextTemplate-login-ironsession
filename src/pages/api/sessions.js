import { withSessionRoute } from "../lib/config/withSession";

const VALID_EMAIL = "info@4proces.nl";
const VALID_PASSWORD = "Test1234";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      req.session.user = {
        username: "Kevin",
        isAdmin: true,
      };
      await req.session.save();
      res.send({ ok: true });
    }
    return res.status(403).send("");
  }
  return res.status(404).send("");
}
