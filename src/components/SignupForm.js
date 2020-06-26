import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import Checkbox from '@material-ui/core/Checkbox';


const SignupForm = () => {
  const [email, setEmail] = useState()
  const [gdpr_manual, setCheckBoxManual] = useState()
  const [message, setMessage] = useState()

  const handleSubmit = async event => {
    event.preventDefault()
    setMessage("Enviando..." + email + " and " + gdpr_manual)
    const response = await addToMailchimp(email,{
      'group[11610][1]': gdpr_manual
    })
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("Você já está na minha lista VIP!")
      } else {
        setMessage("Ops! Algo deu errado.")
      }
    } else {
      setMessage(
        "Enviado."
      )
      window.location.href = "/confirmacao/Email";
    }
  }

  return (
    <div>
          <form className="mt-8 sm:flex" onSubmit={handleSubmit}>
                <div class="uk-inline">
                           <p class="uk-form-icon" uk-icon="icon: mail"></p>
                           <input class="uk-input uk-form-width-large uk-form-large "
                            aria-label="Email address"
                            onChange={event => setEmail(event.target.value)}
                            placeholder="Digite seu e-mail"
                            required
                            type="email"
                            />
                  </div>
                  <button class="uk-button uk-button-large uk-margin">
                  Inscrever</button> <span uk-icon="lock"></span> <span> Seguro e sem SPAM.</span>
                 <br /><Checkbox
                    required="true"
                    id="group_11610_1"
                    name="group[11610][1]"
                    onChange={event => setCheckBoxManual("2")}
                    color="primary"
                    value="2"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  /> Ao marcar este checkbox você indica autorizar a inscrição do seu e-mail e estar ciente da nossa política de Cookies.
              <div class="uk-margin">
              <p>{message}</p>

              </div>
          </form>

    </div>
  )
}

export default SignupForm
