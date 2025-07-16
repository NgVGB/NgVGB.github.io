var type = navigator.appName
if (type == 'Netscape') {
  var lang = navigator.language //获取浏览器配置语言，支持非IE浏览器
} else {
  var lang = navigator.userLanguage //获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
}
var lang = lang.substr(0, 2) //获取浏览器配置语言前两位
$('body').addClass(lang)
$(document).ready(foo)
var cur = '/en/'

function foo(lang) {
  if (lang == 'en' || lang == 'uk' || lang == 'us') {
    $('body').removeClass().addClass('en')
    $('title').html('Revelation M')
    $("meta[name='description']").attr('content', 'Embark on an journey through clouds and sea, in the world of "Revelation M"')
    $('.slogn img.slg').attr('src', 'https://res.17996cdn.net/rvlm/home/images/en/slogn.png')
    $('.yy-bt img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/en/pre-btn.png')
    // $('.uk-navbar-nav li a:first, .navbar-navm li a:first').text('Home')
    // $('.uk-navbar-nav li a:eq(1), .navbar-navm li a:eq(1)').text('Updates＆strategy')
    // $('.uk-navbar-nav li a:eq(2), .navbar-navm li a:eq(2)').text('Classes')
    // $('.uk-navbar-nav li a:eq(3), .navbar-navm li a:eq(3)').text('features')
    $('.pz-pic img').attr('src', 'https://res.17996cdn.net/rvlm/sharer/imges/EN.png')
    $('.p2-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/en/p2-title.png')
    $('.p3-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/en/p3-title.png')
    $('.p4-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/en/p4-title.png')
    $('.form-mail').attr('placeholder', 'Please enter your email')
    $('h2.yy-tit1 img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/en/yy-tit1.png')
    $('.reg_btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/en/pre-ok.png')
    $('.radio-btn span').text('i agree to the terms of service and read the ')
    $('.radio-btn a').text('privacy policy ')
    $('.policy-text').html(`<p class="pre-text">HAOPLAY Inc. will collect the following personal information for the pre-registration events for
《Revelation M》. <br />Refusing may limit your participation in the event.</p>
          <p>
            1) Personal information that will be collected: user email address<br />
2) Purpose of personal information collected and utilized: game release time, in-game activities and activity prices will be sent to all the registered email addresses.<br />
3) Name of the consignment company that will utilize the personal information: HAOPLAY Inc<br />
4) Duration of personal information retention and utilization: Personal information will be dispose within 365 days based on the date of personal information collected.
          </p>`)

    $('#modal-pre-ok .pre-text').text('Congratulations! Registration successful! ')
    $('.twitter').attr('href', 'https://twitter.com/Revelation1900')
    $('.youtube').attr('href', 'https://www.youtube.com/@RevelationMInternational')
    var names = [`Paladin`, `Swordmage`, `Spirit Shaper`, `Blade Master`, `Occultist`, `Dragonknight`, `Gunslinger`]
    var descs = [
      `An iron-blooded guardian loyal to his faith, strong melee output, strong defense.`,
      `Calm Star Master, has long-range spell output, high damage and strong control.`,
      `Accompanied by spiritual beasts, has long-range spells and healing ability to protect the team`,
      `The heir to the God of War who has learned martial arts, master of close combat, has strong Crit, defence and control`,
      `Monitors the balance of energy between the soul world and the human world, outputs long-range spells. Occultist can both attack and heal.`,
      `Swordsman of Destiny Inheriting the Dragon Soul, scales in both physical and spell damage. Dragonknights have a lot of AOE skills that deliver long range damage, thus they are suitable for players who enjoy dealing damage from afar. They can also strengthen familiars while using the Dragon Soul build. `,
      `A band of mechanical enthusiasts, driven by artillery and ammunition! Roses ablaze fiercely amidst the gunfire. Can the Gunslinger win your heart in the smoke of gunpowder?`,
    ]
    var infos = [`Character: Male/Girl`, `Character: Male/Female`, `Character: Female/Girl`, `Character: Male/Female`, `Character: Male/Girl`, `Character: Male/Girl`, `Character: Male/Female`]
    var items = [
      [`Earth`, `Thunder`],
      [`Pyro`, `Cryo`],
      [`Natura`, `Anima`],
      [`Valor`, `Vigor`],
      [`Sacred`, `Cursed`],
      [`Sword Soul`, `Dragon Soul`],
      [`Flame Shot`, `Astralis`],
    ]
    for (var i = 0; i < names.length; i++) {
      $(`.lang-name-${i}`).text(names[i])
      $(`.lang-desc-${i}`).text(descs[i])
      $(`.lang-info-${i}`).text(infos[i])
      $(`.lang-item-${i}-n`).text(items[i][0])
      $(`.lang-item-${i}-t`).text(items[i][1])
    }
    $('.rews-item img,.swiper-lang img').each(function () {
      $(this).attr('src', $(this).attr('src').replace(cur, '/en/'))
    })
    cur = '/en/'
  } else if (lang == 'zh' || lang == 'cn' || lang == 'tw') {
    $('body').removeClass().addClass('zh')
    $('title').html('Revelation M')
    $("meta[name='description']").attr('content', '东方的幻想世界，来《Revelation M》一起穿云入海去冒险！')
    // $('.uk-navbar-nav li a:first, .navbar-navm li a:first').text('网站首页')
    // $('.uk-navbar-nav li a:eq(1), .navbar-navm li a:eq(1)').text('云垂公告＆攻略')
    // $('.uk-navbar-nav li a:eq(2), .navbar-navm li a:eq(2)').text('门派介绍')
    // $('.uk-navbar-nav li a:eq(3), .navbar-navm li a:eq(3)').text('游戏特色')
    $('.pz-pic img').attr('src', 'https://res.17996cdn.net/rvlm/sharer/imges/ZH.png')
    $('.slogn img.slg').attr('src', 'https://res.17996cdn.net/rvlm/home/images/zh/slogn.png')
    $('.yy-bt img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/zh/pre-btn.png')
    $('.p2-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/zh/p2-title.png')
    $('.p3-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/zh/p3-title.png')
    $('.p4-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/zh/p4-title.png')
    $('.form-mail').attr('placeholder', '请输入邮箱地址')
    $('h2.yy-tit1 img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/zh/yy-tit1.png')
    $('.reg_btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/zh/pre-ok.png')
    $('.radio-btn span').text('我同意服务条款并阅读 ')
    $('.radio-btn a').text('隐私政策 ')
    $('.policy-text').html(`<p class="pre-text">HAOPLAY Inc. 将会收集您的个人信息用做 《Revelation M》预约注册活动。<br />
拒绝接受条款将影响您参与预约活动</p>
          <p>
            1) 需要被收集的个人信息: 个人邮箱<br />
            2) 个人信息的用途及目的: 我们将会在给所有已预约的邮箱地址发送游戏发行时间, 游戏内活动及活动价格<br />
            3) 使用以上个人信息的运营公司名称: HAOPLAY Inc. <br />
            4) 个人信息的保留使用时间: 收集365天后将不再使用
          </p>`)
    $('#modal-pre-ok .pre-text').text('预约成功! ')
    $('.twitter').attr('href', 'https://twitter.com/RevelationM1nt')
    //$('.youtube').attr('href', 'https://www.youtube.com/@RevelationM1')
    const roles = [
      {
        name: `圣堂`,
        desc: `忠于信仰的铁血守护者，近战物理输出，铜墙铁壁，具有强大的防御力。`,
        info: `体型：成男、少女`,
        items: [`地罡`, `雷罡`],
      },
      {
        name: `玉虚`,
        desc: `超然世外的沉静星宿师，远程法术输出，能对大片敌人造成高伤害和强控制。`,
        info: `体型：成男、成女`,
        items: [`焚天`, `玄冰`],
      },
      {
        name: `灵珑`,
        desc: `与灵兽为伴的生机散播者，远程法术输出，同时又拥有守护团队的治疗能力。`,
        info: `体型：成女、少女`,
        items: [`驭灵`, `驭魂`],
      },
      {
        name: `光刃`,
        desc: `以武悟道的战神白帝继承人，近战物理输出，拥有强大爆发力同时兼具防控解控能力。`,
        info: `体型：成男、成女`,
        items: [`问情`, `问道`],
      },
      {
        name: `流光`,
        desc: `监控着魂界和人界能量的平衡，远程法术输出。既可以攻击也可以治愈人的灵魂。`,
        info: `体型：成男、少女`,
        items: [`衍光`, `寂灭`],
      },
      {
        name: `天昭`,
        desc: `龙渊之侧的天命剑士，物法双修的近战输出。剑魄龙魂，可在龙魂剑心形态自由切换，拥有强大的控场能力与中程攻击力。`,
        info: `体型：成男、少女`,
        items: [`剑魂`, `龙魂`],
      },
      {
        name: `炎天`,
        desc: `他们是狂热的机械造物达人，是超远距离的物理输出职业。无论拒敌还是追杀，都能掌握绝对的主动权`,
        info: `体型：成男、成女`,
        items: [`炎灭`, `天枢`],
      },
    ]
    roles.forEach((role, i) => {
      $(`.lang-name-${i}`).text(role.name)
      $(`.lang-desc-${i}`).text(role.desc)
      $(`.lang-info-${i}`).text(role.info)
      $(`.lang-item-${i}-n`).text(role.items[0])
      $(`.lang-item-${i}-t`).text(role.items[1])
    })

    $('.rews-item img,.swiper-lang img').each(function () {
      $(this).attr('src', $(this).attr('src').replace(cur, '/zh/'))
    })

    cur = '/zh/'
  } else if (lang == 'de') {
    $('body').removeClass().addClass('de')
    $('title').html('Für Revelation M')
    $("meta[name='description']").attr('content', 'Erlebe eine spannende Expedition durch majestätische Wolken und unerforschte Meereswelten!')
    $('.slogn img.slg').attr('src', 'https://res.17996cdn.net/rvlm/home/images/de/slogn.png')
    $('.yy-bt img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/de/pre-btn.png')
    // $('.uk-navbar-nav li a:first, .navbar-navm li a:first').text('Homepage')
    // $('.uk-navbar-nav li a:eq(1), .navbar-navm li a:eq(1)').text('Ankündigung＆Strategie')
    // $('.uk-navbar-nav li a:eq(2), .navbar-navm li a:eq(2)').text('Klassen')
    // $('.uk-navbar-nav li a:eq(3), .navbar-navm li a:eq(3)').text('Spielfunktionen ')
    $('.pz-pic img').attr('src', 'https://res.17996cdn.net/rvlm/sharer/imges/DE.png')
    $('.p2-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/de/p2-title.png')
    $('.p3-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/de/p3-title.png')
    $('.p4-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/de/p4-title.png')
    $('.form-mail').attr('placeholder', 'E-Mail-Adresse eingeben')
    $('h2.yy-tit1 img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/de/yy-tit1.png')
    $('.reg_btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/de/pre-ok.png')
    $('.radio-btn span').text(' Ich stimme der Datenschutzerklärung zu. ')
    $('.radio-btn a').text('(Datenschutzerklärung) ')
    $('.policy-text').html(`<p class="pre-text">HAOPLAY Inc. sammelt die folgenden persönlichen Daten für die Events zur Vorregistrierung von Revelation M.
<br />
Die Ablehnung kann Ihre Teilnahme an der Veranstaltung einschränken.
</p>
          <p>
            1) Personenbezogene Daten, die erfasst werden: E-Mail-Adresse<br />
2) Zweck der erfassten und verwendeten personenbezogenen Daten: Die Nachricht wird an die oben genannte E-Mail-Adresse über das Startdatum, die In-Game-Events und die Veranstaltungspreise gesendet.<br />
3) Name des Unternehmen, das die persönlichen Daten verwendet: HAOPLAY Inc.<br />
4) Dauer der Speicherung und Nutzung persönlicher Daten: Persönliche Daten werden innerhalb von 365 Tagen nach dem Datum der Erfassung der persönlichen Daten gelöscht.
          </p>`)
    $('#modal-pre-ok .pre-text').text('Herzlichen Glückwunsch! Registrierung erfolgreich! ')
    $('.twitter').attr('href', 'https://twitter.com/Revelation1900')
    var names = [`Paladin`, `Schwertmagier`, `Geistgestalter`, `Klingenmeister`, `Okkultist`, `Schwertheiliger`, `Gunslinger`]
    var descs = [`Ein eisenblütiger Wächter, der dem Glauben treu bleibt. Nahkampf-Phys.-Typ`, `Der ruhige Meister des Sternbilds,Langstrecken-Zauber-Typ`, `Der Verbreiter des Lebens,Langstrecken-Zauber-Typ`, `Der Erbe des Weißen Kaisers,Nahkampf-Phys.-Typ`, `Überwacht das Energiegleichgewicht zwischen der Seelenwelt und der Menschenwelt,Langstrecken-Zauber-Typ`, `Schicksalsschwertkämpfer, Nahkampf-Phys.-Zauber-Typ, zwischen der Drachengeist- und der Schwertseele-Form kann es beliebig gewechselt werden.`, `Eine Gruppe von mechanischen Enthusiasten, besessen von Artillerie und Munition! `]
    var infos = [`Körper: Mann, Mädchen`, `Körper: Mann, Frau`, `Körper: Frau, Mädchen`, `Körper: Mann, Frau`, `Körper: Mann, Mädchen`, `Körper:Mann,Mädchen`, `Körper:Mann, Frau`]
    var items = [
      [`Irdisch`, `Donner`],
      [`Versgn.`, `Eis`],
      [`Geist`, `Seele`],
      [`Tapfer`, `Samurai`],
      [`Göttl.`, `Vernicht.`],
      [`Schwertseele`, `Drachengeist`],
      [`Feuerschuss`, `Himmel`],
    ]
    for (var i = 0; i < names.length; i++) {
      $(`.lang-name-${i}`).text(names[i])
      $(`.lang-desc-${i}`).text(descs[i])
      $(`.lang-info-${i}`).text(infos[i])
      $(`.lang-item-${i}-n`).text(items[i][0])
      $(`.lang-item-${i}-t`).text(items[i][1])
    }

    $('.rews-item img,.swiper-lang img').each(function () {
      $(this).attr('src', $(this).attr('src').replace(cur, '/de/'))
    })
    cur = '/de/'
  } else if (lang == 'fr') {
    $('body').removeClass().addClass('fr')
    $('title').html('Revelation M')
    $("meta[name='description']").attr('content', 'Une aventure fantastique dans le monde de Revelation M')
    $('.slogn img.slg').attr('src', 'https://res.17996cdn.net/rvlm/home/images/fr/slogn.png')
    $('.yy-bt img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/fr/pre-btn.png')
    // $('.uk-navbar-nav li a:first, .navbar-navm li a:first').text('Accueil')
    // $('.uk-navbar-nav li a:eq(1), .navbar-navm li a:eq(1)').text('Annonce＆astuces')
    // $('.uk-navbar-nav li a:eq(2), .navbar-navm li a:eq(2)').text('Classes')
    // $('.uk-navbar-nav li a:eq(3), .navbar-navm li a:eq(3)').text('Caractéristiques')
    $('.pz-pic img').attr('src', 'https://res.17996cdn.net/rvlm/sharer/imges/FR.png')
    $('.p2-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/fr/p2-title.png')
    $('.p3-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/fr/p3-title.png')
    $('.p4-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/fr/p4-title.png')
    $('.form-mail').attr('placeholder', 'Veuillez entrer votre adresse e-mail')
    $('h2.yy-tit1 img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/fr/yy-tit1.png')
    $('.reg_btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/fr/pre-ok.png')
    $('.radio-btn span').text(`J'ai lu et j'accepte la `)
    $('.radio-btn a').text('Politique de Confidentialité ')
    $('.policy-text').html(`<p>HAOPLAY Inc collectera les donneés personnelles suivantes pour les événements de pré-inscription pour Stella Arcana, le refus peut limiter votre participation à l'événement.</p>
          <p>
            1) Données collectées: adresse e-mail<br />                                                                                            2) Les données personnelles sont utilisées pour : vous envoyer un e-mail indiquant la date de lancement du jeu, les événements du jeu et les récompenses.<br />               
            3) Nom de la société qui utilisera les données personnelles:  HAOPLAY Inc.<br />          
            4) Durée de conservation et d'utilisation des données personnelles: Les données personnelles seront supprimées dans un délai de 365 jours après la date de collection.
          </p>`)
    $('#modal-pre-ok .pre-text').text('Félicitations, préinscription réussie ! ')
    $('.twitter').attr('href', 'https://twitter.com/Revelation1900')
    $('.youtube').attr('href', 'https://www.youtube.com/@RevelationMInternational')
    const roles = [
      {
        name: `Paladin`,
        desc: `Avec sa défense inégalée, le Paladin est un guerrier qui se spécialise en combat au corps à corps.`,
        info: `Genre : Homme, Femme`,
        items: [`Terre`, `Électro`],
      },
      {
        name: `Magépée`,
        desc: `Grâce à sa capacité de contrôle de foule, le Magépée est capable d'infliger d'énormes dégâts à distance.`,
        info: `Genre : Homme, Femme`,
        items: [`Pyro`, `Cryo`],
      },
      {
        name: `Sculptrice d'esprit`,
        desc: `Meilleure amie des lutins, la Sculptrice d'esprit peut lancer des sorts à distance et soigner tous les alliés blessés.`,
        info: `Genre : Femme, Fille`,
        items: [`Esprit`, `Âme`],
      },
      {
        name: `Maître d'armes`,
        desc: `Héritier de l'Empereur Blanc, le Maître d'armes est un expert de burst. Il est aussi capable de dissiper les effets de contrôle.`,
        info: `Genre : Homme, Femme`,
        items: [`DPS`, `Tank`],
      },
      {
        name: `Occultiste`,
        desc: `Entre Ange et Démon, l'Occuliste peut vaincre n'importe quel adversaire sans pitié et ramener ses alliés à la vie !`,
        info: `Genre : Homme, Fille`,
        items: [`Ange`, `Démon`],
      },
      {
        name: `Épéiste`,
        desc: `Venant de l'Abysse du Dragon, l'Épéiste est un vrai guerrier de corps à corps ! Il est capable de basculer entre la forme Épée et la forme Dragon pour blesser ou contrôler ses ennemis !`,
        info: `Genre : Homme, Fille`,
        items: [`Épée`, `Dragon`],
      },
      {
        name: `Franc-tireur`,
        desc: `Armé de deux pistolets et un fusil de précision, le Franc-tireur, excelle dans l'élimination de ses ennemis à longue distance. `,
        info: `Genre : Homme, Femme`,
        items: [`Flamme`, `Céleste`],
      },
    ]
    roles.forEach((role, i) => {
      $(`.lang-name-${i}`).text(role.name)
      $(`.lang-desc-${i}`).text(role.desc)
      $(`.lang-info-${i}`).text(role.info)
      $(`.lang-item-${i}-n`).text(role.items[0])
      $(`.lang-item-${i}-t`).text(role.items[1])
    })

    $('.rews-item img,.swiper-lang img').each(function () {
      $(this).attr('src', $(this).attr('src').replace(cur, '/fr/'))
    })
    cur = '/fr/'
  } else if (lang == 'ru' || lang == 'py') {
    $('body').removeClass().addClass('ru')
    $('title').html('Пред-Регистрация')
    $("meta[name='description']").attr('content', 'Отправьтесь в путешествие сквозь облака и море в мире «Revelation M».')
    $('.slogn img.slg').attr('src', 'https://res.17996cdn.net/rvlm/home/images/ru/slogn.png')
    $('.yy-bt img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/ru/pre-btn.png')
    // $('.uk-navbar-nav li a:first, .navbar-navm li a:first').text('Главная')
    // $('.uk-navbar-nav li a:eq(1), .navbar-navm li a:eq(1)').text('Анонсы и Стратегии')
    // $('.uk-navbar-nav li a:eq(2), .navbar-navm li a:eq(2)').text('Классы')
    // $('.uk-navbar-nav li a:eq(3), .navbar-navm li a:eq(3)').text('Особенности')
    $('.pz-pic img').attr('src', 'https://res.17996cdn.net/rvlm/sharer/imges/RU.png')
    $('.p2-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/ru/p2-title.png?v02s')
    $('.p3-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/ru/p3-title.png')
    $('.p4-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/ru/p4-title.png')
    $('.form-mail').attr('placeholder', 'Введите эл. почту')
    $('h2.yy-tit1 img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/ru/yy-tit1.png')
    $('.reg_btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/ru/pre-ok.png')
    $('.radio-btn span').text(`Я согласен с условиями обслуживания и ознакомлен с `)
    $('.radio-btn a').text('Политикой Конфиденциальности.')
    $('.policy-text').html(`<p>HAOPLAY Inc. соберет следующую личную информацию для мероприятий по предварительной регистрации:<br />
«Откровение М».<br />
Отказ может ограничить Ваше участие в мероприятии.</p>
          <p>
            1) Личная информация, которая будет собрана: адрес электронной почты пользователя.<br />
            2) Цель сбора и использования личной информации: время выпуска игры, внутриигровые действия и цены на мероприятия будут отправлены на все зарегистрированные адреса электронной почты.<br />
            3) Название компании, которая будет использовать личную информацию: HAOPLAY Inc.<br />
            4) Продолжительность хранения и использования личной информации: Личная информация будет удалена в течение 365 дней с даты сбора личной информации.
          </p>`)
    $('#modal-pre-ok .pre-text').text('Поздравляем! Регистрация прошла успешно!')
    $('.twitter').attr('href', 'https://twitter.com/Revelation1900')
    $('.youtube').attr('href', 'https://www.youtube.com/@RevelationMInternational')
    const roles = [
      {
        name: `Паладин`,
        desc: `Стойкий страж, верный своему долгу, силен в ближнем бою, имеет мощную защиту.`,
        info: `Пол: Муж., Лоли`,
        items: [`Земля`, `Молния`],
      },
      {
        name: `Маг`,
        desc: `Спокойный мастер созвездий, обладает дальнобойными заклинаниями, высоким уроном и сильным контролем.`,
        info: `Пол: Муж, Жен`,
        items: [`Огонь`, `Лёд`],
      },
      {
        name: `Друид`,
        desc: `Творец жизни, сопровождаемый духами, использует заклинания дальнего действия и обладает целебными способностями для защиты команды.`,
        info: `Пол: Жен., Лоли`,
        items: [`Жизнь`, `Духи`],
      },
      {
        name: `Рыцарь`,
        desc: `Наследник Бога Войны, изучивший боевые искусства, мастер ближнего боя, обладающий сильным критическим ударом, защитой и контролем.`,
        info: `Пол: Муж, Жен`,
        items: [`Доблесть`, `Сила`],
      },
      {
        name: `Оккультист`,
        desc: `Следит за балансом энергии между миром душ и миром людей, использует заклинания дальнего действия. Может как атаковать, так и лечить.`,
        info: `Пол: Муж., Лоли`,
        items: [`Ангел`, `Демон`],
      },
      {
        name: `Мечник`,
        desc: `Мечник Судьбы, унаследовавший душу дракона.Воин средней дистанции, обладает магическим уроном. Рыцари-Драконы наносят большое количество АОЕ урона навыками на дистанции, а также способны усиливать своих Духов.`,
        info: `Пол: Мужчина, Лоли`,
        items: [`Дух Меча`, `Дух Дракона`],
      },
      {
        name: `Стрелок`,
        desc: `Это группа механических безумцев, помешанных на артиллерии и боеприпасах! Звучат выстрелы, горят на ветру розы, сможет ли новый класс поразить Ваше сердце в дыму выстрелов?`,
        info: `Пол: Муж., Жен.`,
        items: [`Инферно`, `Небо`],
      },
    ]
    roles.forEach((role, i) => {
      $(`.lang-name-${i}`).text(role.name)
      $(`.lang-desc-${i}`).text(role.desc)
      $(`.lang-info-${i}`).text(role.info)
      $(`.lang-item-${i}-n`).text(role.items[0])
      $(`.lang-item-${i}-t`).text(role.items[1])
    })

    $('.rews-item img,.swiper-lang img').each(function () {
      $(this).attr('src', $(this).attr('src').replace(cur, '/ru/'))
    })
    cur = '/ru/'
  } else if (lang == 'pt') {
    $('body').removeClass().addClass('pt')
    $('title').html('Revelação M')
    $("meta[name='description']").attr('content', 'Uma aventura fantástica no mundo da Revelation M')
    $('.slogn img.slg').attr('src', 'https://res.17996cdn.net/rvlm/home/images/pt/slogn.png')
    $('.yy-bt img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/pt/pre-btn.png')
    // $('.uk-navbar-nav li a:first, .navbar-navm li a:first').text('Início')
    // $('.uk-navbar-nav li a:eq(1), .navbar-navm li a:eq(1)').text('Anúncios＆Dicas')
    // $('.uk-navbar-nav li a:eq(2), .navbar-navm li a:eq(2)').text('Aulas')
    // $('.uk-navbar-nav li a:eq(3), .navbar-navm li a:eq(3)').text('Recursos')
    $('.pz-pic img').attr('src', 'https://res.17996cdn.net/rvlm/sharer/imges/PT.png')
    $('.p2-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/pt/p2-title.png?v02')
    $('.p3-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/pt/p3-title.png')
    $('.p4-bg .page-title img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/pt/p4-title.png')
    $('.form-mail').attr('placeholder', 'Digite seu email')
    $('h2.yy-tit1 img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/pt/yy-tit1.png')
    $('.reg_btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/pt/pre-ok.png')
    $('.radio-btn span').text(`Eu li e aceito a `)
    $('.radio-btn a').text('Política de Privacidade')
    $('.policy-text').html(`<p>HAOPLAY Inc. irá coletar as seguintes informações pessoais para os eventos de pré-registro de《Revelation M》. Recusar pode limitar sua participação no evento.</p>
          <p>
          1) Informações pessoais que serão coletadas: endereço de e-mail do usuário<br />
          2) Propósito das informações pessoais coletadas e utilizadas: a data de lançamento do jogo, atividades no-jogo e prêmios de atividades serão enviados para todos os endereços de e-mail registrados.<br />
          3) Nome da empresa de consignação que irá utilizar as informações pessoais: HAOPLAY Inc.<br />
          4)Duração da retenção e utilização das informações pessoais: As informações pessoais serão descartadas em até 365 dias a partir da data de coleta das informações das mesmas.
          </p>`)
    $('#modal-pre-ok .pre-text').text('Parabéns sua pré-inscrição foi feita com sucesso!')
    $('.twitter').attr('href', 'https://twitter.com/Revelation1900')
    $('.youtube').attr('href', 'https://www.youtube.com/@RevelationMInternational')
    const roles = [
      {
        name: `Paladinos`,
        desc: `Um guardião de sangue de ferro leal à sua fé, com uma forte capacidade de combate corpo a corpo e uma forte defesa.`,
        info: `Género: Masculino, Feminino`,
        items: [`Terra`, `Electro`],
      },
      {
        name: `Espadachim`,
        desc: `Mestre das Estrelas Calmas, tem feitiços de longo alcance, causa alto dano e forte controlo.`,
        info: `Género: Masculino, Feminino`,
        items: [`Pyro`, `Cryo`],
      },
      {
        name: `Modelador de Espíritos`,
        desc: `Acompanhado por bestas espirituais, tem feitiços de longo alcance e capacidade de cura para proteger a equipa`,
        info: `Género: Masculino, Feminino`,
        items: [`Espírito`, `Alma`],
      },
      {
        name: `Mestre da lâmina`,
        desc: `O herdeiro do Deus da Guerra que aprendeu artes marciais, mestre de combate corpo a corpo, tem um forte Crit, defesa e controlo`,
        info: `Género: Masculino, Feminino`,
        items: [`DPS`, `Tank`],
      },
      {
        name: `Ocultista`,
        desc: `Monitoriza o equilíbrio de energia entre o mundo das almas e o mundo humano, produzindo feitiços de longo alcance. O ocultista pode atacar e curar.`,
        info: `Género: Masculino, Feminino`,
        items: [`Anjo`, `Demónio`],
      },
      {
        name: `Espadachim`,
        desc: `Vindo do Abismo do Dragão, o Espadachim é um verdadeiro guerreiro de combate corpo a corpo! Ele pode alternar entre a forma Espada e a forma Dragão para ferir ou controlar seus inimigos!`,
        info: `Género: Masculino, Feminino`,
        items: [`Espada`, `Dragão`],
      },
      {
        name: `Gunslinger`,
        desc: `Eles são entusiastas especializados em construção mecânica, sendo uma classe de saída física de longo alcance. Seja repelindo inimigos ou perseguindo, eles podem ter o controle absoluto.`,
        info: `Corpo: Masculino/Feminino`,
        items: [`Flama`, `Celeste`],
      },
    ]
    roles.forEach((role, i) => {
      $(`.lang-name-${i}`).text(role.name)
      $(`.lang-desc-${i}`).text(role.desc)
      $(`.lang-info-${i}`).text(role.info)
      $(`.lang-item-${i}-n`).text(role.items[0])
      $(`.lang-item-${i}-t`).text(role.items[1])
    })

    $('.rews-item img,.swiper-lang img').each(function () {
      $(this).attr('src', $(this).attr('src').replace(cur, '/pt/'))
    })
    cur = '/pt/'
  }
}
