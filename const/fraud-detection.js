export const features = [
    {
        "title": { 
            "en": "Old/Prior damages for auto insurance fraud detection", 
            "es": "Daños antiguos/prioritarios para la detección de fraudes en seguros de autos",
            "pt": "Danos antigos/anteriores para detecção de fraudes em seguros de automóveis" 
        },
        "text": { 
            "en": "Flag cases where any old or prior damage on the vehicle is detected", 
            "es": "Marcar casos donde se detecten daños antiguos o previos en el vehículo",
            "pt": "Marcar casos onde qualquer dano antigo ou anterior no veículo seja detectado"
        },
        "img": "old-prior-damage.svg"
    },
    {
        "title": { 
            "en": "Ensure all sections of the asset are covered", 
            "es": "Asegurar que todas las secciones del activo estén cubiertas",
            "pt": "Garantir que todas as seções do ativo estejam cobertas"
        },
        "text": { 
            "en": "Flag cases where certain sections of the vehicle are not covered e.g. right fender missing in images/video", 
            "es": "Marcar casos donde ciertas secciones del vehículo no estén cubiertas, por ejemplo, faltan en imágenes/video el guardabarros derecho",
            "pt": "Marcar casos em que certas seções do veículo não estejam cobertas, por exemplo, para-lama direito ausente em imagens/vídeo"
        },
        "img": "all-assets-covered.svg"
    },
    {
        "title": { 
            "en": "Metadata", 
            "es": "Metadatos",
            "pt": "Metadados"
        },
        "text": { 
            "en": "We read metadata e.g. GPS coordinates, time stamps to detect fraud.", 
            "es": "Leemos metadatos, por ejemplo, coordenadas GPS, marcas de tiempo para detectar fraudes.",
            "pt": "Lemos metadados, como coordenadas GPS, carimbos de tempo para detectar fraudes."
        },
        "img": "metadata.svg"
    },
    {
        "title": { 
            "en": "Stickers", 
            "es": "Pegatinas",
            "pt": "Adesivos"
        },
        "text": { 
            "en": "We detect stickers that may have been used to hide damages.", 
            "es": "Detectamos pegatinas que pueden haber sido utilizadas para ocultar daños.",
            "pt": "Detectamos adesivos que podem ter sido usados para esconder danos."
        },
        "img": "stickers.svg"
    },
    {
        "title": { 
            "en": "Cause of damage validation", 
            "es": "Validación de la causa del daño",
            "pt": "Validação da causa do dano"
        },
        "text": { 
            "en": "Predict the cause of damage e.g. hail damage; whether the car was hit by a car, truck, pole etc.", 
            "es": "Predecir la causa del daño, por ejemplo, daños por granizo; si el coche fue golpeado por un coche, camión, poste, etc.",
            "pt": "Prever a causa do dano, como danos por granizo; se o carro foi atingido por um carro, caminhão, poste, etc."
        },
        "img": "cause-of-damage.svg"
    },
    {
        "title": { 
            "en": "Personal Injury", 
            "es": "Lesiones personales",
            "pt": "Lesões pessoais"
        },
        "text": { 
            "en": "Predict probability of personal injury based on external car damage.", 
            "es": "Predecir la probabilidad de lesiones personales basándose en daños externos al coche.",
            "pt": "Prever a probabilidade de lesões pessoais com base em danos externos ao carro."
        },
        "img": "old-prior-damage.svg",
        "tag": "Coming Soon"
    },
    {
        "title": { 
            "en": "Specialised fraud detection", 
            "es": "Detección especializada de fraudes",
            "pt": "Detecção especializada de fraudes"
        },
        "text": { 
            "en": "Detect re-painting or prior repair using visual cues", 
            "es": "Detectar repintado o reparación previa utilizando indicios visuales",
            "pt": "Detectar repintura ou reparo anterior usando pistas visuais"
        },
        "img": "specialised-fraud-detection.svg"
    },
    {
        "title": { 
            "en": "Footsteps counting", 
            "es": "Conteo de pasos",
            "pt": "Contagem de passos"
        },
        "text": { 
            "en": "Count footsteps to reduce usage of multiple vehicles during photo/video capture", 
            "es": "Contar pasos para reducir el uso de múltiples vehículos durante la captura de fotos/video",
            "pt": "Contar passos para reduzir o uso de vários veículos durante a captura de fotos/vídeos"
        },
        "img": "footsteps-counting.svg"
    },
    {
        "title": { 
            "en": "Video inspections", 
            "es": "Inspecciones en video",
            "pt": "Inspeções em vídeo"
        },
        "text": { 
            "en": "Flag cases wherein the car moves out of frame during the video capture", 
            "es": "Marcar casos donde el coche se sale del encuadre durante la captura de video",
            "pt": "Marcar casos onde o carro sai do quadro durante a captura de vídeo"
        },
        "img": "video-inspection.svg"
    }
]
export const fraudDetectionFeatures = [
    {
        title: 'Real time feedback to customers on quality of captured photos/videos',
        text: 'Flags previously damaged areas to prevent duplicate claims.',
        img: 'fd-usecase-img1.svg',
        mainImg: 'Real time feedback customers.svg',
    },
    {
        title: 'Complete Asset Coverage',
        text: 'Ensures all vehicle sections are captured in photos/videos.',
        img: 'fd-usecase-img2.svg',
        mainImg: 'Complete Asset coverage.svg',
    },
    {
        title: 'Metadata Analysis',
        text: 'Reads GPS, timestamps, and other data to detect fraud.',
        img: 'fd-usecase-img3.svg',
        mainImg: 'Metadata Analysis.svg',
    },
    {
        title: 'Sticker Detection',
        text: 'Identifies stickers used to hide scratches or dents',
        img: 'fd-usecase-img4.svg',
        mainImg: 'Sticker Detection.svg',
    },
    {
        title: 'Damage Cause Validation',
        text: 'Predicts whether damage is from hail, collision, or external impact',
        img: 'fd-usecase-img5.svg',
        mainImg: 'Use for damage cause validation.svg',
    },
    {
        title: 'Footstep Counting',
        text: 'Counts footsteps to prevent multiple vehicles being used for a claim.',
        img: 'fd-usecase-img6.svg',
        mainImg: 'Footstep Counting.svg',
    },
    {
        title: 'Video Inspection Compliance',
        text: 'Flags cases where the vehicle moves out of frame during video capture.',
        img: 'fd-usecase-img7.svg',
        mainImg: 'Video Inspection Compliance.svg',
    },
    {
        title: 'Picture-in-picture detection',
        text: 'Detects cases where someone tries to submit fake images using picture/videos displayed on a screen',
        img: 'fd-usecase-img8.svg',
        mainImg: 'Picture-in-picture detection.png',
    },
]