let defuCity = '巴黎'
try {
  if (localStorage.city) {
    defuCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defuCity
}
