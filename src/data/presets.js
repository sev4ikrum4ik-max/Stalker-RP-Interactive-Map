/*
Добавляйте сюда только объекты,
для которых существуют файлы
в icons/ и images/.
*/

export const presets = {

    mutant: [

       {
    id: "blinddog",
    name: "Слепой пёс",
    danger: 1,
    description: "Слепой пес — самый привычный представитель фауны Зоны. Стаи этих псов можно встретить везде, кроме совершенно гибельных мест.",
    icon: "icons/mutants/blind_dog.png",
    image: "images/mutants/blind_dog.webp"
},

        {
            id: "boar",
            name: "Кабан",
            danger: 2,
            description: "Кабан — одно из многочисленных животных Зоны, подвергшееся воздействию аномальной энергии."
        },

        {
            id: "flesh",
            name: "Плоть",
            danger: 2,
            description: "Плоть — мутировавшие до неузнаваемости свиньи, одни из самых безобидных мутантов в Зоне."
        },

        {
            id: "bloodsucker",
            name: "Кровосос",
            danger: 5,
            description: "Кровосос — редставляет собой высокого, сутулого гуманоида без волосяного покрова. Его главная особенность — пугающие щупальца на месте рта, с помощью которых он высасывает кровь из жертв."
        },

        {
            id: "controller",
            name: "Контролёр",
            danger: 5,
            description: "Контролёр — один из самых опасных мутантов, встречающихся в Зоне. Он обладает высокими телепатическими способностями — поражения мозга жертвы практически всегда необратимы."
        },

        {
            id: "burer",
            name: "Бюрер",
            danger: 4,
            description: "Бюрер — это опасный карлик-мутант с мощными телекинетическими способностями, обитающий в темных подземельях и лабораториях."
        },

        {
            id: "chimera",
            name: "Химера",
            danger: 5,
            description: "Химера — быстрый и опасный мутант, который имеет вид четвероногого существа с двумя головами."
        },
        {
            id: "tushkan",
            name: "Тушкан",
            danger: 1,
            description: "Тушкан — маленькое крысоподобное существо, передвигающиеся на двух лапах."
        },
        {
            id: "snork",
            name: "Снорк",
            danger: 4,
            description: "Снорк — это агрессивный мутант-гуманоид, ведущий животный образ жизни."
        },
        {
            id: "cat",
            name: "Кот-Баюн",
            danger: 3,
            description: "Кот, который имеет худощавое тело с низким шерстяным покровом, и длинные лапы на конце которых острые когти. По всему телу имеются рваные раны, а по бокам горла располагаются гнойно-бледные наросты."
        },
        {
            id: "pseudo_dog",
            name: "Псевдособака",
            danger: 3,
            description: " мутанты, обитающие почти на всей территории Зоны. Некогда это были дикие волки, обитавшие в лесах Зоны на момент катастрофы, которые и стали родоначальниками этого вида мутантов."
        },
        {
    id: "izlom",
    name: "Излом",
    danger: 3,
    description: "Излом — высокий худощавый мутант с непропорционально длинными руками.",
    icon: "icons/mutants/izlom.png",
    image: "images/mutants/izlom.webp"
},

    ],

    anomaly: [

        {
            id: "electra",
            name: "Электра",
            danger: 4,
            description: "Электрическая аномалия, одна из наиболее распространённых в Зоне."
        },

        {
            id: "chemical",
            name: "Химическая",
            danger: 4,
            description: "Аномалия, наносящая сильные химические ожоги."
        },

        {
            id: "gravitational",
            name: "Гравитационная",
            danger: 5,
            description: "Аномалии влияющие на гравитационные поля окружающей территории"
        },

        {
            id: "glass_shards",
            name: "Стеклянные осколки",
            danger: 3,
            description: "Аномалия наполнененная мелкими осколками сетка, и, посколько внутри него остановилось время, осколки превратились в смертоносные и острые, как бритва, лезвия."
        },

        {
            id: "thermal",
            name: "Термическая",
            danger: 4,
            description: "Аномалии, которые наносят колоссальный урон высокой температурой."
        }

    ], 
   location: [

    {
        id: "bandit_base",
        name: "База братвы",
        description: "Главная база братвы. Центр деятельности группировки.",
        icon: "icons/locations/delyuga.png",
        image: "images/locations/delyuga.webp"
    },

    {
        id: "omega_bunker",
        name: "Бункер Омега",
        description: "Защищённый Бункер Омега.",
        icon: "icons/locations/ecologists.png",
        image: "images/locations/ecologists.webp"
    },

    {
        id: "ikar_bunker",
        name: "Бункер Икар",
        description: "Защищённый комплекс Икар.",
        icon: "icons/locations/ecologists.png",
        image: "images/locations/ecologists.webp"
    },

    {
        id: "freedom_base",
        name: "База Свободы",
        description: "Главная база группировки Свобода.",
        icon: "icons/locations/freedom.png",
        image: "images/locations/freedom.webp"
    },

    {
        id: "msop_camp",
        name: "Лагерь МСОП",
        description: "Основной лагерь МСОП.",
        icon: "icons/locations/military.png",
        image: "images/locations/military.webp"
    },

    {
        id: "midday_base",
        name: "База Полдня",
        description: "Главная база группировки Полдень.",
        icon: "icons/locations/noontide.png",
        image: "images/locations/noontide.webp"
    },

    {
        id: "iskra_bunker",
        name: "Бункер ЧНИГ Искра",
        description: "Исследовательский бункер ЧНИГ «Искра».",
        icon: "icons/locations/spark.png",
        image: "images/locations/spark.webp"
    },

    {
        id: "varta_base",
        name: "База Варты",
        description: "Главная база Варты.",
        icon: "icons/locations/ward.png",
        image: "images/locations/ward.webp"
    }

], 

radiation: [

    {
        id: "low",
        name: "Низкая радиация",
        danger: 1,
        description: "Небольшой уровень радиации.",
        icon: "icons/radiation/radiation_low.png",
        image: "images/radiation/radiation_low.webp"
    },

    {
        id: "medium",
        name: "Средняя радиация",
        danger: 3,
        description: "Опасный уровень радиации.",
        icon: "icons/radiation/radiation_medium.png",
        image: "images/radiation/radiation_medium.webp"
    },

    {
        id: "high",
        name: "Высокая радиация",
        danger: 5,
        description: "Смертельно опасная радиация.",
        icon: "icons/radiation/radiation_high.png",
        image: "images/radiation/radiation_high.webp"
    }

],
psi: [

    {
        id: "weak",
        name: "Слабое ПСИ",
        danger: 2,
        description: "Слабое пси-излучение.",
        icon: "icons/psi/psi_low.png",
        image: "images/psi/psi_low.webp"
    },

    {
        id: "medium",
        name: "Среднее ПСИ",
        danger: 4,
        description: "Опасное пси-излучение.",
        icon: "icons/psi/psi_medium.png",
        image: "images/psi/psi_medium.webp"
    },

    {
        id: "strong",
        name: "Сильное ПСИ",
        danger: 5,
        description: "Крайне опасное пси-излучение.",
        icon: "icons/psi/psi_high.png",
        image: "images/psi/psi_high.webp"
    }

]
    

};