(function() {
  (function(doc, script) {
    return window.loadScript = function(src, id, callback) {
      var s;
      if (doc.getElementById(id)) {
        return;
      }
      s = doc.createElement("script");
      s.type = "text/" + (src.type || "javascript");
      s.src = src.src || src;
      s.async = false;
      s.id = id;
      s.onreadystatechange = s.onload = function() {
        var state;
        state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
          callback.done = true;
          return callback();
        }
      };
      return (doc.body || head).appendChild(s);
    };
  })(document, "script");

  window.delay = function(ms, func) {
    return setTimeout(func, ms);
  };

  window.interval = function(ms, func) {
    return setInterval(func, ms);
  };

  window.debounce = function(func, wait, immediate) {
    var timeout;
    timeout = void 0;
    return function() {
      var args, callNow, context, later;
      context = this;
      args = arguments;
      later = function() {
        timeout = null;
        if (!immediate) {
          return func.apply(context, args);
        }
      };
      callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        return func.apply(context, args);
      }
    };
  };

  window.animatedScrollTo = function(options, callback) {
    if (callback == null) {
      callback = function() {};
    }
    return $("body").animate({
      scrollTop: options.top
    }, options.speed || 500, "swing", function() {
      return callback();
    });
  };

}).call(this);
(function() {
  $(function() {
    $('#modal-1').on('change', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    });
    $('.modal-fade-screen, .modal-close').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });
    $('.modal-inner').on('click', function(e) {
      e.stopPropagation();
    });
  });

}).call(this);
(function() {
  $(function() {
    return console.log("Hello World!");
  });

}).call(this);
