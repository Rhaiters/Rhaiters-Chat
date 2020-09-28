const moment = require('moment-timezone');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().tz('America/Sao_Paulo').format('h:mm a')
  };
}

module.exports = formatMessage;
