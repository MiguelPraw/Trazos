const { v4 : uuidv4 } = require('uuid');

const bbdd = {
    ofertas : [
        {
            dato        : 'oferta',
            imagen      : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/qchcxriwzrhrkwkakksi',
            nombre      : '¡200 Yums extra!',
            descripcion : 'Por tiempo limitado...',
            url         : 'yums-extra'
        },
        {
            dato        : 'oferta',
            imagen      : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/bb2hznx3zwissy6v5g9a',
            nombre      : 'Selección Insider',
            descripcion : 'Restaurantes que marca la diferencia y con los que siempre acertarás.',
            url         : 'seleccion-insider'
        },
        {
            dato        : 'oferta',
            imagen      : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/yirkeqwqyzfzzhq9r5yc',
            nombre      : 'Tarjeta Regalo The Fork',
            descripcion : 'Porque el regalo perfecto no existe',
            url         : 'tarjeta-de-regalo'
        },
        {
            dato        : 'oferta',
            imagen      : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/WNG-HP-MICHELIN-ES',
            nombre      : 'Guia Mechilin',
            descripcion : '¡Reserva ya en los restaurantes de la Guía MICHELIN en solo tres clics!',
            url         : 'guia-michelin'
        },
        {
            dato        : 'oferta',
            imagen      : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/nhatfgxv7iy0wrou0o8g',
            nombre      : 'El doble siempre es mejor',
            descripcion : 'Gana el doble de Yums por reservar en la selección de restaurantes DOBLE YUMS',
            url         : 'doble-yums'
        },
        {
            dato        : 'oferta',
            imagen      : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/mtswn2dpeuxezezyk4lm',
            nombre      : 'Los favoritos ',
            descripcion : 'Saborea los restaurantes que han llegado a lo más alto gracias a miles de opiniones.',
            url         : 'los-favoritos'
        },
    ],
    ciudades  : [
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_280,h_200,c_fill,g_auto:subject,q_auto,f_auto/homepage_city_restaurant/415144.jpg',
        nombre : 'New York',
        url    : 'new-york',
        pais   : 'eeuu'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/328022.jpg',
        nombre : 'Madrid',
        url    : 'madrid',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/41710.jpg',
        nombre : 'Barcelona',
        url    : 'barcelona',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/572981.jpg',
        nombre : 'Valencia',
        url    : 'valencia',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/506461.jpg',
        nombre : 'Sevilla',
        url    : 'sevilla',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/613552.jpg',
        nombre : 'Zaragoza',
        url    : 'zaragoza',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/55170.jpg',
        nombre : 'Bilbao',
        url    : 'bilbao',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/194475.jpg',
        nombre : 'Granada',
        url    : 'granada',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/330651.jpg',
        nombre : 'Málaga',
        url    : 'malaga',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/11341.jpg',
        nombre : 'Alicante',
        url    : 'alicante',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/188126.jpg',
        nombre : 'Gijón',
        url    : 'gijon',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/552557.jpg',
        nombre : 'Toledo',
        url    : 'toledo',
        pais   : 'espana'
    },
    {
        dato   : 'ciudad',
        imagen : 'https://c.tfstatic.com/w_150,h_150,c_fill,g_auto:subject,q_auto,f_auto/homepage_city/412057.jpg',
        nombre : 'Palma de Mayorca',
        url    : 'palma-de-mayorca',
        pais   : 'espana'
    },
    ],
    restaurantes  : [
    {
        id     : uuidv4(),
        dato   : 'restaurante',
        imagen : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/bfddc5e8-e0ea-42bb-9d52-0ba3c65372b6/d9b6920c-7c50-40a0-b787-b5ccbc95d2ba.jpg',
        nombre : 'Artillería',
        url    : 'artilleria',
        tipos  : ['Mediterráneo','Creativo'],
        nota   : 9.5,
        pagos  : {
        yums : true,
        pay  : true
        },
        descripcion : 'Madrid 28008 Cuenta de San Vicente 4',
        ciudad : 'madrid',
        oferta : 50,
    },
    {
        id     : uuidv4(),
        dato   : 'restaurante',
        imagen : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/1e323c98-e94a-4a65-a048-bc94da380620/24507fec-0f71-4ed5-96f5-3cc3b398c89d.jpg',
        nombre : 'Brumch & Wines',
        url    : 'brumch-and-wines',
        tipos  : ['Mediterráneo'],
        nota   : 9,
        pagos  : {
        yums : false,
        pay  : true
        },
        descripcion : 'Cádiz 18004 Santa María del Mar',
        ciudad : 'cadiz',
    },
    {
        id     : uuidv4(),
        dato   : 'restaurante',
        imagen : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/e7973540-cb03-4894-b38a-4b40b61e1d89/bac7f1e0-451a-490a-941c-8d273a159eea.jpg',
        nombre : 'Las Flores',
        url    : 'las-flores',
        tipos  : ['Mediterráneo','Pescado'],
        nota   : 8.4,
        pagos  : {
        yums : true,
        pay  : true
        },
        descripcion : 'Madrid 28008 Cuenta de San Vicente 4',
        ciudad : 'madrid',
        oferta : 50,
    },
    {
        id     : uuidv4(),
        dato   : 'restaurante',
        imagen : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
        nombre : 'La Casa de las Hadas',
        url    : 'la-casa-de-las-hadas',
        tipos  : ['Mediterráneo'],
        nota   : 7,
        pagos  : {
        yums : false,
        pay  : true
        },
        descripcion : 'Barcelona Plaça Catalunya',
        ciudad : 'barcelona',
        oferta : 30
    },

    ]
}

module.exports = {
    bbdd
}