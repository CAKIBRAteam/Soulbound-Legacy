/*
Скрипт для выведения сюжета, диалогов и т.д. в чат

Название каждого квеста над микроскриптом с // в начале

Будет много команд `/tellraw` и `say` потому что я ленивый :3 (Кстати команда `/say` вроде работает только на того кто выполнил квест, но я не уверен)

Если интересно:

FTBQuestsEvents.completed('ID квеста', event => {}) Запускает ивенты по типу запуска команды на стороне сервера и др. (event...)

event.server.runCommandSilent(``) - Запускает команду на стороне сервера (в консоли)

console.log('Story was started!') Выводит в лог (.minecraft\logs\kubejs\server) информацию 'Story was started!' (История была начата!)

Utils.server.scheduleInTicks(кол-во тиков, () => {скрипт}) Ожидает заданное кол-во тиков на стороне сервера до выполнения следующего ивента
*/

//Регистрация команд диалога:

/*Глава 1
Тайное послание*/
FTBQuestsEvents.completed('3DB500D4CFD1A27D', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.runCommandSilent(`/title @a title "§dВаша история начинается здесь!"`)
	Utils.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent(`/title @a title "§dПриятной и удачной игры в сборку"`)
		event.server.runCommandSilent(`/title @a subtitle "§d'§bSoulbound §6Legacy§d'!"`)
		Utils.server.scheduleInTicks(100, () => {
			event.server.tell('<Вы>: А-х-х.. Где я? Что со мной произошло? Как я здесь очутился? ... Ничего не понимаю.')
			Utils.server.scheduleInTicks(80, () => {
				event.server.tell('&5<&kffffffff&r&5>: Ты обречён семью проклятиями. Это - испытание твоей жизни. &6ОНИ&5 выбрали тебя! Если ты сможешь пройти это испытание и освободить этот мир от проклятий, ты получишь благословения до конца своих времён. Но сможешь ли ты это сделать? Всё зависит только от тебя. Сделай правильный выбор! И учти: вместе с семью проклятиями ты обретёшь и семь благословений, которые помогут тебе. &6Свои проклятия ты узришь взглянув на кольцо, которое у тебя на пальце. Отныне я буду твоим проводником по этому миру.')
				Utils.server.scheduleInTicks(300, () => {
					event.server.tell('§c§oСОБЕРИ СЕМЕРЫХ, ПРЕКРАТИ СТРАДАНИЯ ЭТО МИРА!')
					Utils.server.scheduleInTicks(40, () => {
						event.server.tell('§o§l§4УДАЧИ! ХА-ХА-ХА-ХА-ХА!')
						Utils.server.scheduleInTicks(40, () => {
							event.server.tell('<Вы>: Что это был за голос? ... О чём он говорил? Семь проклятий и благословений, кольцо? И что это значит?')
						})
					})
				})
			})
		})
	})
})


//Истоки
FTBQuestsEvents.completed('6AC00D25A061DEA5', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.runCommandSilent(`/title @a title "§6[§r§5Глава I: 'Первостатейное трудолюбие'§6]§r"`)
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('<Вы>: Нужно добыть первые §6ресурсы§r и привыкнуть к тому что §6я намного слабее§r...')
	})
});
//Ваш первый верстак
FTBQuestsEvents.completed('2BCF8E5B62325833', event => {
	event.server.tell('<Вы>: Первый и любимый верстак!')
});
//Набор деревянных инструментов
FTBQuestsEvents.completed('7858A6568F1AD3E7', event => {
	event.server.tell('<Вы>: Первый и, надеюсь последний раз когда я с вами вижусь.')
});
//Снаряжён и готов к бою!
FTBQuestsEvents.completed('2746716BC328F161', event => {
	event.server.tell('<Вы>: С новым снаряжением я не чувствую себя таким слабым, но всё же я еще не настолько силён. Я думаю для начала стоит §6отправиться в пышные пещеры§r, надеюсь, что смогу найти там что-то.')
});

//Глубокое погружение
FTBQuestsEvents.completed('5033FFFDADA4E3D1', event => {
	event.server.tell('<Вы>: А вот и пышные пещеры! Надеюсь найти здесь что-то.')
});
//Тюремные камеры зачищены!
FTBQuestsEvents.completed('00B0ECBFA5FF2764', event => {
	event.server.tell('§5<§kffffffff§r§5>: §2Молодец, ты продвигаешься в правильном направлении! Но не упивайся моими словами, тебя ожидает ещё множество тайн и битв этого мира!')
	Utils.server.scheduleInTicks(100, () => {
		event.server.tell('<Вы>: Опять?! Кто ты и что тебе нужно? ')
		event.server.tell('')
		Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<§kffffffff§r§5>: ...')
	})
	})
});
//Крабик
FTBQuestsEvents.completed('4F764DC4DAD2BEFA', event => {
	event.server.tell('<Вы>: Аметистовый краб... Наверно его панцири довольно прочны. Надо их добыть.')
});
//Портал?
FTBQuestsEvents.completed('2AB5C953075031A7', event => {
	event.server.tell('<Вы>: Какой-то неизвестный портал. Написано, что ведёт в какие-то "§6Тюремные камеры§r". Быть может не стоит входить в него?')
});
//Странная тыковка...
FTBQuestsEvents.completed('39EC50A65FA5B492', event => {
	event.server.tell('<Вы>: Довольно странная тыква. Светится и веет холодом. Может стоит её сломать? Но к чему это приведет?')
});
//Колхоз!
FTBQuestsEvents.completed('497DF78BC57243F6', event => {
	event.server.tell('<Вы>: Цивилизация!')
});
//Бестиарий
FTBQuestsEvents.completed('5873546040EBFF55', event => {
	event.server.tell('<Вы>: Занятная книга, но половина страниц вырвана. Может быть крупицы этих страниц - это манускрипты?')
});
//Железный доспех!
FTBQuestsEvents.completed('15486EBA91AFF019', event => {
	event.server.tell('§6Присутствует броня самураев из железа и стали!')
});
//Ледяное логово дракона
FTBQuestsEvents.completed('192D25A12B7D5016', event => {
	event.server.tell('<Вы>: А вот и логового ледяного дракона. Надеюсь я не замерзну здесь насмерть.')
});
//Пепельное логово дракона
FTBQuestsEvents.completed('50D7D0ADB72D789E', event => {
	event.server.tell('<Вы>: Логово дракона из пепла... Надеюсь я не стану его частью.')
});
//Мороз по коже
FTBQuestsEvents.completed('59291F260AEABC35', event => {
	event.server.tell('<Вы>: Что ж... Я смог не замерзнуть.')
});
//Повелитель пламени
FTBQuestsEvents.completed('0053373E9F7BA1BA', event => {
	event.server.tell('<Вы>: Мне повезло, учитывая, что я не зажарился.')
});
//Громовержец
FTBQuestsEvents.completed('1D90F5AA38C25341', event => {
	event.server.tell('<Вы>: §eНаЭлЕкТрИзОвАн!')
});
//Драконоборец
FTBQuestsEvents.completed('6790B5BBBB4E984D', event => {
	event.server.tell('§5<§kffffffff§r§5>: §4В ваших венах кипит кровь драконов! Незер считает вас достойным. Отныне вы можете в него попасть.')
	event.server.runCommandSilent(`/gamestage add @a nether true`)
});
//Зов преисподней
FTBQuestsEvents.completed('04B1913CE282147D', event => {
	event.server.tell('§5<§kffffffff§r§5>: §6Почувствуй зов преисподней! Поддайся ему!')
	Utils.server.scheduleInTicks(100, () => {
		event.server.tell('<Вы>: Кто ты такой?! Почему ты направляешь меня?!')
	})
	Utils.server.scheduleInTicks(100, () => {
		event.server.tell('§5<А§kfffffff§r§5>: ...')
	})
});
//Чудовищное око
FTBQuestsEvents.completed('4719448486C4D920', event => {
	event.server.tell('§5<§kffffffff§r§5>: §cЧудовищное око... Проследуй за ним оно приведёт тебя к цели!')
});
//Чудище
FTBQuestsEvents.completed('2019AFD3F9266C2B', event => {
	event.server.tell('<Вы>: Видимо §4ЭТО§r мне предстоит убить...')
});
//Желешка
FTBQuestsEvents.completed('074FA51A25380856', event => {
	event.server.tell('<Вы>: §4В§5о§eТ §aэ§9Т§bо §3Ж§6е§9Л§2е§dШ§4к§§')
});
//Скелеты Робин-Гуды?
FTBQuestsEvents.completed('672C5C36301D4470', event => {
	event.server.tell('<Вы>: Это что еще за Срубин Гуд?')
	Utils.server.scheduleInTicks(30, () => {
		event.server.tell('§5<§kffffffff§r§5>: Оживший лучник. Ничем не отличается от своего собрата скелета.')
	})
});
//Странные щитоносцы
FTBQuestsEvents.completed('244C571E324269C0', event => {
	event.server.tell('§5<§kffffffff§r§5>: Щитоносец тюремных камер. Делает смертоносные разбеги.')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('<Вы>: Главное не встать у него на пути.')
	})
});
//Бомбардиры
FTBQuestsEvents.completed('7E91016588352D27', event => {
	event.server.tell('<Вы>: Что за... ')
	Utils.server.scheduleInTicks(15, () => {
		event.server.tell('§5<§kffffffff§r§5>: Гранатомётчики тюремных камер. Смертоносны вдали.')
	})
});
//Прыгучие... зомби?
FTBQuestsEvents.completed('54052F5EFBCFD7EF', event => {
	event.server.tell('<Вы>: Какие ноги!')
	Utils.server.scheduleInTicks(20, () => {
		event.server.tell('§5<§kffffffff§r§5>: Зомби... Довольно сильные. Совершают смертоносные прыжки.')
	})
});
//Броня из чешуи дракона
FTBQuestsEvents.completed('19AF8AF3DFCA2849', event => {
	event.server.tell('<Вы>: §dГламурный доспех.')
});













/*Глава 2
Время приключений!*/
FTBQuestsEvents.completed('0DCB735E1E47162A', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.runCommandSilent(`/title @a title "§6[§r§2Глава II: 'Время приключений!'§6]§r"`)
	Utils.server.scheduleInTicks(100, () => {
		event.server.tell('§5<А§kfffffff§r§5>: Ты великолепно продвигаешься! Продолжайте и вторая душа вскоре будет у тебя! Найдите §3тропу обречённых §5и §eпустыню§5!')
	})
});
//Пустыня!
FTBQuestsEvents.completed('40F3CA5F9C35FB2D', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Отлично ты нашлёл §eпустыню§5. Теперь раздобудь материалы для ока пустыни. Создай его и проследуй за ним! Ах да, забыл: рекомендую создать кисть и липкие перчатки. Они могут тебе пригодиться.')
	Utils.server.scheduleInTicks(80, () => {
	event.server.tell('')
	event.server.tell('<Вы>: Да кто ты чёрт возьми такой?! Скажи что тебе нужно и почему ты направляешь меня?!')
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Ты узнаешь всё потом...')
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('')
	event.server.tell('<Вы>: Когда?!! Что значит ПОТОМ?!!')
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Всему... своё... время...')
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('')
	event.server.tell('<Вы>: ...')
	     })
	    })
	   })
	  })
	 })
});
//Пирамидище!
FTBQuestsEvents.completed('6922765487C9E8E9', event => {
	event.server.tell('<Вы>: Вот это размах... А что же будет внутри?')
});
//Динозаврик?
FTBQuestsEvents.completed('065229C2D6CF7C52', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Коболетон - первое из творений катаклизма пустыни и самое слабое! Но знай оно может тебя обезоружить если ты не будешь носить липкие перчатки, рекомендую всё же создать их.')
});
//Убийца древности
FTBQuestsEvents.completed('2CF5C161EBBFF439', event => {
	event.server.tell('<Вы>: Вот и всё... Не очень они и сильные как §lон§r говорил.')
});
//Змея из костей?
FTBQuestsEvents.completed('2B127CA920CF3C35', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Узри! Ваджет - второе из творений катклизма пустыни! Обладает магией и большой силой.')
});
//Ваджет свергнуты
FTBQuestsEvents.completed('3EC93124E221C538', event => {
	event.server.tell('<Вы>: Фух, они действительно обладают некой магией и достаточно сильны.')
});
//Огромный коболетон?!
FTBQuestsEvents.completed('78BB01D5697D21E9', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Третье творение катаклизма пустыни - Коболедиатор! Смесь коболетона и огромного гладиатора. Невероятно силён.')
});
//Истинный гладиатор!
FTBQuestsEvents.completed('2A4A9402EB15D133', event => {
	event.server.tell('<Вы>: Фух, ... ... Это было непросто! Но я смог!')
});
//Проклятие пирамиды ослабевает...
FTBQuestsEvents.completed('0B3624CBFD5C36B6', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Чистая и безупречная зачистка! Продолжай в том же духе! А теперь твоя задача - найти ожерелье пустыни в этой пирамиде.')
});
//Ожерелье пустыни
FTBQuestsEvents.completed('5407A2E81A4233A5', event => {
	event.server.tell('<Вы>: А вот и ожерелье! Пора найти ему применение.')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<А§kfffffff§r§5>: Вижу ты нашёл ожерелье. Теперь нужно его использовать. Сделай это, спустившись в недра пирамиды, и пробуди древнее божество пустыни!')
	})
});
//Застывший бог пустыни
FTBQuestsEvents.completed('3635C6282FCE60D4', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Что ж... Ты на месте. Надень ожерелье на скелета и пробуди его!')
});
//Богоубийца
FTBQuestsEvents.completed('05DC1A521148E8D8', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Ты почти заслужил доступ к Энду у этого мира. Ещё немного и вы сможете в него попасть!')
});
//Спелеология!
FTBQuestsEvents.completed('6040F23877065BB0', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Ты нашлёл дом бывшего спелеолога, который наслушался легенд о прекрасных шахтах. Таких было много тысяча, две, может три не знаю. Но тебе нужно найти неразгаданное: шифр первобытности - жёлтую пещерную табличку.')
});
//Продолжить дело...
FTBQuestsEvents.completed('0C11AA4CF37325D5', event => {
	event.server.tell('§6Посмотрев на стол спелеолога вы видите вырванную страницу со странными символами и странный рисунок')
});
//Отголоски прошлого
FTBQuestsEvents.completed('01BBFFF2AC9EB145', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Отлично, ты нашлёл табличку. Приступай к расшифровке.')
	Utils.server.scheduleInTicks(60, () => {
	event.server.tell('')
	event.server.tell('<Вы>: Почему ты просто не можешь дать мне расшифровку или помочь с ней?')
	Utils.server.scheduleInTicks(60, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Если я начну тебе во всём помогать ОНИ придут за мной... и за тобой...')
	Utils.server.scheduleInTicks(75, () => {
	event.server.tell('')
	event.server.tell('<Вы>: Кто такие ОНИ?!')
	Utils.server.scheduleInTicks(30, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Это те, чьи силы выходят за грань понимания.')
	})
	})
	})
	})
});
//Расшифровка
FTBQuestsEvents.completed('35A079EDDFB58DA2', event => {
	event.server.tell('<Вы>: Отлично! Расшифровал. Теперь надо посмотреть что там было написано.')
});
//Карта первобытности
FTBQuestsEvents.completed('2C5F1C9226281185', event  => {
	event.server.tell('<Вы>: А вот и карта! Посмотрим где может быть первобытность.')
});
//Узрите же первобытность!
FTBQuestsEvents.completed('30CC731C076B6172', event => {
	event.server.tell('<Вы>: Красота... Отдельный мир в пещерах.')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('')
		event.server.tell('§5<А§kfffffff§r§5>: Добро пожаловать в первобытные пещеры! Застывший клочок мира! Исследуй его!')
	})
});
//Диковинная штучка!
FTBQuestsEvents.completed('3C0EDB170B4004BE', event => {
	event.server.tell('<Вы>: Впервые... Я могу дотянуться до солнца!')
});
//Птица моей мечты!
FTBQuestsEvents.completed('39FA8B0F5E3FE40B', event => {
	event.server.tell('<Вы>: Интересная птица...')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Подтерранодон древний предок птеронадона. Можешь приручить и оседлать его если хочешь.')
	})
});
//Трицератопс?
FTBQuestsEvents.completed('56F53152A120EC25', event  => {
	event.server.tell('<Вы>: Как носорог! Только рогов побольше.')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Дивное создание: гротоцератопс смесь трицератопса и гротоцераптора.')
	})
});
//Малёк
FTBQuestsEvents.completed('7E52C92D30FAE0E5', event => {
	event.server.tell('<Вы>: Милый и злой!')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Велоцараптор... Думаю сам понимаешь.')
	})
});
//Т-Рекс
FTBQuestsEvents.completed('78E82FA14A9E4E49', event => {
	event.server.tell('<Вы>: Милый и злой!')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Сотрясозавр! Не эволюционировавший Т-Рекс.')
	})
});
//Динозавр-попугай?
FTBQuestsEvents.completed('3BB54A657295BF9E', event => {
	event.server.tell('<Вы>: Напыщенный индюк!')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Реликвейрус! Травоядный, но сильный!')
	})
});
//Такую за дорого купят!
FTBQuestsEvents.completed('4C81F9038C883723', event => {
	event.server.tell('<Вы>: Вот это красотища! Мир миллиарды лет назад на ладони!')
});
//Апокалипсис
FTBQuestsEvents.completed('77E16A5A734627E7', event => {
	event.server.tell('<Вы>: Что это за вулканозавр?!')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: §4Это могущественный противник - §lЛюкстракторзавр§r§4! Обуздал первобытный вулкан и стал королём первобытных пещер, уснувши в ядре вулкана!')
	})
});
//Новый рассвет
FTBQuestsEvents.completed('13B7FB3FBE05DB8D', event => {
	event.server.tell('<Вы>: Кхе-кхе... фух.. Этот тектонозавр или как там его... Неважно! Он какой-то слишком могущественный, но всё же я смог его одолеть!')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Вулканизированная слаженность! Ха-ха! Отличная работа вскоре ты одолеешь весь этот мир. А пока займись новым снаряжением. Оно тебе пригодится!')
	})
});
//Сумеречный лес
FTBQuestsEvents.completed('1FCBA38B0590172D', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Добро пожаловать в сумеречный лес! Мистическое место полное тайн и опасностей. Исследуй его и сразись с его властителями!')
	Utils.server.scheduleInTicks(75, () => {
	event.server.tell('')
	event.server.tell('<Вы>: Занятное местечко. Навстеречу новым приключениям!')
	})
});
//Жестокость
FTBQuestsEvents.completed('0BE4990CC194D801', event => {
	event.server.tell('<Вы>: Это была необходимая жертва...')
});
//Карта сумеречного леса
FTBQuestsEvents.completed('01D3F5D43BEF3F70', event => {
	event.server.tell('<Вы>: Взглянем на точки интереса сумеречного леса!')
});
//Дворик?
FTBQuestsEvents.completed('146BBA1CED8AC1CA', event => {
	event.server.tell('<Вы>: Что за дворик? Посмотрим что у него внутри.')
});
//Что это за питон?!
FTBQuestsEvents.completed('44D69F5298DA0A9C', event => {
	event.server.tell('<Вы>: Это ещё что за питон переросток?! Придётся биться с ним.')
	Utils.server.scheduleInTicks(40, () => {
	event.server.tell('')
	event.server.tell('§5<А§kfffffff§r§5>: Узри же §lНагу§r§5! Чудовищная змея с огромной силой. Покажи на что способен! Срази её!')
	})
});
//Тропа обречённых
FTBQuestsEvents.completed('340391BAA9C57B5C', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Приветствую тебя на тропе обречённых. Место где обитают неизвестные тебе монстры и существа. Изучи же этот мир!')
});
//ДЖИРОНИМО-О-О!!
FTBQuestsEvents.completed('3A47ED8FC10CA257', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Посмотри: бегун! Совершенное существо способное затоптать тебя!')
});
//Странная мышь
FTBQuestsEvents.completed('70350F7EFBB3D440', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Мышь мутировала в нечто странное... Я даже не могу объяснить это.')
});
//Идол благословений
FTBQuestsEvents.completed('70698D640BB5E09C', event => {
	event.server.tell('§5<А§kfffffff§r§5>: Посмтори этот идол - это защитник. Защищает любого от смерти. Сначал сломай его, прежде чем убить монстра.')
});
//Заклинатель змей

/*Глава 3
Откровение*/
FTBQuestsEvents.completed('496D52478AFFC661', event => {
	event.server.runCommandSilent(`/title @a title "§6[§r§bГлава III: 'Неизвестность'§6]§r"`)
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('§5<Ар§kffffff§r§5>: Я.. я.. я начинаю вспоминать своё имя... Ар...........')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('<Вы>: Стоп... Ты сам не знаешь как тебя зовут?! Почему?')
		Utils.server.scheduleInTicks(40, () => {
			event.server.tell('§5<Ар§kffffff§r§5>: Это... долгая история не для твоих ушей. Просто прими этот факт, но с каждой полученной тобою душой я начинаю вспоминать больше... И дальше я смогу помогать меньше, иначе я угасну. Навсегда. А сейчас вернись на тропу обреченных и найди там башню, найди фиолетовую пещерную табличку и войди в сумеречный лес!')
			Utils.server.scheduleInTicks(140, () => {
				event.server.tell('<Вы>: Ладно...')
			  })
		  })
	   })
	})
	event.server.runCommandSilent(`/gamestage add @a prison_towers true`)
});

//И снова обрекаю
FTBQuestsEvents.completed('4F3557BBA1416F48', event => {
	event.server.tell('<Вы>: А вот и тропа обречённых! §oОн§r говорил о какой-то башне и то что нужно её найти.')
});
//★Элитность★
FTBQuestsEvents.completed('6A072B530C33E144', event => {
	event.server.tell('<Вы>: Это было.. §lстранно§r...')
});
//Жёлтый портал
FTBQuestsEvents.completed('2E9406553A9B15A8', event => {
	event.server.tell('<Вы>: Новый портал! Звучит как новые приключения и новые ощущения!')
});

//Тюремные башни
FTBQuestsEvents.completed('3D6541B1364072A1', event => {
	event.server.tell('<Вы>: Здесь.. разряженный воздух, немного сложно дышать.')
});
//Легион падёт!
FTBQuestsEvents.completed('1827EE1615B45B8F', event => {
	Util
	event.server.tell('<Вы>: Легион! Построиться в черепаху! Хах!')
});
//Армия чахнет
FTBQuestsEvents.completed('7D7AC7E35F2B490F', event => {
	event.server.tell('<Вы>: С каждым разом они ощущаются слабее.')
});
//Зубастая тварь
FTBQuestsEvents.completed('6889A4A7B5FEF0A3', event => {
	event.server.tell('<Вы>: Фу! Даже зубы не чистят!')
});
//Что ещё за маги?
FTBQuestsEvents.completed('23D707BBCA32D0D0', event => {
	event.server.tell('<Вы>: Очень интересно, что это за маги, но их магия делает бо-бо!')
});
//А у него горячая рука!
FTBQuestsEvents.completed('2B12A7CF201FDB96', event => {
	event.server.tell('<Вы>: Что за стена пламени от его рук?!')
});
//Конец близок...
FTBQuestsEvents.completed('25E432B06B15D0BE', event => {
	event.server.tell('§5<Ар§kffffff§r§5>: Поздравляю тебя... Ты почти дошёл до конца. Осталось немного, будет очень непросто готовься.')
});
//Достоинство
FTBQuestsEvents.completed('72AA809558886BB1', event => {
	event.server.tell('§5<Ар§kffffff§r§5>: Отлично, теперь ты можешь попасть в мир энда. Там тебя ждёт множество опасностей и наград!')
	event.server.runCommandSilent(`/gamestage add @a end true`)
});
//Конец?
FTBQuestsEvents.completed('7A92497A65CB4315', event => {
	event.server.tell('§5<Ар§kffffff§r§5>: Тебе предстоит великая битва. Тебе нужно будет одолеть двух сильнейших противников. Хранителя энда - Эндер дракона! О втором же ты узнаешь позже...')
});
//Задраконил
FTBQuestsEvents.completed('1B33B35DADA4BEB9', event => {
	event.server.tell('<Вы>: Чёрт, это было, довольно сложно.')
});
//Это ещё не конец
FTBQuestsEvents.completed('75F091A033305D09', event => {
	event.server.tell('<Вы>: Чёрт, это было, довольно сложно.')
});
//Новая цивилизация?
FTBQuestsEvents.completed('4568515B96488060', event => {
	event.server.tell('<Вы>: Это ещё что за общага?')
});
//Где твои крылья, ангел?
FTBQuestsEvents.completed('6EBB326ED267540C', event => {
	event.server.tell('<Вы>: Ха-ха! Я могу летать! Но нужно держаться подальше от солнца, а то еще случиться...')
});
//Голос пустоты
FTBQuestsEvents.completed('0649794553E2A904', event => {
	event.server.tell('<Вы>: Одновременно и жутко и §dзавораживающее§r...')
});
//Что это?
FTBQuestsEvents.completed('4E253BAB6FCA2E08', event => {
	event.server.tell('<Вы>: Очередное здание? Хотя оно не похоже на города. Я думаю не стоит сразу идти внутрь него. Для начала нужно осмотреться снаружи.')
});
//Что за жуки?
FTBQuestsEvents.completed('3DFDC270A06F67F4', event => {
	event.server.tell('<Вы>: Очень странные жуки... Пиво... Мужи... Кхм-кхм они явно не дружелюбны!')
});
//Изучите строение изнутри (ловушки)
FTBQuestsEvents.completed('1FC7C8DA8B5FAE6C', event => {
	event.server.tell('<Вы>: Очень необычные и странные ловушки. И что за острые камни вылезают? Ничего не понимаю...')
});
//Изучите строение изнутри (голем)
FTBQuestsEvents.completed('6A3CF416CA1F6592', event => {
	event.server.tell('<Вы>: Кто это?! Голем?! Статуя?! Что за нарост у него на спине?! Он явно не настроен миролюбиво!')
});
//Разрушители
FTBQuestsEvents.completed('7675424848101525', event => {
	event.server.tell('<Вы>: Вроде они были не очень сложны... Не очень...')
});
//Батя големов?
FTBQuestsEvents.completed('703518B537DF711E', event => {
	event.server.tell('§d<§l§kfffff fffffff§r§d>: Я - Страж пустоты, хранитель порядка! Как ты посмел вторгнуться ко мне и нарушить устой?! Ты пожалеешь о своём поступке! Готовься к смерти!')
	Utils.server.scheduleInTicks(80, () => {
		event.server.tell('<Вы>: Не сегодня, дружище!')
	})
});
//Подавление порядка
FTBQuestsEvents.completed('63B15424B9BFB839', event => {
	event.server.tell('§d<§lСтраж пустоты§r§d>: К-к-ка..к ты посмел... Ты не понимаешь, что ты делаешь, дитя хаоса...  Э-э-то моя кровь? Ха-ха... Нет, нет... Этого не может быть... Мы... Ещё... Увидимся...')
	Utils.server.scheduleInTicks(100, () => {
		event.server.tell('<Вы>: Прости, но у меня есть задание, которое важнее твоей жизни. *Фух* Это было.. §oблизко§r')
		Utils.server.scheduleInTicks(60, () => {
			event.server.tell('§5<Ар§kffffff§r§5>: Что ж.. Ты смог уничтожить даже мировой порядок... Мои поздравления.')
		})
	})
});
//Опять туда?
FTBQuestsEvents.completed('36A3C2F973A0B679', event => {
	event.server.tell('<Вы>: Бррр.. снова это мрачный лес. Мне никогда не нравилось это место.')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('§5<Ар§kffffff§r§5>: Не начинай! Ты должен это сделать!')
	})
});
//Замок?
FTBQuestsEvents.completed('7AE8C9C53090CDF0', event => {
	event.server.tell('<Вы>: Замок?! Посреди леса?! Очень странно, но я думаю нужно внутрь.')
});
//Скелет-король?
FTBQuestsEvents.completed('6482AD333D595AA7', event => {
	event.server.tell('§3<§kfff§r§3>: Ритуал почти готов... Стоп! Ты еще кто такой?!')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('<Вы>: Кара с небес!')
		Utils.server.scheduleInTicks(20, () => {
			event.server.tell('§3<§kfff§r§3>: Ты посмел заявиться прямо в лапы лича? Хах, навиный...')
		})
	})
});
//Падение королевства...
FTBQuestsEvents.completed('0BF61A9D38B98383', event => {
	event.server.tell('§3<Лич>: Не может быть... Смерть - это лекарство!')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('<Вы>: Не сегодня!')
		Utils.server.scheduleInTicks(10, () => {
			event.server.tell('*Вы срубаете голову личу*')
		})
	})
});
//На поиски сокровищ!
FTBQuestsEvents.completed('6E48364F762094DF', event => {
	event.server.tell('<Вы>: А вот и табличка! Время быть переводчиком.')
});
//Дешифровка!
FTBQuestsEvents.completed('4D614FFDC9915326', event => {
	event.server.tell('§5<Ар§kffffff§r§5>: Хорошо, что ты расшифровал эту табличку создай внимательно прочти о опаснастях в §o§cМагнитных §9пещерах§5.')
});
//Картография!
FTBQuestsEvents.completed('5A6455F63E1B9AED', event => {
	event.server.tell('<Вы>: Карта есть - можно поесть! И отправиться на поиски магнитов!')
});
//Намагни--ченность
FTBQuestsEvents.completed('33D21BD77AFAAE29', event => {
	event.server.tell('<Вы>: А вот и магнитные пещеры! И это выглядит.. завораживающе...')
});
//Присо--ска
FTBQuestsEvents.completed('06BC2380670367C4', event => {
	event.server.tell('<Вы>: Вооооа!! Надо почаще смотреть на потолок, а то раздавит так.')
});
//Пла--гиат
FTBQuestsEvents.completed('634A6B1ABA9BA2EA', event => {
	event.server.tell('<Вы>: Что? Он копирует меня?')
});
//Магни--угольник?
FTBQuestsEvents.completed('67C7D831468663A6', event => {
	event.server.tell('<Вы>: Это что ещё за рудоголем?!')
});
//Видеона--блюдение?
FTBQuestsEvents.completed('0730FA2F4AEF1FFB', event => {
	event.server.tell('<Вы>: Стоп! Это штука следит за мной?')
});
//Металло-слайм?
FTBQuestsEvents.completed('53AD77388A693AC4', event => {
	event.server.tell('<Вы>: А ты, друг, тяжёленький!')
});



















/*Глава 4
Отголоски*/
FTBQuestsEvents.completed('54CD162361B62698', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.runCommandSilent(`/title @a title "§6[§r§4Глава IV: 'Отречение'§6]§r"`)
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: И снова здравствуй. С каждым поверженным противником ты становишься всё сильнее, что видно невооружённым глазом. Ты приближаешься к концу быстрыми шагами, не останавливайся! А теперь хочу тебе сообщить что ты почти прошёл тернистый путь измерений от тюремных камер до тюремных башен, ты зачистил всё, но осталось сразить самых могущественных существ этих измерений. А в сумеречном лесу тебя поджидают ещё больше противников и могущественных существ.')
	})
	event.server.runCommandSilent(`/gamestage add @a black_bridge true`)
});
//Око судного дня
FTBQuestsEvents.completed('7C4340876DE61185', event => {
	event.server.tell('<Вы>: Выглядит многообещающее. Куда же оно приведёт меня?')
});
//Храм?
FTBQuestsEvents.completed('499DF9D837944AB3', event => {
	event.server.tell('<Вы>: Интересное здание. А что же внутри?')
});
//Это ещё что за черти?!
FTBQuestsEvents.completed('5E7BE185C0686F73', event => {
	event.server.tell('<Вы>: Вы ещё что за меха-резальщики?')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Это - наблюдатели - охранники этой фабрики. Не то чтобы сильно опасны по одиночке, но вместе - это единый механизм')
	})
});
//Мортира?
FTBQuestsEvents.completed('644FE4C39C6D094B', event => {
	event.server.tell('<Вы>: А это я так понимаю местный меха-метельщик, да?')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Турель "Ищейка" - главный охранный механизм. Сильна как вдали так и вблизи.')
	})
});
//Киборг
FTBQuestsEvents.completed('50AA50776883208B', event => {
	event.server.tell('<Вы>: Какое.. страшище! Вроде как он спит.')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Это - §lПредвестник§r §5или же §lМашина судного дня§r§5. Да, ты прав - он спит, но тебе нужно его пробудить.')
	})
});
//To hell and back!
FTBQuestsEvents.completed('102CA82114858D75', event => {
	event.server.tell('<Вы>: Снова здесь как в первый раз. Снова жутко и не по себе от этого места')
});
//Душеед
FTBQuestsEvents.completed('07DA466F48B01096', event => {
	event.server.tell('<Вы>: В нём же трупы гнили, фу!')
});
//Бедный Йорики
FTBQuestsEvents.completed('391FCE38F6FD077A', event => {
	event.server.tell('<Вы>: Бедные Йорики! Эх, возможно когда-то мне надоест убивать их...')
});
//Чудо-юдо-рыба-кит!
FTBQuestsEvents.completed('5A23A6907888BF6B', event => {
	event.server.tell('<Вы>: Если это был его прототип, то я боюсь на что способен Предвестник...')
});
//Перегрузка
FTBQuestsEvents.completed('245328A6586D8C8A', event => {
	event.server.tell('<Вы>: Пора вернуться на фабрику и дать этому роботу бой!')
});
//ЗАПУСТИТЬ: ПРОТОКОЛ "САМОУНИЧТОЖЕНИЕ"
FTBQuestsEvents.completed('5CD72F319736301F', event => {
	event.server.tell('<Вы>: Видимо нужно бежа-а-а-а-а-ать! Это было хаотично и непредсказуемо.')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Поздравляю, ты смог одолеть даже предвестника. Скажу честно - я не был полностью уверен в тебе, но ты превзошёл мои ожидания.')
	})
});
//Экзотика!
FTBQuestsEvents.completed('6FCD1D5455969FD3', event => {
	event.server.tell('<Вы>: Курортище!')
});
//Склеп?
FTBQuestsEvents.completed('34026C0C1444E1FA', event => {
	event.server.tell('<Вы>: Что это тут посреди джунглей? Храм? Склеп? Молельня?')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Это - склеп смерти... Древняя цивилизация, построившая его, слепо верила в то, что некий бог смерти подарит им бессмертие и они.. получили это, но немного не в той форме, в которой ожидали.')
	})
});
//Бог майя?
FTBQuestsEvents.completed('57117725D928A1BF', event => {
	event.server.tell('<Вы>: Видимо это статуя того самого бога смерти, которому молилась эта цивилизация.')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Да, ты прав это она - статуя владыки смерти - Ах Пуча. Сейчас ты на распутье: ты можешь либо получить благословение Ах Пуча, либо сразиться с ним, но независимо от того, что ты выберешь тебе нужно будет сразить его.')
	})
});
//Смерть - нипочём!
FTBQuestsEvents.completed('4D354EE222CC8985', event => {
	event.server.tell('<Вы>: И это *фух* - бог? Не смешите меня... Не смешите...')
});
//Обезьянки
FTBQuestsEvents.completed('6FED2DE507372ECA', event => {
	event.server.tell('<Вы>: Милые, но не мирные!')
});
//У-у! А-а!
FTBQuestsEvents.completed('5B8431A52457AF05', event => {
	event.server.tell('<Вы>: Убил 3 обезьян.. я маньяк...')
});
//Бойцы джунглей
FTBQuestsEvents.completed('2C2A19A24E90FA08', event => {
	event.server.tell('<Вы>: А вот видимо и эти фанатики!')
});
//Конец фанатизма!
FTBQuestsEvents.completed('5521BBB589C5C0E9', event => {
	event.server.tell('<Вы>: Одумайтесь, черти!')
});
//Вжух-вжух!
FTBQuestsEvents.completed('197E4F949147C8C6', event => {
	event.server.tell('<Вы>: Какая вертушка! Но что-то она не шибко дружелюбна...')
});
//Не Вжух-вжух...
FTBQuestsEvents.completed('36BF1E692BE8D7D8', event => {
	event.server.tell('<Вы>: Выходит.. довертелись? Или как это лучше... Неважно.')
});
//Монолиты бесчеловечности
FTBQuestsEvents.completed('2647367008F0362D', event => {
	event.server.tell('<Вы>: По всей видимости, я подхожу к концу.')
});
//В добрый путь
FTBQuestsEvents.completed('789660CD1FCD6363', event => {
	event.server.tell('<Вы>: А вот и проход! Пора внутрь!')
});
//Шаг в темноту - за горизонты бытия!
FTBQuestsEvents.completed('6EF77817C26DAF53', event => {
	event.server.tell('<Вы>: Путь во тьму, где плещет вечный океан...')
	Utils.server.scheduleInTicks(75, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Здесь тебя ждёт §o§lПривратник§r§5, который охранаяет большего монстра. Но тебе всё же надо будет сразить его, иначе ты не пройдёшь испытание. Скажу честно - раньше ты знал его... Удачи!')
		Utils.server.scheduleInTicks(75, () => {
			event.server.tell('<Вы>: Постой! Расскажи мне больше о моём прошлом...')
		})
	})
});
//Старый друг
FTBQuestsEvents.completed('560F0C76A010C373', event => {
	event.server.tell('<Вы>: Ну привет... Пропустишь меня? Или мы будем биться насмерть?')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('*§5Привратник начинает неторопливо идти на вас§r*')
	})
});
//Проход открыт!
FTBQuestsEvents.completed('513167D1BDCD66E5', event => {
	event.server.tell('<Вы>: Прости, старина, но мне пришлось сделать это для более великой цели.')
});
//Око чемпиона
FTBQuestsEvents.completed('39C6B822D5F98B5E', event => {
	event.server.tell('<Вы>: Что-то оно подозрительно на меня смотрит!')
});
//Чемпионат начался!
FTBQuestsEvents.completed('0B420AB388A790FF', event => {
	event.server.tell('<Вы>: Видимо где-то здесь и находиться чемпионат. §oБыть может под зёмлёй§r?')
});
//Чемпион
FTBQuestsEvents.completed('051E87F27C2413AB', event => {
	event.server.tell('<Вы>: А вот, видимо, и чемпион! Ну что... Пора тряхнуть стариной!')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Не медли! Покажи ему, что ты здесь настоящий чемпион!')
	})
});
//Что это за тварина?!
FTBQuestsEvents.completed('6B94C1564E8378A6', event => {
	event.server.tell('<Вы>: Ты что за чувырла?!')
});
//Чёрт галимый!
FTBQuestsEvents.completed('154BF5CED7B83F1E', event => {
	event.server.tell('<Вы>: Вот же свирепая тварь! Вот почему этот дряхлый чемпион был жив!')
});
//Непроглядный лес
FTBQuestsEvents.completed('70218AE783AE148A', event => {
	event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Найди в среди этого леса тёмную рощу и болота, когда же ты найдешь я скажу зачем именно ты ходил туда.')
});
//Незримая тьма...
FTBQuestsEvents.completed('478262B7C5FEA7A1', event => {
	event.server.tell('<Вы>: Ну тьма! Ничего не вижу. Хоть глаз выколи!')
});
//Разрушенный дом?
FTBQuestsEvents.completed('42EDFEB4995D015E', event => {
	event.server.tell('<Вы>: Его верх как ножом срезали!')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Раньше это было процветающее королевство, но теперь это руины в дремучей роще. Внутри этих катакомб остались разгневанные духи - §l§oФантомные рыцари§r§5. Шестеро бравых ребят которые умерли последними, пытаяясь защитить свою землю. Как видишь у них ничего не вышло, но спустя года их души не ослабли и не угасли, а только усились, и у них хватило сил восстать. К сожалению от тех бравых ребят осталось мало что. В основном это прогневанные неупокоенные души. Так помоги же им: отправь их на покой!')
	})
});
//Что за грёбанный смех?!
FTBQuestsEvents.completed('0A76E710FE8C4FC0', event => {
	event.server.tell('<Вы>: Что это за мелкие твари? Умрите! Чтоб я больше вас не слышал!')
});
//Ненавижу этот звук!
FTBQuestsEvents.completed('49410A68FADE08C0', event => {
	event.server.tell('<Вы>: Уши вянут от их смеха...')
});
//Матрёшка?
FTBQuestsEvents.completed('669BA0D495DCBD9B', event => {
	event.server.tell('<Вы>: Это что за матрёшка? Хах!')
});
//Клац-клац!
FTBQuestsEvents.completed('112B5324FB37ADB6', event => {
	event.server.tell('<Вы>: Оу-у-у-у! Какой он милый! ... Умри!')
	Utils.server.scheduleInTicks(30, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Успокойся! Не превращайся в беспощадного монстра!')
	})
});
//Преступление и наказание
FTBQuestsEvents.completed('0BC5068BA28F1B7A', event => {
	event.server.tell('<Вы>: Это что за матрёшка? Хах!')
});
//Остатки королевства
FTBQuestsEvents.completed('1A55979A27CADBB4', event => {
	event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Вот и фантомные рыцари. Освободи их!')
});
//Погибель королевств
FTBQuestsEvents.completed('77CA0C09DC29EAB2', event => {
	event.server.tell('<Вы>: Покойтесь с миром, братья...')
});
//Болота, скверный запах
FTBQuestsEvents.completed('7F340072D4EAD6A1', event => {
	event.server.tell('*§6Едкий запах сырости и гнили ударяет вам в нос...§r*')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Добро пожаловать на болота! Найди здесь подземный лабиринт. Не забывай про свою карту!')
	})
});
//Лабиринт
FTBQuestsEvents.completed('693EC5C00CEBA15E', event => {
	event.server.tell('<Вы>: Видимо эта дыра - лабиринт. Ну что.. поехали!')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Рад видеть что ты продвигаешься. Здесь опасно и можно запутаться. Будь аккуратен и если не хочешь потеряться можешь найти здесь фокус карты и создать карту этого лабиринта!')
	})
});
//Это ещё что за корова?
FTBQuestsEvents.completed('6D24C01044084102', event => {
	event.server.tell('<Вы>: Меня хочет зарубить стейк!')
});
//Горячее насекомое
FTBQuestsEvents.completed('01B19F608BFECBC6', event => {
	event.server.tell('<Вы>: А-а-а! Жжётся!')
});
//Грибной минотавр?
FTBQuestsEvents.completed('0B0746A23224D5E5', event => {
	event.server.tell('<Вы>: Корова с грибами и острейшим топором?! Такого я ещё не видел!')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Это - §o§lГриботавр§r§5 - смесь грибной коровы и минотавра. Что получилось ты видишь сам, но тебе нужно уибть эту ошибку природы. Так чего ты ждёшь? Сделай это!')
	})
});
//К столу!
FTBQuestsEvents.completed('6F37B710AB81E4F7', event => {
	event.server.tell('<Вы>: Корова с грибами и острейшим топором?! Такого я ещё не видел!')
});
//Слизежук
FTBQuestsEvents.completed('57B40EEF395A460F', event => {
	event.server.tell('<Вы>: Склизкий и противный!')
});
//Сумерки сгущаются
FTBQuestsEvents.completed('57B40EEF395A460F', event => {
	event.server.tell('§5<Ар§kf§r§5и§kfffff§r§5>: Отлично! Ты смог убить могучего гриботавра и фантомных рыцарей! Но на этом пока что всё отдыхай, боец! И учти, что это были не самые могущественные существа этого мира. Есть куда более огромные твари которые влавстуют этим миром так что готовься!')
});














/*Глава 5
Бесконечность - не предел*/
FTBQuestsEvents.completed('6C91857C185FFE94', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.runCommandSilent(`/title @a title "§6[§r§9Глава V: 'Бесконечность'§6]§r"`)
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Приветствую. Как же приятно вспоминать забытое... Ну а сейчас не об этом. В твои задачи входит: вернуться в тюремные камеры и даже не спрашивай зачем, просто вернись, свергнуть могущество сумеречного леса, уничтожить великого воина и многое другое. В случае чего я смогу тебя координировать.')
	})
	event.server.runCommandSilent(`/gamestage add @a insufferable_crypt true`)
});
//Око льдов
FTBQuestsEvents.completed('26BA46FB3D4D74D7', event => {
	event.server.tell('<Вы>: С каждым разом всё страшнее... Куда же меня понесёт в этот раз?')
});
//Замерзшая клеть
FTBQuestsEvents.completed('13E8DE81270974A6', event => {
	event.server.tell('<Вы>: Бр-р-р-р...')
});
//Утерянное наследие
FTBQuestsEvents.completed('4DAD93D1B2C204AC', event => {
	event.server.tell('<Вы>: Не повезло же кому-то! Не хотел бы я так встрять!')
});
//Гул льда
FTBQuestsEvents.completed('382A2CFF735E8488', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Слышишь этот гул по всему ледяному лабиринту? Такой же звук издавала Капитан Корнелия при гибели, но ей никто не помог. Её душа не угасла, а стала только сильнее. Возродив старое тело, и наделив его своей силой Корнелия возродилась, и её дух гуляет по её огромной могиле, издавая этот леденящий звук. Этот горн может воззвать капитана, но он не будет так же доброжелателен, как был при жизни! Освободи же капитана от вечных мучений!')
	Utils.server.scheduleInTicks(120, () => {
		event.server.tell('<Вы>: Ну что, капитан, пора свидеться. ')
	})
});
//Капитан не вернётся
FTBQuestsEvents.completed('222626FE1441C0BF', event => {
	event.server.tell('<Вы>: Капитан был не так силён, но всё же он был крепким орешком!')
});
//Секреты ледяных земель
FTBQuestsEvents.completed('5ACBB7AA41F2108C', event => {
	event.server.tell('<Вы>: Что же скрывает лабиринт? Хм-м.. по карте найденной у Корнелии там есть какая-то метка. Нужно идти туда.')
});
//Сокровище во льдах
FTBQuestsEvents.completed('16A7B04A46A28B86', event => {
	event.server.tell('<Вы>: Вот зачем пошла Капитан Корнелия. Они все хотели открыть этот сундук, видимо, капитан нашёл ключ, но не вернулся. Это значит, что сокровища мои!')
});
//Последний выживший
FTBQuestsEvents.completed('0E2FA3C101AA0B0B', event => {
	event.server.tell('<Вы>: Есть кто дома?')
});
//Треск льда
FTBQuestsEvents.completed('28F9C91A98F0CBB7', event => {
	event.server.tell('<Вы>: Это что за скат переросток!? Твою же..')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Узри же - чудовище в битве с которым погибла Капитан Корнелия. Матерь лабиринта. Выглядит захватывающее и опасно не правда? Срази же его сейчас!')
	})
});
//Пророк
FTBQuestsEvents.completed('22B7092E0CB6E6F2', event => {
	event.server.tell('<Вы>: Это *фух* было явно не очень легко!')
});
//Дежавю
FTBQuestsEvents.completed('1E162595A6DD7545', event => {
	event.server.tell('<Вы>: Чёрт, я отчётливо помню что я здесь уже что-то искал, и это даже не проход на тропу обречённых... Что же я здесь искал? Зачем я вообще его слушаю? ... Ладно.. не нужно паниковать этот неизвестный звучит как тот, кому можно верить. Или нет? Так! Стоп! Хватит панических атак! Нужно сосредоточиться!')
	Utils.server.scheduleInTicks(120, () => {
		event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Прости, совсем забыл: возьми с собой руну лозы, она нужна тебе!')
		Utils.server.scheduleInTicks(40, () => {
			event.server.tell('<Вы>: Я уже задолбался бегать туда-сюда! Ну почему нельзя сказать всё сразу?! Эх... Выхода нет - придётся идти.')
			Utils.server.scheduleInTicks(40, () => {
				event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Извини, я тоже не всемогущий, я §oпока что§r §5вообще никто...')
			})
		})
	})
});
//Невыносимое место
FTBQuestsEvents.completed('506727AC93E36D57', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Ах! Запах невыносимой гробницы... Ты готов к этой битве? Хотя это риторический вопрос... Тебе независимо от решения рано или поздно придётся убить то чудовище, что скрывается за этими дверьми. Я скажу сразу это чудовище - Конъюктивиус - царь мёртвых клеток.')
});
//Финал
FTBQuestsEvents.completed('403076A725BCDE72', event => {
	event.server.tell('<Вы>: Вот и всё... Это конец...')
});
//Твой путь подходит к концу
FTBQuestsEvents.completed('021F55477A64436D', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Готовься! В этот визит в сумеречный лес тебе предстоит победить сразу §l§oтроих§r §5могущественных существ!')
});
//Жара...
FTBQuestsEvents.completed('3BBBCDCA8CD66D38', event => {
	event.server.tell('<Вы>: Фух... Как же здесь жарко, к-как в аду...')
});
//Змей горыныч?
FTBQuestsEvents.completed('21FC4ABBE6796123', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Узри же страшную гидру. Сильна как и в близи, так и в дали. Её шкура слишком прочна для твоих орудий, единственное слабое место гидры - это её головы, но будь аккуратен, ведь когда ты отрубаешь одну голову вырастает ещё две!')
});
//Вечной жизни не существует
FTBQuestsEvents.completed('3BBBCDCA8CD66D38', event => {
	event.server.tell('<Вы>: Видимо, дракончик мёртв...')
	Utils.scheduleInTicks(30, () => {
		event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Что ж... Гидра была повержена...')
	})
});
//Абсолютный ноль!
FTBQuestsEvents.completed('1A14F56550AEA7E3', event => {
	event.server.tell('<Вы>: Бр-р-р-р-р... Холодина!')
});
//Величие
FTBQuestsEvents.completed('47FE895C2EF10E3F', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Приветствую тебя в Шпиле Скорби - обитель грусти, страха, тоски. Не унывай там!')
	Utils.server.scheduleInTicks(60, () => {
	event.server.tell('<Вы>: Монументально...')
	})
});
//Что за гримаса ужаса?
FTBQuestsEvents.completed('0D62D6D80103EEA7', event => {
	event.server.tell('<Вы>: Лицо сделай попроще!')
});
//Нет причин для скорби, друг!
FTBQuestsEvents.completed('56AC36206B6DD812', event => {
	event.server.tell('<Вы>: Лицо сделай попроще!')
});
//Камушек приуныл
FTBQuestsEvents.completed('74BD60E21E0B31A2', event => {
	event.server.tell('<Вы>: Вот это чудо-юдо! Живой камень!')
});
//*Хнык-хнык*
FTBQuestsEvents.completed('2CCE60424C5B9F79', event => {
	event.server.tell('<Вы>: Что за звук?')
});
//Тишина
FTBQuestsEvents.completed('1999860D626B8443', event => {
	event.server.tell('<Вы>: Как же приятно это не слышать...')
});
//Недовольный слизень
FTBQuestsEvents.completed('029B9A3FD7A53AAB', event => {
	event.server.tell('<Вы>: А вот и виновник торжества! Лицо попроще сделай, у нас намечается битва!')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Этот виновник торжества - довольно сильный противник - Тоскованный. Не недооценивай эмоции...')
	})
});
//Разлагающееся королевство
FTBQuestsEvents.completed('66AEC132544F8421', event => {
	event.server.tell('<Вы>: Тронный зал...')
});
//Король смерти
FTBQuestsEvents.completed('72C43CBDB0C00EA9', event => {
	event.server.tell('<Вы>: И это ты виновник торжества? Это будет битва за право жизни!')
});
//Погибель королей...
FTBQuestsEvents.completed('4B2C6DFA6031FA5D', event => {
	event.server.tell('<Вы>: Это была §oпылкая§r битва! Ха-ха!')
});
//Огонь в руках!
FTBQuestsEvents.completed('00FDBF19D43E60BE', event => {
	event.server.tell('<Вы>: Куда же оно меня ведёт? Видимо в недра ада... Выбора у меня нет, так что нужно идти!')
});
//Колизей
FTBQuestsEvents.completed('264CC57FE4810B96', event => {
	event.server.tell('<Вы>: Вот это размах!')
});
//Алтарь пламени
FTBQuestsEvents.completed('04BA671C1D2CFB7B', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Для выполнения ритуала призыва тебе нужен особый, §l§oпылающий§r §5пепел')
});
//Хранитель алтаря
FTBQuestsEvents.completed('24E9F6704553D001', event => {
	event.server.tell('<Вы>: А ты, друг, я посмотрю бронированный!')
	Utils.server.scheduleInTicks(30, () => {
		event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Это пламенеющий ревенант - неуязвим к любым атакам, пока крутит смертоносными щитами. Нападай на него, когда он более спокоен!')
	})
});
//Изничтожение
FTBQuestsEvents.completed('7F090595C31B2964', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Для выполнения ритуала призыва тебе нужен особый, §l§oпылающий§r §5пепел')
});
//Воин Пламени
FTBQuestsEvents.completed('3726DBE5E8E81043', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: А вот и сам Воин Пламени - §l§6Игнис§r §5собственной персоной! Он - само воплощение элемента пламени! Это - очень могущественный противник, готовься к великому сражению!')
});
//Гладиаторы не умирают!
FTBQuestsEvents.completed('71EF70FCEA3CFE35', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Тебе удалось его победить?! Честно: я.. §oприятно удивлён§r§5, не ожидал от тебя такого.')
});
//Заросший свет
FTBQuestsEvents.completed('005472AE40DCC62F', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Не буду таить: твой противник здесь - Кукулькан - древнее божество бытия. В древности люди джунглей поклонялись ему, дабы не переносить несчастья, но это не помогало и почти все эти народы вымерли.')
});
//Куку-куку-кукулькан
FTBQuestsEvents.completed('5874B5554581116B', event => {
	event.server.tell('<Вы>: Какая крылатая скотина!')
});
//Боги недовольны
FTBQuestsEvents.completed('0C184F50825FA484', event => {
	event.server.tell('<Вы>: Куку-ку..')
	Utils.server.scheduleInTicks(15, () => {
		event.server.tel('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Хватит!')
	})
});
//Богоубийца
FTBQuestsEvents.completed('18332B3FAC1CF2EF', event => {
	event.server.tell('<Вы>: Вот и всё! Твоя песенка спета, Кукулькан!')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tel('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: ...')
	})
});
//Алтарь подношений
FTBQuestsEvents.completed('70F3AA90A607033D', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Время пришло: подношения, которые требуются для вызова могущественных существ становятся дороже, но и награда соответственная. Призови Вернувшегося рыцаря - некогда могущественного воина - ныне дряхлого скелета.')
});
//Возрождение!
FTBQuestsEvents.completed('31597F139F2E8046', event => {
	event.server.tell('<Вы>: Вот ты и вернулся! Теперь же пора обратно!')
});
//И смерть!
FTBQuestsEvents.completed('09AADB754B924FF3', event => {
	event.server.tell('<Вы>: Возвращайся туда, откуда прибыло, чудовище!')
});
//Новые знания
FTBQuestsEvents.completed('0D01C41B830313E2', event => {
	event.server.tell('§5<Арх§5и§kffff§r§5о§k§5f§r§5>: Замечательно, ты расшифровал пещерную табличку. Создай карту и отправляйся в неизведанные места!')
});
//Бездна
FTBQuestsEvents.completed('28E99524A9D7D882', event => {
	event.server.tell('<Вы>: А мне точно.. в-вниз?')
});
//Биолюминисцентные создания
FTBQuestsEvents.completed('742ADDD3697098E5', event => {
	event.server.tell('<Вы>: Красиво.. завораживающе...')
});
//Свободный океан
FTBQuestsEvents.completed('22A174ECA3FA0638', event => {
	event.server.tell('<Вы>: Отправлятейтесь на покой, гады морские!')
});
//Чудовище...
FTBQuestsEvents.completed('3B549D5054546E4B', event => {
	event.server.tell('<Вы>: Что это?! Выглядит не дружелюбно. Чёрт, какая же это огромная рыбина...')
});
//Цивилизация?
FTBQuestsEvents.completed('3B549D5054546E4B', event => {
	event.server.tell('<Вы>: Кто это такие? Они выглядят как.. довольно разумные существа... Быть может мне попробовать §oналадить с ними контакт§r?')
});
//Карминитовая акклиматизация
FTBQuestsEvents.completed('46F3EFE0F945E784', event => {
	event.server.tell('<Вы>: Видимо, эта та башня, которая мне нужна!')
});
//Обжигающий плач
FTBQuestsEvents.completed('0FE7B299A13921F0', event => {
	event.server.tell('<Вы>: Я бы сказал, что мне жаль тебя, но, увы, нет!')
});
//Мелкие твари
FTBQuestsEvents.completed('151909D6F423153D', event => {
	event.server.tell('<Вы>: Чёртовы Гастлинги!')
});
//Какой милый...
FTBQuestsEvents.completed('58CC8FBFC56C6A98', event => {
	event.server.tell('<Вы>: Может на вид он и милый, но на деле злыдень ещё каких поискать!')
});






/*Глава 6
Безумие...*/
FTBQuestsEvents.completed('2B349AFE1A5826AA', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.runCommandSilent(`/title @a title "§6[§r§0Глава VI: 'Безумие'§6]§r"`)
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Ты продвигаешься всё дальше и дальше... Чем дальше, тем сильнее ты и твои противники, и тем сильнее я... Я начинаю вспоминать всё, что я потерял...')
	Utils.server.scheduleInTicks(100, () => {
		event.server.tell('<Вы>: Мне кажется, чем дальше я иду, тем безумнее становлюсь... Я уже не тот, кем был раньше, я совсем другой человек... Как же так это всё вышло?')
	})
	})
});
//Путь души
FTBQuestsEvents.completed('3C303567795FCE6A', event => {
	event.server.tell('<Вы>: Нужно идти уверенней! Все беды нипочём! Не думай о плохом!')
});
//Башня в ледяной ночи
FTBQuestsEvents.completed('7A63936C3F8DE393', event => {
	event.server.tell('<Вы>: А вот и то место, куда меня вели. Что же там такое?')
});
//Тьма усопших
FTBQuestsEvents.completed('40182D42A024F519', event => {
	event.server.tell('<Вы>: Смерть ночи! День скорей приди! ... По-моему я начинаю сходить с ума...')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Это похоже на то...')
	})
});
//Высшая алхимия
FTBQuestsEvents.completed('37680BBBB3F3B654', event => {
	event.server.tell('<Вы>: Загадочная штука. Что же она может сделать?')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Она может сделать многое, но её главное предназначение - это та самая, странная, тыква.')
	})
});
//Снова эта тыква!
FTBQuestsEvents.completed('03FA26CBCDA7D401', event => {
	event.server.tell('<Вы>: А вот и эта странная тыква. Время эликсира! Но что же я призову?')
});
//Тыквенное возмездие
FTBQuestsEvents.completed('054B94A542BB6CBF', event => {
	event.server.tell('<Вы>: Ты - лорд? Да не поверю!')
});
//Тыквенное царство пало...
FTBQuestsEvents.completed('3533D86D0D8FDDB8', event => {
	event.server.tell('<Вы>: Вот и всё! Тыковка своё отплясала! Но останавливаться нельзя!')
});
//Взгляд бездны
FTBQuestsEvents.completed('470B8BF77E0C818A', event => {
	event.server.tell('<Вы>: Бр-р-р... Как же жутко оно выглядит...')
});
//Добро пожаловать в атлантиду
FTBQuestsEvents.completed('37680BBBB3F3B654', event => {
	event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Добро пожаловать в Атлантиду. Торжественное место, не правда?')
	Utils.server.scheduleInTicks(60, () => {
		event.server.tell('<Вы>: Вау-вау-вау... Это выглядит.. великолепно... Грандиозно...')
	})
});
//Народ Атлантиды
FTBQuestsEvents.completed('681D54D0159DF55E', event => {
	event.server.tell('<Вы>: А вы, как я понял, здесь живёте?')
});
//Большой-большой
FTBQuestsEvents.completed('2A4542792F4C55A9', event => {
	event.server.tell('<Вы>: Вот это, друг, ты бугай!')
});
//Коралловый маньяк
FTBQuestsEvents.completed('7BB225E3066DDBAE', event => {
	event.server.tell('<Вы>: Умрите, чёртовы кораллы!')
});
//Коралловый маньяк
FTBQuestsEvents.completed('7BB225E3066DDBAE', event => {
	event.server.tell('<Вы>: Умрите, чёртовы кораллы!')
});
//Пасть бездны
FTBQuestsEvents.completed('1BD8489EFDD78D6B', event => {
	event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Узри же саму пасть бездны! Самое неизвестное место §oмультивселенной§r§5. Никогда не знаешь, что оттуда может появиться!')
	Utils.server.scheduleInTicks(80, () => {
		event.server.tell('<Вы>: Что же оттуда может вылезти? Иногда, даже думать страшно...')
	})
});
//Жертва для бездны
FTBQuestsEvents.completed('1700391A7C61AC87', event => {
	event.server.tell('<Вы>: Жертва готова... Но к чему же мне готовиться? ...')
});
//Чудовище из бездны
FTBQuestsEvents.completed('381D62034954A107', event => {
	event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Поприветствуй §lЛевиафана§r§5 - ужасное существо, с безграничной магией бездны, но не бессемертное. Сможешь ли ты его победить? Этот вопрос мучает меня... Но всё зависит от тебя, удачи!')
	Utils.server.scheduleInTicks(80, () => {
		event.server.tell('<Вы>: Вот это рыбина! Твою же...')
	})
});
//Охота на чудовищ
FTBQuestsEvents.completed('13028B99C4C2C9D0', event => {
	event.server.tell('<Вы>: Бесчисленная и хаотичная сила... Таким как ты нельзя давать такую силу!')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: ... ... ... Я не скажу, что я был уверен в твоей победе... Чем дальше ты продвигаешься тем страшнее мне становится...')
	})
});
//Второй ритуал
FTBQuestsEvents.completed('15399B95E3B02DB0', event => {
	event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Ты собрал всё для второго ритуала. В этот раз тебе придётся сразить Падшего Идола - существо, очень похожее на Вернувшегося рыцаря, но с большей силой. Только эссенция вечера, принадлежащая Бешеной тени, сможет пробудить его.')
});
//Икона луны
FTBQuestsEvents.completed('765307618FF3BEDB', event => {
	event.server.tell('<Вы>: Ну, что, Идол, я надеюсь ты готов к смерти? А если и нет - то это неважно!')
});
//Падший дважды
FTBQuestsEvents.completed('40E9F032C54E6E6B', event => {
	event.server.tell('<Вы>: Падший дваджы, не восстанет вновь!')
});
//Хаотический ритуал
FTBQuestsEvents.completed('75664E5B854FBE3F', event => {
	event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Ещё один ритуал призыва великого существа - Монарха Хаоса - крайне неопределённого противника. Никогда не знаешь какой приём у него будет на этот раз... Нужный для его призыва осколок неопределлёности хранит Визер.')
	Utils.server.scheduleInTicks(80, () => {
		event.server.tell('<Вы>: Стало не сильно понятней... Разве, что про осколок.')
	})
});
//Бессмысленное могущество
FTBQuestsEvents.completed('231A26EDC0344AA5', event => {
	event.server.tell('<Вы>: Какая огромная и бессмысленная сила... Этот поток сил нужно остановить!')
});
//Равновесие
FTBQuestsEvents.completed('7AF72B2717F11F1C', event => {
	event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Что ж, ты смог победить само воплощение хаоса! Мои поздравления!')
});
//Забытая память
FTBQuestsEvents.completed('0A085C6938F0409D', event => {
	event.server.tell('<Вы>: А вот и, та самая табличка!')
});
//Во глубине забвенных руд
FTBQuestsEvents.completed('61BC363D9D43AC25', event => {
	event.server.tell('<Вы>: Пещеры выглядят.. довольно скудно...')
});
//Это чёртов крот!
FTBQuestsEvents.completed('3A1D8155F14AD288', event => {
	event.server.tell('<Вы>: Чёртов крот, копает и копает тут!')
});
//Взгляд глубин
FTBQuestsEvents.completed('23478418CC48DB44', event => {
	event.server.tell('<Вы>: Что зыришь?')
});
//Убийственный взгляд
FTBQuestsEvents.completed('7862009B662BC691', event => {
	event.server.tell('<Вы>: Не смотри на меня! Я стесняюсь!')
});
//Крылатая скотина
FTBQuestsEvents.completed('06695DEC09588C36', event => {
	event.server.tell('<Вы>: Что за долбанная летучая мышь?! Пошла вон!')
});
//Какие-то крысы?
FTBQuestsEvents.completed('7520677CE24F083B', event => {
	event.server.tell('<Вы>: Ты ещё что за крыса мерзкая?!')
	Utils.server.scheduleInTicks(30, () => {
		event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Эти крысы Подзектанты, они - сектанты пустоты. По одиночке они слабы, но вместе они способны призвать нечто могущественное...')
	})
});
//Забвенное чудовище
FTBQuestsEvents.completed('63D1FAEE2918B7A7', event => {
	event.server.tell('<Вы>: Вот это тварь... Полурак-полу.. так! Хватит!')
	Utils.server.scheduleInTicks(30, () => {
		event.server.tell('§5<Архит§kfff§r§5то§r§5§kf§r§5>: Да, это именно он - Забытый - могущественный зверь, способный раздавить тебя одной лапой!')
	})
});
//Воспоминание
FTBQuestsEvents.completed('7D3DD903B4DA4CCF', event => {
	event.server.tell('<Вы>: Искореним пустоту!')
});











	



/*Глава 7 (финал)
Последний путь*/
FTBQuestsEvents.completed('3D174667C78432DF', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.runCommandSilent(`/title @a title "§6[§r§dГлава VII: 'Последний фрактал'§6]§r"`)
	Utils.server.scheduleInTicks(100, () => {
	event.server.tell('§5<Архит§kf§r§5к§5то§r§5§kf§r§5>: Твой путь подходит к концу... Ты почти покорил этот мир, я возвращаюсь в привычное мне состояние, но я всё ещё мало, что помню. Зато я почти вспомнил своё имя... В этот раз, я не хочу вмешиваться в §l§o§nтвой путь§r§5. Я лишь буду молча наблюдать за твоим триумфом. §r §5Удачи тебе, соискатель!')
	})
});
//Мрачный сад
FTBQuestsEvents.completed('4B444B1BF16E08DB', event => {
	event.server.tell('<Вы>: Сделаю из тебя букетик! Ха-ха!')
});
//Токсичные пещеры
FTBQuestsEvents.completed('04F64BFE81DCA78D', event => {
	event.server.tell('<Вы>: М-м-м... Как же тут.. воняет...')
});
//Радиоактивный таракан
FTBQuestsEvents.completed('41A3A01A10BB21BB', event => {
	event.server.tell('<Вы>: Это ещё что за таракан-переросток на стероидах?!')
});
//Ядерная угроза
FTBQuestsEvents.completed('3DC66069A43BF63F', event => {
	event.server.tell('<Вы>: Воу... Дружище, давай только без взрывов!')
});
//Устранение угроз
FTBQuestsEvents.completed('69195563CA65085D', event => {
	event.server.tell('<Вы>: *Фух*... Хорошо что он не взорвался!')
});
//Умный
FTBQuestsEvents.completed('3DC482C0E3991E8A', event => {
	event.server.tell('<Вы>: А, ты, мозговитый, я посмотрю!')
});
//Деградация!
FTBQuestsEvents.completed('3DC482C0E3991E8A', event => {
	event.server.tell('<Вы>: Деградируем!')
});
//Облучение
FTBQuestsEvents.completed('4FEA021E0B8E959A', event => {
	event.server.tell('<Вы>: Полезная штука, и ломается весело!')
});
//Воля древних!
FTBQuestsEvents.completed('0BE22EF09EEE25A7', event => {
	event.server.tell('<Вы>: Да придёт же в этот мир баланс!')
});
//Взгляд последнего пути...
FTBQuestsEvents.completed('68116D716FB733C4', event => {
	event.server.tell('§5<Архитектор>: Ну что... Время пришло! Назад пути нет! Твоя история подходит к концу, остался последний, самый могущественый противник! §o§l§3Маледиктус§r §5- проклятый и самый могущественный дух этого мира. Он был заточён в замёрзшую тюрьму, охраняемую скелетами погибших от его рук - §3§o§lДрауграми§r§5. Его пытались победить многие, но все заканчивали как один - полным провалом и смертью... Быть может §o§lты§r §5разорвёшь этот порочный круг смертей?')
});
//Проклятая тюрьма
FTBQuestsEvents.completed('24766F6EBBB23B26', event => {
	event.server.tell('<Вы>: А вот и тюрьма §l§o§3Маледиктуса§r...')
	Utils.server.scheduleInTicks(40, () => {
		event.server.tell('§5<Архитектор>: Ну что? Как ощущения перед финальным боем?')
		Utils.server.scheduleInTicks(40, () => {
			event.server.tell('<Вы>: Смешанные...')
		})
	})
});
//Слабейший падший
FTBQuestsEvents.completed('72A9495F04DAC2C5', event => {
	event.server.tell('§5<Архитектор>: Это драугр - наиболее слабая душа.')
});
//Элита
FTBQuestsEvents.completed('7DEB0442600CD1AF', event => {
	event.server.tell('§5<Архитектор>: Элитный Драугр - слаб вблизи, но силён вдали!')
});
//Королевская гвардия
FTBQuestsEvents.completed('02E95942314E2A97', event => {
	event.server.tell('§5<Архитектор>: Элитный Драугр - слаб вблизи, но силён вдали!')
});
//Королевская гвардия
FTBQuestsEvents.completed('05FA1782C0030AF4', event => {
	event.server.tell('§5<Архитектор>: Аптергангр - это берсерк-драугр. Очень силён, делает смертоносные рывки и выпады.')
});
//Конец истории!
FTBQuestsEvents.completed('75BD1298E922A83F', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	event.server.tell('§5<Архитектор>: Т-ты.. ты смог одолеть всех! Но как?! Я не верил в тебя в бою с Маледиктусом до последнего... Ты смог пройти все испытания... Я дарую тебе печать разрушения проклятий. Используй её с умом, и спасибо, что помог мне возвратить память...')
	Utils.server.scheduleInTicks(200, () => {
		event.server.runCommandSilent(`/title @a title "§aПоздравляем! Вы прошли сборку"`)
		event.server.runCommandSilent(`/title @a subtitle "§bSoulbound §6Legacy"`)
		Utils.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent(`/title @a subtitle ""`)
		event.server.runCommandSilent(`/title @a title "§aСоздана и разработана §eCakibra Team"`)
		Utils.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent(`/title @a title "§aГлавный разработчик -§r sandebrodo"`)
		Utils.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent(`/title @a title "§aТестировали:"`)
		event.server.runCommandSilent(`/title @a subtitle "sandebrodo, zaxa19, Oluhovchanin, zedr1"`)
		Utils.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent(`/title @a title "§aОтдельная благодарность§r zaxa19"`)
		event.server.runCommandSilent(`/title @a subtitle "§aЗа помощь с идеями"`)
		Utils.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent(`/title @a subtitle ""`)
		event.server.runCommandSilent(`/title @a title "Спасибо за игру, и..."`)
		Utils.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent(`/title @a title "Удачи, путник!"`)
		               })
		            })
		         })
		      })
		   })
		})
	})
});

//Эпилог.
FTBQuestsEvents.completed('75BD1298E922A83F', event => {
	event.server.players.forEach(p => {
		p.sendData('close_gui', null)
	})
	//Пока что тут ничего нет, надо переделать диалог =(
});

console.log('Storyline was started!')
