// Easy search of parameters from a URL objects.

const detectDeviceType = () =>
   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
   )
      ? 'Mobile'
      : /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
           navigator.userAgent
        )
      ? 'Tablet'
      : 'Desktop';
console.log(detectDeviceType());
