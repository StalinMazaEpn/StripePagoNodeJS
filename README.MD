# Ejercicio de Integración de Pagos con NodeJS y Stripe

Para el Proyecto se Necesitan las Dependencias Necesarias:

```bash
	npm install express express-handlebars npm install stripe --save
```

Para Probarlo:

- Se debe descargar el repositorio 
- Instalar las dependencias con ***npm install***

### Stripe API

Los datos necesarios son los siguientes: 

    - data-key: llave
    - data-amount: monto pago en centavos dolar
    - data-name: nombre sitio
	- data-description: descripcion sitio
    - data-image: img logotipo

# Tarjetas de Prueba

4242424242424242	Visa
4000056655665556	Visa (debit)

Se puede usar cualquier fecha futuro de expiracion, cualquier nombre tarjeta, cvc y codigo postal en el modo test de Pago.

Para más información aquí https://memberful.com/help/general/using-test-credit-cards/