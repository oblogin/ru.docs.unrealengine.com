const dictionary = [
    {
        ru: "Сцена",
        en: "Scene",
        root: [["сцен"]],
        desc: "Сцена содержит окружение и меню вашей игры. Считайте, что каждый уникальный файл сцены - это уникальный уровень. В каждой сцене вы размещаете окружение, препятствия и декорации, по сути проектируя и создавая свою игру по частям.",
        link: "/Manual/CreatingScenes.htm"
    }
    ,{
        ru: "Игровой Объект",
        en: "GameObjects",
        root: [["игров", "объект"]],
        desc: "Основной объект в сценах Unity, который может представлять персонажей, реквизит, декорации, камеры, путевые точки и многое другое. Функциональность Игрового Объекта определяется прикрепленными к нему компонентами.",
        link: "/Manual/GameObjects.html"
    },
    {
        ru: "Компонент Transform",
        en: "Transform Component",
        root: [["компонент", "transform"], "transform"],
        desc: "Компонент трансформации используется для хранения положения, вращения, масштаба и родительского состояния игрового объекта.",
        link: "/Manual/class-Transform.html"
    },
    {
        ru: "Компонент",
        en: "Component",
        root: ["компонент"],
        desc: "Функциональная часть игрового объекта. Игровой объект может содержать любое количество компонентов. В Unity есть множество встроенных компонентов, и вы можете создавать свои собственные, написав скрипты, наследующие от MonoBehaviour.",
        link: "/Manual/Components.html"
    },
    {
        ru: "Скрипт",
        en: "Script",
        root: ["скрипт", "сценари"],
        desc: "Часть кода, позволяющая создавать собственные компоненты, запускать игровые события, изменять свойства компонентов во времени и реагировать на ввод пользователя любым удобным для вас способом.",
        link: "/Manual/CreatingAndUsingScripts.html"
    },


    {
        ru: "Properties",
        en: "Properties",
        root: [["edit", "propert"]],
        desc: "Свойства - это параметры и опции для игровых объектов и активов. Свойства редактируются в окне Inspector.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/EditingValueProperties.html"
    },
    {
        ru: "Коллайдер сетки",
        en: "Mesh Collider",
        root: [["коллайдер", "сет"]],
        desc: "Компонент коллайдера свободной формы, который принимает ссылку на сетку для определения формы поверхности столкновения.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-MeshCollider.html"
    },
    {
        ru: "Камера",
        en: "Camera",
        root: ["камер"],
        desc: "Компонент, который создает изображение определенной точки обзора в вашей сцене. Изображение выводится на экран или записывается в виде текстуры.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/CamerasOverview.html"
    },
    {
        ru: "Сцена",
        en: "Scene",
        root: ["камер"],
        desc: "Компонент, который создает изображение определенной точки обзора в вашей сцене. Изображение выводится на экран или записывается в виде текстуры.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/CreatingScenes.html"
    },
    {
        ru: "Тэг",
        en: "Tag",
        root: ["тэг"],
        desc: "Ссылочное слово, которое вы можете присвоить одному или нескольким игровым объектам, чтобы помочь вам идентифицировать игровые объекты для сценариев. Например, вы можете определить тег \"Съедобный\" для любого предмета, который игрок может съесть в вашей игре.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/Tags.html"
    },

    {
        ru: "Gizmo",
        en: "Gizmo",
        root: ["gizmo"],
        desc: "Графическое наложение, связанное с игровым объектом в сцене и отображаемое в Scene View. Встроенные инструменты сцены, такие как инструмент Move, являются Gizmos, и вы можете создавать собственные Gizmos с помощью текстур или сценариев. Некоторые Gizmo рисуются только тогда, когда выбран игровой объект, в то время как другие Gizmos рисуются независимо от того, какие игровые объекты выбраны.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/GizmosMenu.html#GizmosIcons"
    },
    {
        ru: "Scene View", // вид сцены, представлении сцены
        en: "Scene View",
        root: [["scene", "view"]],
        desc: "Интерактивный вид создаваемого вами мира. Вы используете вид сцены для выбора и размещения декораций, персонажей, камер, освещения и всех других игровых объектов.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/UsingTheSceneView.html"
    },
    {
        ru: "Меню Компонентов",
        en: "Component Menu",
        root: [["меню", "компонент"]],
        desc: "Меню для добавления компонентов в игровой объект",
        link: "#"
    },
    {
        ru: "Родитель",
        en: "Parent",
        root: ["родител"],
        desc: "Объект, который содержит дочерние объекты в иерархии. Когда игровой объект является родителем для другого игрового объекта, дочерний игровой объект будет двигаться, вращаться и масштабироваться точно так же, как и его родитель. Можно считать, что родительские отношения подобны отношениям между руками и телом: когда тело движется, руки тоже двигаются вместе с ним.",
        link: "#"
    },
    {
        ru: "Фильтр сетки",
        en: "Mesh Filter",
        root: [["фильтр", "сетк"], ["cетчат", "фильтр"]],
        desc: "Фильтр сетки берет сетку из ваших активов и передает ее в рендерер сетки для рендеринга на экране.",
        link: "/manual/graphics/mesh-filter"
    },
    {
        ru: "Импорт текстур",
        en: "Import Texture",
        root: [["импорт", "текстур"]],
        desc: "Загрузка и импорт текстур из файлов изображений",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-TextureImporter.html"
    },
    {
        ru: "Скелетный рендер сетки",
        en: "Skinned Mesh Renderer",
        root: [["скелет", "рендер", "сетк"]],
        desc: "Загрузка и импорт текстур из файлов изображений",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-SkinnedMeshRenderer.html"
    },
    {
        ru: "Рендер сетки",
        en: "Mesh Renderer",
        root: [["рендер", "сетк",]],
        desc: "Загрузка и импорт текстур из файлов изображений",
        link: "/manual/graphics/meshes/mesh-renderer"
    },
    {
        ru: "Light",
        en: "Light",
        root: ["light"],
        desc: "Компонент Light",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-Light.html"
    },
    {
        ru: "Куб коллайдер",
        en: "Box Collider",
        root: [["куб", "коллайдер"]],
        desc: "Самые простые и наименее требовательный к процессору коллайдер представляющий собой форму куба.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/CollidersOverview.html"
    },


    {
        ru: "Примитивные коллайдеры",
        en: "Primitive Colliders",
        root: [["примитив", "коллайдер"]],
        desc: "Самые простые и наименее требовательные к процессору коллайдеры.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/CollidersOverview.html"
    },
    {
        ru: "Мипмап",
        en: "Mip maps",
        root: ["мипмап"],
        desc: "Мипмап - это список с постепенно уменьшающимися версиями изображений.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/TextureStreaming.html"
    },
    {
        ru: "Карта нормалей",
        en: "Normal maps",
        root: [["карт", "нормал"]],
        desc: "Карты нормалей используются для детализации низкополигональных моделей.",
        link: "https://docs.unity3d.com/Manual/StandardShaderMaterialParameterNormalMap.html"
    },
    {
        ru: "Альфа карта",
        en: "Alpha maps",
        root: [["альфа", "карт"]],
        desc: "Альфа карта используется для применения различных уровней прозрачности к материалу",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-TextureImporter.html#AlphaSrc"
    },
    {
        ru: "Пользовательский интерфейс",
        en: "UI",
        root: [["пользователь", "интерфейс"]],
        desc: "(UI) Позволяет пользователю взаимодействовать с вашим приложением. В настоящее время Unity поддерживает три системы пользовательского интерфейса.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/UI-system-compare.html"
    },
    {
        ru: "Коллайдер",
        en: "Collider",
        root: ["коллайдер"],
        desc: "Невидимая форма, которая используется для обработки физических столкновений объекта. Коллайдер не обязательно должен быть точно такой же формы, как сетка объекта - грубое приближение часто более эффективно и неотличимо в игровом процессе.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/CollidersOverview.html"
    },
    {
        ru: "Рельеф",
        en: "Terrain",
        root: ["рельеф"],
        desc: "Ландшафт в вашей сцене. Игровой объект Terrain добавляет большую плоскую плоскость в вашу сцену, и вы можете использовать окно инспектора Terrain для создания детального ландшафта.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/terrain-UsingTerrains.html"
    },
    {
        ru: "Вторичные карты",
        en: "Secondary Maps",
        root: [["вторичн", "карт"]],
        desc: "Вторичные карты позволяют наложить второй набор текстур поверх основных текстур.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/StandardShaderMaterialParameterDetail.html"
    },
    {
        ru: "Маска деталей",
        en: "Detail Mask",
        root: [["маска", "детал"]],
        desc: "Текстура маски деталей позволяет замаскировать определенные области модели для применения текстуры деталей.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/StandardShaderMaterialParameterDetail.html"
    },
    {
        ru: "окно просмотра проекта",
        en: "Project View",
        root: [["окн", "просмотр", "проект"], 'Project View'],
        desc: "Окно просмотра проекта",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/ProjectView.html"
    },
    {
        ru: "Project Window",
        en: "Project Window", // "Project View"
        root: [["project","window"], ["project","view"]],
        desc: "Окно, в котором отображается содержимое папки Assets (вкладка Project).",
        link: "/Manual/ProjectView.html"
    },
    {
        ru: "Сетка",
        en: "Mesh",
        root: ["сетк", "сеток", "подсетк", "подсеток"],
        desc: "Основной графический примитив Unity. Сетки составляют большую часть ваших 3D-миров. Unity поддерживает триангулированные или четырехугольные полигональные сетки. Поверхности Nurbs, Nurms, Subdiv должны быть преобразованы в полигоны.",
        link: "/manual/graphics/meshes"
    },
    {
        ru: "Прогрессивный Лайтмап",
        en: "Progressive Lightmapper",
        root: ["Прогрессивный", "Лайтмап"],
        desc: "Инструмент в Unity, который создает лайтмапы в соответствии с расположением света и геометрии в вашей сцене.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/progressive-lightmapper.html"
    },

    {
        ru: "Глобальное освещение",
        en: "Global Illumination",
        root: ["глобальн", "освещ"],
        desc: "Группа методов, которые моделируют как прямое так и косвенное освещение для получения реалистичных результатов освещения.",
        link: "#"
    },
    {
        ru: "освещение",
        en: "освещение",
        root: ["освещени"],
        desc: "Игровой объект который содержит компонент Light",
        link: "#"
    },
    {
        ru: "Светокарта",
        en: "Lightmapping",
        root: ["светокарт"],
        desc: "Инструмент в Unity, который создает лайтмапы в соответствии с расположением света и геометрии в вашей сцене.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/Lightmapping.html"
    },
    {
        ru: "Текстура",
        en: "Texture",
        root: ["текстур"],
        desc: "Изображение, используемое при рендеринге игрового объекта, спрайта или элемента пользовательского интерфейса. Текстуры часто применяются к поверхности сетки для придания ей визуальной детализации.",
        link: "/manual/graphics/textures"
    },
    {
        ru: "Материал",
        en: "Material",
        root: ["материал"],
        desc: "Актив, определяющий, как должна быть отрисована поверхность.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/Materials.html"
    },
    {
        ru: "Карта кубитов", // кубической карты
        en: "Cubemap",
        root: [["карт", "кубит"]],
        desc: ".",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-Cubemap.html"
    },
    {
        ru: "Настройки Импорта",
        en: "Import Settings",
        root: [["настрой", "импорт"]],
        desc: "Настройки импорта",
        link: "https://docs.unity3d.com/2021.2/Manual/class-TextureImporter.html"
    },
    {
        ru: "Компонент Текстуры",
        en: "Texture Component",
        root: [["компонент", "текстур"]],
        desc: "Компонент Текстуры",
        link: "https://docs.unity3d.com/2021.2/Manual/class-TextureImporter.html"
    },
    {
        ru: "Шейдер",
        en: "Shader",
        root: ["шейдер"],
        desc: "Программа, которая работает на графическом процессоре.",
        link: "/manual/graphics/meshes"
    },
    {
        ru: "Зонд отражения",
        en: "Зонд отражения",
        root: [["зонд", "отраж"]],
        desc: "Захватывает изображение вокруг, что бы отобразить его на отражающей поверхности",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-ReflectionProbe.html"
    },
    {
        ru: "Редактор спрайтов",
        en: "Sprite Editor",
        root: [["редактор", "спрайт"]],
        desc: "Приложение для извлечения части составного изображения",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/SpriteEditor.html"
    },
    {
        ru: "Inspector",
        en: "Inspector",
        root: ["inspector", ["окн", "inspector"]],
        desc: "Окно в котором отображается информация о выбранном в данный момент игровом объекте, активе или настройках проекта, позволяя вам проверять и редактировать значения выбранного объекта.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/UsingTheInspector.html"
    },
    {
        ru: "Система частиц",
        en: "Particle System",
        root: [["систем", "частиц"]],
        desc: "Компонент, который моделирует жидкие сущности, такие как жидкости, облака и пламя, генерируя и анимируя большое количество маленьких 2D изображений в сцене.",
        link: "/manual/graphics/meshes"
    },

    {
        ru: "Карта нормалей",
        en: "Normalmap",
        root: [["карт", "норм"]],
        desc: "Коллекция из шести квадратных текстур, которые могут представлять отражения в окружении или небосвод, нарисованный за вашей геометрией. Шесть квадратов образуют грани воображаемого куба, окружающего объект; каждая грань представляет вид по направлениям мировых осей (вверх, вниз, влево, вправо, вперед и назад).",
        link: "/manual/graphics/meshes"
    },
    {
        ru: "ProBuilder",
        en: "ProBuilder",
        root: ["probuilder"],
        desc: "Вы можете создавать, редактировать и текстурировать пользовательскую геометрию в Unity с помощью действий и инструментов.",
        link: "https://docs.unity3d.com/Packages/com.unity.probuilder@5.0/manual/index.html"
    },
    {
        ru: "Магазин Ассетов",
        en: "Asset Store",
        root: [["магаз", "aссет"]],
        desc: "Растущая библиотека бесплатных и коммерческих активов, созданных Unity и членами сообщества. Предлагает широкий спектр активов, от текстур, моделей и анимации до целых примеров проектов, учебников и расширений редактора.",
        link: "http://unity3d.com/unity/asset-store/"
    },
    {
        ru: "Окно проекта",
        en: "Project window",
        root: [["окн", "проект"]],
        desc: "Окно, в котором отображается содержимое папки Assets (вкладка Project).",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/ProjectView.html"
    },
    {
        ru: "Столкновение",
        en: "Сollision",
        root: ["столкновени"],
        desc: "Столкновение происходит, когда физический движок обнаруживает, что коллайдеры двух GameObject'ов соприкасаются или пересекаются, когда хотя бы один из них имеет компонент Rigidbody и находится в движении.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/class-MeshCollider.html"
    },
    {
        ru: "Спрайт",
        en: "Sprite",
        root: ["спрайт"],
        desc: "Двухмерный графический объект. Если вы привыкли работать в 3D, спрайты - это, по сути, обычные текстуры, но существуют специальные техники объединения и управления текстурами спрайтов для эффективности и удобства при разработке.",
        link: "https://docs.unity3d.com/2021.2/Documentation/Manual/Sprites.html"
    },
]

/*
* todo: Есть слова которые изначально написанны на английском, что бы было лучше понятно нужно для них добавить русский транслит
* todo: Сделать фильтрацию словаря по самому длинному root свойтству
* todo: Удалить ссылки из подсказок которые находятся на текущей странице
* todo: Разделить словарь и скрипт
* todo: Добавить используемые слова на странице в словарь с ссылками
* todo: Сделать возможность добавлять всплывашки без ссылок (только описание, только заголовок)
* todo: Добавить галочку отключить все подсказки
* todo: Сделать замену подсказок без перезагрузки страницы
* todo: Сделать отображение только для первой подсказки
* todo: Улучшить меню настроек подсказок, сделать его выезжающим (например)
* */

document.querySelectorAll('input[name="glossary"]:not(input[name="glossary"]:checked)').forEach((el) => {
    el.addEventListener('input', function (evt) {
        localStorage.setItem('glossary', getGlossaryType());
        location.reload();
    });
});

let glos = localStorage.getItem('glossary');

if (glos !== null) {
    document.querySelector(`input[name="glossary"][value="${glos}"]`).checked = true;
}

function getGlossaryType() {
    let glossary = document.querySelector('input[name="glossary"]:checked');
    return glossary.value;
}

function createTooltip(word, definition) {
    const glossaryType = getGlossaryType();
    if (glossaryType === "ru") {
        return `<a class="dict" href="${definition.link}" title="${definition.ru}" data-bs-toggle="popover" data-bs-content="${definition.desc}" target="_blank">${word}</a>`
    } else if (glossaryType === "en") {
        return `<a class="dict" href="${definition.link}" title="${definition.en}" data-bs-toggle="popover" data-bs-content="${definition.desc}" target="_blank">${definition.en}</a>`
    } else if (glossaryType === "ru+en") {
        return `<a class="dict" href="${definition.link}" title="${definition.ru} (${definition.en})" data-bs-toggle="popover" data-bs-content="${definition.desc}" target="_blank">${word} (${definition.en})</a>`
    }
    return `<a class="dict" href="${definition.link}" title="${definition.ru}" data-bs-toggle="popover" data-bs-content="${definition.desc}" target="_blank">${word}</a>`
}

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

function getArrayRegex(roots) {
    let regexps = [];

    roots.forEach((root) => {
        if (Array.isArray(root)) {
            regexps.push(new RegExp(root.join(`[A-я]* `) + `[A-я]*`, `gmui`));
        } else {
            regexps.push(new RegExp(`${root}[A-я]*`, `gmi`));
        }
    })

    return regexps;
}


let actualDict = dictionary.sort((a, b) => b.ru.length - a.ru.length);

glossary(actualDict);

function glossary(actualDict) {
    const sentences = document.querySelectorAll(`.main-content p`);

    actualDict.forEach((el) => {
        const regex = getArrayRegex(el.root);

        regex.forEach((reg) => {
            console.log(reg)

            sentences.forEach((sentence) => {
                sentence.innerHTML = sentence.innerHTML.replace(reg, (match, offset, input) => {
                    if (isLink(input.slice(offset))) {
                        return match;
                    } else {
                        return createTooltip(match, el)
                    }
                });
            });
        });
    })
}


function isLink(str) {
    return str.split("</a>").length > str.split("<a").length;
}


let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'hover'
    })
})
