export const features = [
    { 
        name: {
            "en": 'Metal/Plastic/Fibre Parts',
            "es": "Piezas de metal/plástico/fibra",
            "pt": "Peças de metal/plástico/fibra"
        }, 
        img: 'metal-parts.svg', 
        items: {
            "en": ['Scratch', 'Spot', 'Dents - Shallow, deep & design', 'Stitch/Screw', 'Broken', 'Rust', 'Dislocation/Seperation of parts', 'Missing part', 'Tear'],
            "es": ['Rasguño', 'Punto', 'Abolladuras: superficiales, profundas y con diseño', 'Costura/tornillo', 'Roto', 'Óxido', 'Dislocación/separación de piezas', 'Parte faltante', 'Desgarro'],
            "pt": ['Arranhão', 'Mancha', 'Amassados - Rasos, profundos e com design', 'Costura/parafuso', 'Quebrado', 'Ferrugem', 'Deslocamento/separação de peças', 'Peça ausente', 'Rasgo']
        }
    },
    { 
        name: {
            "en": 'Glass Parts',
            "es": "Piezas de vidrio",
            "pt": "Peças de vidro"
        }, 
        img: 'glass-part.svg', 
        items: {
            "en": ['Chip off', 'Small crack', 'Large crack', 'Spider'],
            "es": ['Chip off', 'Pequeña grieta', 'Grieta grande', 'Araña'],
            "pt": ['Desprendimento', 'Pequena trinca', 'Grande trinca', 'Teia de aranha']
        }
    },
    { 
        name: {
            "en": 'Rubber Parts',
            "es": "Piezas de goma",
            "pt": "Peças de borracha"
        }, 
        img: 'rubber-parts.svg', 
        items: {
            "en": ['Small crack', 'Large crack', 'Puncture', 'Chip off'],
            "es": ['Pequeña grieta', 'Grieta grande', 'Perforación', 'Desprendimiento'],
            "pt": ['Pequena trinca', 'Grande trinca', 'Perfuração', 'Desprendimento']
        }
    },
    { 
        name: {
            "en": 'Undercarriage',
            "es": "Tren de aterrizaje",
            "pt": "Parte inferior do veículo"
        }, 
        img: 'undercariage.svg', 
        items: {
            "en": ['Rust', 'Leakage'],
            "es": ['Óxido', 'fuga'],
            "pt": ['Ferrugem', 'Vazamento']
        }
    },
    { 
        name: {
            "en": 'Internal/hidden damage',
            "es": "Daño interno/oculto",
            "pt": "Dano interno/oculto"
        }, 
        img: 'hidden-damage.svg', 
        items: {
            "en": ['75+ internal damages e.g. tail gate lock, radiator'],
            "es": ['75+ daños internos, p. cerradura del portón trasero, radiador'],
            "pt": ['75+ danos internos, ex. fechadura da porta traseira, radiador']
        }
    },
    { 
        name: {
            "en": 'Interior damages',
            "es": "Daños interiores",
            "pt": "Danos internos"
        }, 
        img: 'interior-damages.svg', 
        items: {
            "en": ['Seats torn', 'Dashboard crack', 'Dirt'],
            "es": ['Asientos rotos', 'Salpicadero agrietado', 'Suciedad'],
            "pt": ['Assentos rasgados', 'Trincas no painel', 'Sujeira']
        }
    },
]

export const photoAPIFeatures = [
    {
      img: '/img/productFeature1.png',
      title: 'Damage Detectionnn',
      text: 'Detect 21 types of damages across metal, plastic, fiber, glass and rubber parts'
    },
    {
      img: '/img/productFeature2.png',
      title: 'Fraud Detection',
      text: 'Specialised fraud detection using photos/videos e.g. old/prior damages, metadata analysis',
    },
    {
      img: '/img/productFeature3.png',
      title: 'Claim Assessment',
      text: "Claim estimation & review products customized for each market's repair practices"
    },
    {
      img: '/img/productFeature4.png',
      title: 'Text Scanning',
      text: 'Auto-read Odometer, VIN, License plate or any other text on the vehicle'
    },
    {
      img: '/img/productFeature5.png',
      title: 'Photo & Video Capture App for Vehicle Inspection',
      text: 'Web apps for high quality photo and video capture by the end customer'
    },
    {
      img: '/img/productFeature6.png',
      title: 'Real Time Guidance with Vehicle Inspection App',
      text: 'Real time feedback to customers on quality of captured photos/videos'
    }
  ]

export const vehiclesCovered = [
  {
    img: '/img/car-on-shadow.png',
    imgWidth: 650,
    imgHeight: 300,
    label: 'CAR'
  },
  {
    img: '/img/bike-on-shadow.png',
    imgWidth: 650,
    imgHeight: 300,
    label: 'BIKE'
  },
  {
    img: '/img/bus-on-shadow.png',
    imgWidth: 650,
    imgHeight: 300,
    label: 'BUS'
  },
  {
    img: '/img/suv-on-shadow.png',
    imgWidth: 650,
    imgHeight: 300,
    label: 'SUV'
  },
  {
    img: '/img/truck-on-shadow.png',
    imgWidth: 650,
    imgHeight: 300,
    label: 'TRUCK'
  },
  {
    img: '/img/jeep-on-shadow.png',
    imgWidth: 650,
    imgHeight: 300,
    label: 'JEEP'
  },
  {
    img: '/img/pickupcar-on-shadow.png',
    imgWidth: 650,
    imgHeight: 300,
    label: 'PICKUPCAR'
  },
]
export  const coveredDamages = [
    {
      type: 'Car',
      img: '/img/damages-in-car.svg',
      damages: ['Metal/Plastic/Fibre Parts','Glass Parts','Rubber Parts','Interior Parts'],
      imgWidth: '180',
      imgHeight: '88'
    },
    {
      type: 'Motor Bike',
      img: '/img/damages_in_bike.svg',
      damages: ['Metal/Plastic/Fibre Parts','Glass Parts','Rubber Parts','Interior Parts'],
      imgWidth: '150',
      imgHeight: '90'
    },
    {
      type: 'Heavy Vehicle',
      img: '/img/damages_in_heavy_vehicles.svg',
      damages: ['Metal/Plastic/Fibre Parts','Glass Parts','Rubber Parts','Interior Parts'],
      imgWidth: '135',
      imgHeight: '90'
    }
  ]