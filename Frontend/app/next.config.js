module.exports = {
    future: {
        webpack5: true,
      },
    env: {
        url_restaurant: process.env.URL_RESTAURANT,
        url_waiter: process.env.URL_WAITER,
        secret_jwt: process.env.SECRET_JWT
    }
}