(function() {
  var Platform = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Huawei: function() {
      return navigator.userAgent.match(/Huawei/i);
    }
  };
  var platformClassName = null;
  
  if (Platform.iOS()) {
    platformClassName = 'ios';
  }
  if (Platform.Android()) {
    platformClassName = 'android';
  }
  if (Platform.Huawei()) {
    platformClassName = 'huawei';
  }
  if (platformClassName) {
    var html = document.getElementsByTagName('body')[0];
    html.classList.add(platformClassName);
  }
})();
