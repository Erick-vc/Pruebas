const router = require("express").Router();
const authRouter = require("./gestion_usuarios");
const categoryRouter = require("./category");
const dishesRouter = require("./dishes.js");
const facturaRouter = require("./factura.js");
const pedidoRouter = require("./pedido")


// router.use("/ux-gestion-usuarios/da/servicio-al-cliente/v1/", authRouter);
router.use("/auth/", authRouter);


router.use("/category", categoryRouter);
router.use("/dishes", dishesRouter);
router.use("/factura", facturaRouter);
router.use("/pedido", pedidoRouter);
module.exports = router;
