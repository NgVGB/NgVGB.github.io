$(document).ready(function () {
  var isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent)
  var isAndroid = /Android/i.test(navigator.userAgent)
  var videoSrcpc = 'https://res.17996cdn.net/rvlm/images/bgvod.mp4'

  if (isIOS) {
    $('.gg-bt,.cz-bt.apk-bt').hide()
  } else if (isAndroid) {
    $('.ios-bt').hide()
  }

  // background video
  if (isIOS || isAndroid) {
    $('.title-background,.yy-bt,.role-video').remove()
  } else {
    document.getElementById('video').src = videoSrcpc
    document.getElementById('video').play()
  }

  // 切换语言
  var args = getArgs()
  var fuid = getFUID(args)
  var l = getCookie('mylang') || args['l'] || lang
  var country = l
  if (lang !== l) {
    lang = l
    foo()
  }

  $('#lanSel li a').click(function () {
    lang = $(this).attr('data-lang') // 获取点击项上的data-lang属性值
    foo()
    addCookie('mylang', lang, 24 * 365)
    $('.waring').hide()
  })
  console.log(lang)

  // 预约

  // 点击输入框提示消失
  $('#form-s-email').focus(function () {
    $('.waring').hide()
  })

  $('.ios-bt').click(function () {
    fbq('track', 'CompleteRegistration')
    gtag_report_conversion()
    Reserve.appStore()
    UIkit.modal('#modal-pre-ok').show()
  })
  $('.gg-bt').click(function () {
    fbq('track', 'CompleteRegistration')
    gtag_report_conversion()
    Reserve.googleplay()
    UIkit.modal('#modal-pre-ok').show()
  })

  //top audio
  let play = 0,
    pause = 0,
    aPlay = () => {
      $('.music-btn').removeClass('paused')
      $('.music-btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/play-on.gif')
      $('#my-audio').get(0).play()
    },
    aPause = () => {
      $('.music-btn').addClass('paused')
      $('.music-btn img').attr('src', 'https://res.17996cdn.net/rvlm/home/images/play-off.gif')
      $('#my-audio').get(0).pause()
    }
  $('.music-btn').on('click', () => {
    if (play == 0) {
      aPlay()
      play = 1
    } else {
      aPause()
      play = 0
      pause = 1
    }
  })

  // $('body').on('click', () => {
  //   if (pause == 1) return
  //   aPlay()
  //   play = 1
  // })

  // if (isIOS || isAndroid) {
  //   $('body').on('touchstart', () => {
  //     if (pause == 1) return
  //     aPlay()
  //     play = 1
  //   })
  // }

  // youtube
  $('.vod-play').on('click', function () {
    $('#vodif').attr('src', $(this).attr('data-href'))
    aPause()
    play = 0
    pause = 1
  })

  $('#modal-youtube,.btn-play-close').on('click', function () {
    $('#vodif').attr('src', '')
    // if (pause == 1) return
    // aPlay()
    // play = 1
  })
})
