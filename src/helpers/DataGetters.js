export const getFolios = () =>{
    const folios = [
        "Oliver Hansen",
        "Van Henry",
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Miriam Wagner",
        "Bradley Wilkerson",
        "Virginia Andrews",
        "Kelly Snyder",
        
    ];

    return folios;
}


export const getLineas = () =>{

    // Lineas
    const lineas = [
        "Linea 1",
        "Linea 2",
        "Linea 3",
        "Linea 4",
        "Linea 5",
        "Linea 6",
        "Linea 7",
    ];

  return lineas;
}


export const getSentido = () =>{
    const sentidos = [
        "S-N (117)",
        "N-S (118)",
        "O-P (121)",
        "P-O (122)",
        "N-P (123)",
        "P-N (124)"
    ]

    return sentidos;
}



export const getInfromantes = () =>{
    const informa = [
        "arce alfa",
        "ébano 1",
        "ébano 2",
        "ébano 3",
        "ébano 4",
        "ébano 5",
        "ébano 6",
        "ébano 7",
        "ébano 8",
        "ébano 9",
        "ébano 10",
        "ébano 11",
        "ébano 12",
        "ébano 13",
        "ébano 14",
        "ébano 15",
        "ébano 16",
        "ébano 17",
        "ébano 18",
        "ébano 19",
        "ébano 20",
        "ébano 21"
    ];

    return informa;
}

export const getEstaciones = () =>{
    const estaciones = [
        "Estacion 1",
        "Estacion 2",
        "Estacion 3",
        "Estacion 4",
        "Estacion 5",
        "Estacion 6",
        "Estacion 7",
        "Estacion 8",
        "Estacion 9",
        "Estacion 10",
        "Estacion 11",
        "Estacion 12",
        "Estacion 13",
        "Estacion 14"
    ];

    return estaciones;
}


export const getEconomicos = () =>{    
    const economicos = [
        "Económico 1",
        "Económico 2",
        "Económico 3",
        "Económico 4",
        "Económico 5",
        "Económico 6",
        "Económico 7",
        "Económico 8",
        "Económico 9",
        "Económico 10",
        "Económico 11",
        "Económico 12",
        "Económico 13",
        "Económico 14"
    ];

    return economicos;
}


export const getEmpresas = () =>{
    const empresas = [
        "Empresa 1",
        "Empresa 2",
        "Empresa 3",
        "Empresa 4",
        "Empresa 5",
        "Empresa 6",
        "Empresa 7",
        "Empresa 8",
        "Empresa 9",
        "Empresa 10",
        "Empresa 11",
        "Empresa 12",
        "Empresa 13",
        "Empresa 14"
    ];

    return empresas;
}


export const getReferencias = () =>{

    const referenias = [
        {
            id: "L1",
            name : "L01 - Linea 1 - Corredor Insurgentes (33)",
            rutas :[
                {
                    id: "L11",
                    name : "01-101 A1",
                    children: []
                }, 
                {
                    id: "L12",
                    name : "01-102 A2",
                    children: []
                }, 
                {
                    id: "L13",
                    name : "01-103 A3",
                    children: []
                }, 
                {
                    id: "L14",
                    name : "01-104 A1",
                    children: []
                },                            
            ]

        },
        {
            id: "L2",
            name : "L02 - Linea 2 - Eje 4 sur (34)",
            rutas :[
                {
                    id: "L21",
                    name : "02-201 C1",
                    children: []
                }, 
                {
                    id: "L22",
                    name : "02-202 C2",
                    children: []
                }, 
                {
                    id: "L23",
                    name : "02-203 C3",
                    children: []
                }, 
                {
                    id: "L24",
                    name : "02-204 C4",
                    children: []
                },                            
            ]

        },
        {
            id: "L4",
            name : "L04 - Linea 4 - Buenavista San Lazaro Aeropuerto",
            rutas :[
                {
                    id: "L41",
                    name : "04-401 E1 Norte",
                    children: []
                }, 
                {
                    id: "L42",
                    name : "04-402 E2 Sur",
                    children: []
                }, 
                {
                    id: "L43",
                    name : "04-403 E3 Norte",
                    children: []
                },                                    
            ]

        },
    ]

    return referenias;
}
