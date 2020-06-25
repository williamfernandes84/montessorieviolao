import classNames from "classnames"
import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"

const SignupForm = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage("Enviando...")
    const response = await addToMailchimp(email)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("Você já está na minha lista VIP!")
      } else {
        setMessage("Ops! Algo deu errado.")
      }
      setDisabled(false)
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
                           <a class="uk-form-icon" href="#" uk-icon="icon: mail"></a>
                           <input class="uk-input uk-form-width-large uk-form-large "
                            aria-label="Email address"
                            onChange={event => setEmail(event.target.value)}
                            placeholder="Digite seu e-mail"
                            required
                            type="email"
                            />
                  </div>
                  <button class="uk-button uk-button-large uk-margin">Inscrever</button>

              <div class="uk-margin">
              <span uk-icon="lock"></span> <span> Nós nunca enviamos SPAM e você pode desinscrever a qualquer momento</span>
              </div>
          </form>

          <div className={classNames("text-lg", { "opacity-0": !message })}>
            <span className="uk-label uk-text-medium">{message}</span>
          </div>
    </div>
  )
}

export default SignupForm
