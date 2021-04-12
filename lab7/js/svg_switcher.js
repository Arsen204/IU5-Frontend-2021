export function getSvg(str) {
    switch (str.slice(0, 2)) {
      case '01':
        return '/lab7/img/wi-day-sunny.svg';
      case '02':
        return '/lab7/img/wi-day-cloudy.svg';
      case '03':
        return '/lab7/img/wi-cloud.svg';
      case '04':
        return '/lab7/img/wi-cloudy.svg';
      case '09':
        return '/lab7/img/wi-rain.svg';
      case '10':
        return '/lab7/img/wi-rain-mix.svg';
        break;
      case '11':
        return '/lab7/img/wi-thunderstorm.svg';
        break;
      case '13':
        return '/lab7/img/wi-snow.svg';
        break;
      case '50':
        return '/lab7/img/wi-fog.svg';
        break;
      default:
        return '/lab7/img/wi-day-sunny.svg';
    }
  }