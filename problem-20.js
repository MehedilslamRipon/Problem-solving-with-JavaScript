// Use navigator.UserAgent to detect the device running the app.

const detectDeviceType = () =>
   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
   )
      ? 'mobile'
      : 'desktop';
console.log(detectDeviceType);
