module.exports =  {
  subject: 'Verify your Fredo email address',
  content: (code, link) => {
  return `<html>
  <head>
    <title>Verify your Fredo email address</title>
  </head>

  <body>
    <h1>Verify your email address</h1>
    <p>
      Please enter the following verification code in fredo bot:
      <br />
      ${code}
    </p>
    <div>
      <a
        class="button"
        href="${link}"
        style="
          background-color: #008cba; /* blue */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        "
      >
        Verify Email
      </a>
    </div>
  </body>
</html>
`
}}
