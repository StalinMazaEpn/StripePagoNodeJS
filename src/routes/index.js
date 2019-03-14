const { Router } = require("express");
const router = Router();

const stripe = require("stripe")('sk_test_oaGOVyMuaPmwjbvXo1Mzjtte');

router.get("/", (req, res) => {
    // res.send("Bienvenido a mi App de Stripe");
    res.render("index");
});

router.post("/checkout", async (req, res) => {
    console.log(req.body);
    // CREO EL USUARIO
    const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
    });
    // CREO LOS CARGOS PAGO
    const charge = stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        customer: customer.id,
        description: 'Software Product Web comprado por: ' + customer.email
    });
    // RESPUESTA TRANSACCION
    res.render("download");

});

module.exports = router;