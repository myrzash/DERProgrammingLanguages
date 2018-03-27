const DATAS = {
    ru: {
        title: "Языки и системы программирования",
        grade: "7 Класс",
        typeder: "тренажер",
        prologue: {
            author: 'Б.Л. Ворф',
            phrase: 'Язык формирует наш способ мышления и определяет то, о чем мы можем мыслить.',
        },
        parts: [
            {
                title: 'Думай',
                info: 'Ответь на вопросы и проверь, хорошо ли ты знаешь классификацию языков и систем программирования',
                image: 'a1.jpg',
                interactive: {
                    name: 'test',
                    items: {
                        count: 8,
                        data: [
                            {
                                question: 'Языком программирования называется:',
                                variants: [['совокупность средств и правил представления алгоритма в виде, пригодном для выполнения вычислительной машиной'],
                                    ['совокупность средств и правил перевода текста с естественного языка на формальный',
                                        'совокупность средств и правил перевода текста с формального языка на естественный',
                                        'язык, понятный программистам',
                                        'язык, понятный компьютеру']]
                            },
                            {
                                question: 'Система программирования – это:',
                                variants: [['программное обеспечение компьютера, предназначенное для разработки, отладки и исполнения программ, записанных на определённом языке программирования'],
                                    ['устройство для создания компьютерных программ',
                                        'специальная программа, предназначенная для создания компьютерных программ',
                                        'операционная система компьютера',
                                        'совокупность программ на определённом языке программирования']]
                            },
                            {
                                question: 'Тип данных определяет…',
                                variants: [['множество значений, которые могут принимать объекты программы, а также совокупность операций, допустимых над этими значениями'],
                                    ['множество значений, которые могут принимать объекты программы',
                                        'множество значений, допустимых для операций программы',
                                        'совокупность операций, допустимых над этими значениями',
                                        'совокупность операций, допустимых над объектами программы']]
                            },
                            {
                                question: 'Метод решения задачи, записанный по определённым правилам, обеспечивающим однозначность его понимания и механического исполнения при всех значениях исходных данных (из которого множества значений), называется…',
                                variants: [['алгоритмом'],
                                    ['планом',
                                        'законом',
                                        'блок-схемой',
                                        'программой']]
                            },
                            {
                                question: 'Алгоритмы делятся на три основных типа:',
                                variants: [['линейные, разветвляющиеся и циклические'],
                                    ['линейные, разветвляющиеся и цикловые',
                                        'линейные, ветвические и циклические',
                                        'прямолинейные, разветвляющиеся и циклические',
                                        'прямолинейные, разветвляющиеся и цикловые']]
                            },
                            {
                                question: 'Часть программы, в которой записывается последовательность выполняемых операторов, называется',
                                variants: [['исполнительной'],
                                    ['заголовком',
                                        'описательной',
                                        'текущей',
                                        'главной']]
                            },
                            {
                                question: 'Кто является первым в мире программистом?',
                                variants: [['Ада Лавлейс'],
                                    ['Никлаус Вирт',
                                        'Игорь Петров',
                                        'Марина Влади',
                                        'Нет верного ответа']]
                            },
                            {
                                question: 'В основу этих языков положены программные объекты, которые объединяют данные и методы их обработки. Для них были разработаны интегрированные среды программирования, позволяющие визуально конструировать графический интерфейс приложений:',
                                variants: [['языки объектно-ориентированного программирования'],
                                    ['прикладные языки программирования',
                                        'алгоритмические языки программирования',
                                        'языки программирования на платформе .NET',
                                        'языки низкого уровня программирования']]
                            },
                        ]
                    }
                }
            },
            {
                title: 'Анализируй',
                image: 'a2.jpg',
                info: 'Найди соответствия',
                interactive: {
                    name: 'sort',
                    items: {
                        task1: 'Соотнеси фотографии и имена разработчиков СП',
                        task2: 'Определи разработчиков, указанных языков программирования Basic, Pascal, C, PHP',
                        names: [
                            'Денис Ритчи',
                            'Джон Кемени',
                            'Никлаус Вирт',
                            'Расмус Лердорф',
                            'Томас Курц',
                        ],
                    }
                }
            }
        ]
    },
    kz: {
        title: "Программалау тілдері мен жүйелері ",
        grade: "7-сынып",
        typeder: "Жаттығу құралы",
        prologue: {
            author: 'Б.Л. Ворф',
            phrase: 'Тіл ойлау қабілетін қалыптастырады және біздің не ойлай алатындығымызды анықтайды.',
        },
        parts: [
            {
                title: 'Ойла',
                info: 'Сұрақтарға жауап бер және программалау тілдері мен жүйелерінің жіктелуін жақсы білетіндігіңді тексер.',
                image: 'a1.jpg',
                interactive: {
                    name: 'test',
                    items: {
                        count: 8,
                        data: [
                            {
                                question: 'Программалау тілі:',
                                variants: [['алгоритмді есептеу машинасының орындауы үшін жарамды түрде ұсыну құралдары мен ережелерінің жиынтығы'], ['мәтінді табиғи тілден ресми тілге аудару құралдары мен ережелерінің жиынтығы', 'мәтінді ресми тілден табиғи тілге аудару құралдары мен ережелерінің жиынтығы', 'программашы түсінетін тіл', 'компьютер түсінетін тіл']]
                            }, {
                                question: 'Программалау жүйесі – бұл:',
                                variants: [['программалаудың белгілі бір тілінде жазылған программаларды жасауға, өңдеуге және орындауға арналған компьютердің программалық жасақтамасы'], ['компьютерлік программалар жасауға арналған құрылғы', 'компьютерлік программалар жасауға арналған арнайы программа ', 'компьютердің операциялық жүйесі', 'программалаудың белгілі бір тіліндегі программалар жиынтығы']]
                            }, {
                                question: 'Деректер типі ... анықтайды ',
                                variants: [['программа нысандары қабылдай алатын көптеген мәндер, сонымен қатар осы мәндерге қолдануға болатын операциялар жиынтығы'], ['программа нысандары қабылдай алатын көптеген мәндер', 'программа операция үшін рұқсат етілетін көптеген мәндер ', 'осы мәндерге қолдануға болатын операциялар жиынтығы', 'осы объекттерге қолдануға болатын операциялар жиынтығы']]
                            }, {
                                question: 'Тапсырманы түсінудің бір мәнділігін және бастапқы деректердің барлық мәндері кезінде механикалық орындауды қамтамасыз ететін белгілі бір ережелермен жазылған тапсырманы шешу әдісі ... деп аталады.',
                                variants: [['алгоритм'], ['жоба', 'заң', 'блок-схема', 'программа ']]
                            }, {
                                question: 'Алгоритмдер үш негізгі типке бөлінеді:',
                                variants: [['сызықтық, тармақталатын және циклдік'], ['сызықтық, тармақталатын және циклденген', 'сызықтық, тармақты және циклдік', 'тік сызықты, тармақталатын және циклдік', 'тік сызықты, тармақталатын және циклденген']]
                            }, {
                                question: 'Орындалатын операторлар тізбегі жазылатын программа бөлігі ... деп аталады.',
                                variants: [['атқару'], ['тақырып', 'суреттеме', 'ағымдағы', 'негізгі']]
                            }, {
                                question: 'Әлемдегі ең алғашқы программашы кім?',
                                variants: [['Ада Лавлейс'], ['Никлаус Вирт', 'Игорь Петров', 'Марина Влади', 'Дұрыс жауабы жоқ']]
                            }, {
                                question: 'Деректерді және оларды өңдеу әдістерін біріктіретін программалық нысандар осы тілдердің негізін құрайды. Олар үшін қосымшалардың графикалық интерфейсін визуалды құрастыруға мүмкіндік беретін кіріктірілген орталары әзірленген:',
                                variants: [['нысаналы-бағдарланған программалау тілдері'], ['қолданбалы программалау тілдері', 'алгоритмдік программалау тілдері', '.NET платформасында программалау тілдері', 'программалаудың төмен деңгейінің тілдері']]
                            },
                        ]
                    }
                }
            },
            {
                title: 'Талдау жаса',
                image: 'a2.jpg',
                info: 'Жұбын тап',
                interactive: {
                    name: 'sort',
                    items: {
                        task1: 'ПЖ жасаушылардың фотосуреттері мен аттарын ара қатынасын белгіле',
                        task2: 'Аталған программалау тілдерін жасаушыларды анықта',
                        names: [
                            'Денис Ритчи',
                            'Джон Кемени',
                            'Никлаус Вирт',
                            'Расмус Лердорф',
                            'Томас Курц',
                        ],
                    }
                }
            }
        ]
    },
    en: {
        title: "Languages and system of programming",
        grade: "Grade 7",
        typeder: "simulator",
        prologue: {
            author: 'B.L.Worf',
            phrase: 'Language forms our manner of thought and determines about what we can think.'
        },
        parts: [
            {
                title: 'Think',
                info: 'Answer these questions and check do you know classification of languages and systems of programming well.',
                image: 'a1.jpg',
                interactive: {
                    name: 'test',
                    items: {
                        count: 8,
                        data: [{
                            question: 'Programming language is:',
                            variants: [['complex of resources and rules of algorithm providing as available for performance by computer system'], ['complex of resources and rules of text interpretation from natural language into official', 'complex of resources and rules of text interpretation from official language into natural', 'language, understandable for software researcher', 'language, understandable for computer']]
                        }, {
                            question: 'Programming system is:',
                            variants: [['Computer software assigning for development, debug and implementation of programs recorded in determined language of programming'], ['a device for creation of computer programs', 'a special program, assigning for creation of computer programs', 'Operating system of computer', 'complex of programs in determined language of programming']]
                        }, {
                            question: 'Data type determines…',
                            variants: [['set of values which can receive program objects as also complex of operations allowing for these values'], ['set of values which can receive program objects', 'set of values allowing for program operation', 'complex of operations allowing for these values', 'complex of operations allowing for objects of program']]
                        }, {
                            question: 'Problem solving method recorded under determined rules providing single-valuedness of its understanding and mechanical implementation at all values of source data (from some set of values) is…',
                            variants: [['algorithm'], ['plan', 'law', 'flow graph', 'program']]
                        }, {
                            question: 'Algorithms are divided into three main types:',
                            variants: [['linear, branching and looped'], ['linear, branching and cycle ', 'linear, selecting and looped', 'rectilinear, branching and looped ', 'rectilinear, branching and cycle']]
                        }, {
                            question: 'A part of program where recording sequence of implementing statements is',
                            variants: [['implementing'], ['title ', 'describable', 'current', 'main']]
                        }, {
                            question: 'Who is the first software researcher in the world?',
                            variants: [['Ada Lovelace'], ['Nicklaus Wirt', 'Igor Petrov', 'Marina Bladi', 'there is no correct answer']]
                        }, {
                            question: 'Program objects are laid on base of these languages which unite data and methods of their processing. Programming frameworks were developed for them allowing to construct graphical applications visually:',
                            variants: [['object-oriented programming languages '], ['application-oriented programming languages', 'algorithmic programming languages', 'programming languages on .NET platform', 'low level programming languages']]
                        }]
                    }
                }
            },
            {
                title: 'Analyze',
                image: 'a2.jpg',
                info: 'Find conformity',
                interactive: {
                    name: 'sort',
                    items: {
                        task1: 'Compare photos and names of PS implementer',
                        task2: 'Determine implementers of mentioned programming languages ',
                        names: [
                            'Dennis Ritchie',
                            'John Kemeny',
                            'Niklaus Wirth',
                            'Rasmus Lerdorf',
                            'Thomas Kurtz',
                        ],
                    }
                }
            }
        ]
    }
}