let initialState = {
    Mapas: [{
        id: 1,
        title: 'Estadio',
        image: "/mapas/map1.jpg",
        description: "¡Redescubre el estadio! El mapa icónico del evento Road to SI 2021 se ha pulido para hacer su entrada definitiva en el juego. Cuenta con paredes de vidrio irrompibles que crean un grado inusual de transparencia entre atacantes y defensores en ciertos lugares. Y el pórtico que aparece en lo alto de la estructura principal permite que los atacantes se acerquen con estilo. Una vez dentro, utilice las áreas codificadas por colores.-info/maps/stadium"
    },
    {
        id: 2,
        title: 'Combate-Cercano',
        image: "/mapas/map2.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps/close-quarter"
    },
    {
        id: 3,
        title: 'Praderas-Esmeralda',
        image: "/mapas/map3.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps/emerald-plains"
    },
    {
        id: 4,
        title: 'Banco',
        image: "/mapas/map4.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps/bank"
    },
    {
        id: 5,
        title: 'Frontera',
        image: "/mapas/map5.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    },
    {
        id: 6,
        title: 'Chalet',
        image: "/mapas/map6.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    },
    {
        id: 7,
        title: "Club",
        image: "/mapas/map7.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    },
    {
        id: 8,
        title: 'Litoral',
        image: "/mapas/map8.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    },
 
    {
        id: 9,
        title: 'Consulado',
        image: "/mapas/map9.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    },
    {
        id: 10,
        title: 'Favela',
        image: "/mapas/map10.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    },
    {
        id: 11,
        title: 'Fortaleza',
        image: "/mapas/map11.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    },
    {
        id: 12,
        title: 'Base-Hereford',
        image: "/mapas/map12.jpg",
        description: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps"
    }]
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default mapReducer;