import { withSessionRoute } from "../lib/config/withSession";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
  if (req.method === "POST") {
    req.session.user = {
      id: req.body.uniqueId,
      username: req.body.email,
      isAdmin: true,
    };
    await req.session.save();
    res.send({ ok: true });
  }
}
