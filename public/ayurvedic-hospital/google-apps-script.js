/**
 * SAMWARTHIKA AYURVEDIC HOSPITAL & RESEARCH CENTRE
 * Webhook & Sheet Logger - Automatic Email Delivery
 * (To & CC emails are received automatically from the website form)
 */

function doPost(e) {
  try {
    var data = {};

    // 1. Parse incoming data (JSON or Form URL encoded)
    if (e && e.postData && e.postData.contents) {
      var raw = e.postData.contents.trim();
      if (raw.charAt(0) === '{' && raw.charAt(raw.length - 1) === '}') {
        try {
          data = JSON.parse(raw);
        } catch (err) {
          Logger.log("JSON Parse Error: " + err);
        }
      }
    }

    if (Object.keys(data).length === 0 && e && e.parameter) {
      data = e.parameter;
    }

    // 2. Extract fields
    var name        = String(data.name || data.fullName || "Guest").trim();
    var phone       = String(data.phone || "").trim();
    var countryCode = String(data.countryCode || "+91").trim();
    var fullPhone   = String(data.full_phone || (countryCode + " " + phone)).trim();
    var email       = String(data.email || "").trim();
    var healthGoal  = String(data.healthGoal || data.service || "Ayurvedic Treatment").trim();
    var message     = String(data.message || "No notes provided").trim();
    var refId       = String(data.refId || ("SAM-" + Math.floor(10000 + Math.random() * 90000))).trim();
    var toEmail     = String(data.to_email || data.to || "").trim();
    var ccEmails    = String(data.cc_email || data.cc || "").trim();

    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, hh:mm a");

    // 3. Log to Google Sheet
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName("Leads") || ss.getActiveSheet();

      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Date & Time (IST)",
          "Reference ID",
          "Patient Name",
          "Contact Number",
          "Treatment Required",
          "Email Address",
          "Medical Concern"
        ]);
        sheet.getRange(1, 1, 1, 7)
          .setFontWeight("bold")
          .setBackground("#1b2f11")
          .setFontColor("#f4d27a");
      }

      sheet.appendRow([
        timestamp,
        refId,
        name,
        fullPhone,
        healthGoal,
        email || "Not Provided",
        message
      ]);
    } catch (sheetErr) {
      Logger.log("Sheet Error: " + sheetErr);
    }

    // 4. Send Email Alert
    if (toEmail) {
      var cleanDigits = fullPhone.replace(/[^0-9]/g, '');
      var waDigits = cleanDigits.indexOf("91") === 0 ? cleanDigits : ("91" + cleanDigits);

      var emailSubject = "NEW Consultation Request | Samwarthika | " + name + " (" + refId + ")";

      var emailHtml = ''
        + '<div style="font-family: Arial, sans-serif; background-color: #f7f6f2; padding: 20px;">'
        + '  <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e0d8;">'
        + '    <div style="background-color: #1b2f11; color: #ffffff; padding: 22px 20px; text-align: center; border-bottom: 3px solid #c69214;">'
        + '      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #f4d27a; font-weight: bold; margin-bottom: 4px;">New Patient Inquiry</div>'
        + '      <h2 style="margin: 0; font-size: 18px; color: #ffffff;">Samwarthika Ayurvedic Hospital</h2>'
        + '      <p style="margin: 4px 0 0; font-size: 12px; color: #d0dec3;">Kerala, India | Helpline: +91 73566 22201</p>'
        + '    </div>'
        + '    <div style="background-color: #f1f7eb; padding: 8px 18px; font-size: 12px; color: #1b2f11; border-bottom: 1px solid #e1eed4;">'
        + '      <strong>Ref:</strong> ' + refId + ' &nbsp;|&nbsp; <strong>Date:</strong> ' + timestamp + ' (IST)'
        + '    </div>'
        + '    <div style="padding: 20px;">'
        + '      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">'
        + '        <tr><td style="padding: 8px 0; color: #555; width: 35%; font-weight: bold;">Patient Name:</td><td style="padding: 8px 0; color: #111; font-weight: bold;">' + name + '</td></tr>'
        + '        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Contact Phone:</td><td style="padding: 8px 0; color: #1b2f11; font-weight: bold;"><a href="tel:' + cleanDigits + '" style="color: #1b2f11; text-decoration: none;">' + fullPhone + '</a></td></tr>'
        + '        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Treatment:</td><td style="padding: 8px 0; color: #996e08; font-weight: bold;">' + healthGoal + '</td></tr>'
        + '        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #333;">' + (email || "Not Provided") + '</td></tr>'
        + '        <tr><td style="padding: 8px 0; color: #555; font-weight: bold; vertical-align: top;">Medical Notes:</td><td style="padding: 8px 0; color: #333; line-height: 1.5;">' + message + '</td></tr>'
        + '      </table>'
        + '      <div style="margin-top: 20px; text-align: center;">'
        + '        <a href="tel:' + cleanDigits + '" style="background-color: #1b2f11; color: #ffffff; padding: 9px 18px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: bold; display: inline-block; margin-right: 8px;">Call Patient</a>'
        + '        <a href="https://wa.me/' + waDigits + '" style="background-color: #128C7E; color: #ffffff; padding: 9px 18px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: bold; display: inline-block;">WhatsApp Patient</a>'
        + '      </div>'
        + '    </div>'
        + '    <div style="background-color: #faf9f6; padding: 10px; text-align: center; border-top: 1px solid #e5e0d8; font-size: 11px; color: #777;">'
        + '      Samwarthika Ayurvedic Hospital Lead Notification System'
        + '    </div>'
        + '  </div>'
        + '</div>';

      var mailOptions = {
        to: toEmail,
        subject: emailSubject,
        htmlBody: emailHtml,
        name: "Samwarthika Ayurvedic Hospital"
      };

      if (email && email.indexOf("@") !== -1) {
        mailOptions.replyTo = email;
      }
      if (ccEmails && ccEmails.indexOf("@") !== -1) {
        mailOptions.cc = ccEmails;
      }

      try {
        MailApp.sendEmail(mailOptions);
      } catch (e1) {
        try {
          var opts = { htmlBody: emailHtml, name: "Samwarthika Ayurvedic Hospital" };
          if (email && email.indexOf("@") !== -1) opts.replyTo = email;
          if (ccEmails && ccEmails.indexOf("@") !== -1) opts.cc = ccEmails;
          GmailApp.sendEmail(toEmail, emailSubject, "", opts);
        } catch (e2) {
          Logger.log("Email Error: " + e2);
        }
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", refId: refId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ready" }))
    .setMimeType(ContentService.MimeType.JSON);
}
