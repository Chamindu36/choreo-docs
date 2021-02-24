(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{503:function(e,t,a){"use strict";a.r(t);var o=a(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"apis-connectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apis-connectors"}},[e._v("#")]),e._v(" APIs / Connectors")]),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Introduction"}},[e._v("Introduction")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Generic-Protocol-based-APIs"}},[e._v("Generic Protocol based APIs")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Application-specific-APIs"}},[e._v("Application Specific APIs")])])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Choreo lets you connect to external services through your Choreo application. This allows you to perform integrations using Choreo.")]),e._v(" "),a("p",[e._v("Once you create an application and select a trigger, you will be presented with the Choreo application develop view. In this view, you may select an external API to connect to.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/image2.png",alt:"Step 1"}})]),e._v(" "),a("p",[e._v("There are two basic types of APIs.")]),e._v(" "),a("p",[e._v("1- Generic protocol based  APIs")]),e._v(" "),a("p",[e._v("2- Application specific APIs")]),e._v(" "),a("h2",{attrs:{id:"generic-protocol-based-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-protocol-based-apis"}},[e._v("#")]),e._v(" Generic Protocol based APIs")]),e._v(" "),a("p",[e._v("These are APIs based on generic protocols that you can configure to connect to an external service. These include")]),e._v(" "),a("ul",[a("li",[e._v("HTTP")]),e._v(" "),a("li",[e._v("SMTP")]),e._v(" "),a("li",[e._v("POP3")]),e._v(" "),a("li",[e._v("IMAP")])]),e._v(" "),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),a("p",[e._v("The HTTP API lets you communicate with an external endpoint using the HTTP protocol. The HTTP connection wizard will guide you through the process of connecting to an external endpoint by giving the URL, selecting the operation, setting header(s) to the request which is sent to the external endpoint, and handling the response received from the external call.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/image1.png",alt:"HTTP1"}})]),e._v(" "),a("h3",{attrs:{id:"smtp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp"}},[e._v("#")]),e._v(" SMTP")]),e._v(" "),a("p",[e._v("The SMTP API lets you send emails using the SMTP protocol. The wizard will guide you through defining the SMTP server details, such as the host, username, and password, and finally the details of the email, such as the sender, receiver(s), subject, and body.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/smtp1.png",alt:"SMTP1"}})]),e._v(" "),a("h3",{attrs:{id:"pop3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pop3"}},[e._v("#")]),e._v(" POP3")]),e._v(" "),a("p",[e._v("The POP3 API allows you to receive emails. The wizard is similar to the SMTP use case, where you can create a client with the host, username, password. This API will return the first unseen email from the inbox specified with the connection parameters.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/pop31.png",alt:"POP31"}})]),e._v(" "),a("h3",{attrs:{id:"imap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imap"}},[e._v("#")]),e._v(" IMAP")]),e._v(" "),a("p",[e._v("Similar to the POP3, IMAP API allows you to receive emails. The wizard is similar to the POP3 case where you can create a client to receive an email from the specified inbox.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/imap1.png",alt:"IMAP1"}})]),e._v(" "),a("h2",{attrs:{id:"application-specific-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-specific-apis"}},[e._v("#")]),e._v(" Application Specific APIs")]),e._v(" "),a("p",[e._v("These APIs can be used to connect to a given external application. Hence they contain only application based configurations.")]),e._v(" "),a("ul",[a("li",[e._v("GitHub")]),e._v(" "),a("li",[e._v("Gmail")]),e._v(" "),a("li",[e._v("Google Calendar")]),e._v(" "),a("li",[e._v("Google Sheets")]),e._v(" "),a("li",[e._v("Twilio")])]),e._v(" "),a("h3",{attrs:{id:"github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),a("p",[e._v("GitHub API allows you to do integrate your Choreo application with workflows involving GitHub organizations and repositories. The GitHub API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the information required.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/github2.png",alt:"GITHUB2"}})]),e._v(" "),a("h3",{attrs:{id:"gmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gmail"}},[e._v("#")]),e._v(" Gmail")]),e._v(" "),a("p",[e._v("Gmail API allows you to do integrate your Choreo application with workflows involving creating, modifying, and sending emails. Similar to GitHub, the Gmail API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the additional information required.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/gmail2.png",alt:"GMAIL2"}})]),e._v(" "),a("h3",{attrs:{id:"google-calendar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-calendar"}},[e._v("#")]),e._v(" Google Calendar")]),e._v(" "),a("p",[e._v("Google Calendar API allows you to do integrate your Choreo application with workflows involving listing, creating, and deleting calendar events. Similar to GitHub, the Google Calendar API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the additional information required.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/gcalendar2.png",alt:"GCALENDAR2"}})]),e._v(" "),a("h3",{attrs:{id:"google-sheets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets"}},[e._v("#")]),e._v(" Google Sheets")]),e._v(" "),a("p",[e._v("Google Sheets API allows you to do integrate your Choreo application with workflows involving listing and creating spreadsheets. Similar to GitHub, the Google Sheets API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the additional information required.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/gsheets2.png",alt:"GSHEET2"}})]),e._v(" "),a("h3",{attrs:{id:"twilio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#twilio"}},[e._v("#")]),e._v(" Twilio")]),e._v(" "),a("p",[e._v("Twilio API allows you to integrate your Choreo application with Twilio (https://www.twilio.com/). Twilio allows you to perform operations like sending messages, voice calls, WhatsApp messages, etc. through the Twilio REST API. To use the Twilio API, you need to provide configuration parameters Account SId, Auth Token, and XAuthy Key, which should be obtained from your Twilio account. The wizard will take you through this, as well as selecting the operation.")]),e._v(" "),a("p",[a("img",{attrs:{src:"images/connector/image3.png",alt:"TWILIO1"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);