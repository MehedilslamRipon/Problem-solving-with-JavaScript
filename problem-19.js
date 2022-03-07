// Easy search of parameters from a URL objects.

const url = new URL(window.location.href);
const parameterValue = url.searchParams.get('pramaName');
console.log(parameterValue);
