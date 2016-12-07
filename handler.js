'use strict'

const MailParser = require("mailparser").MailParser

module.exports.parse = (event, context, callback) => {
  const raw = event.json.mime
  const mime = new Buffer(raw, 'base64').toString()
  const parser = new MailParser()

  parser.on('end', (mail) => {
    const response = {
      from: mail.from,
      to: mail.to,
      bcc: mail.bcc == undefined ? [] : mail.bcc,
      cc: mail.cc == undefined ? [] : mail.cc,
      subject: mail.subject,
      html: mail.html,
      date: mail.date.toJSON()
    }
    callback(null, response)
  })

  parser.write(mime)
  parser.end()
}
