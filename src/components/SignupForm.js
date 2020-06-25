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

      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Digite o seu E-mail"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={event => setEmail(event.target.value)}
        />
        <div className={classes.heroButtons}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.submit}
        >
          ENVIAR
        </Button> <LockIcon />Nós nunca enviamos SPAM
            <div className={classNames("text-lg", { "opacity-0": !message })}>
              <span className="uk-label uk-text-medium">{message}</span>
            </div>
        </div>

      </form>




    </div>
  )
}

export default SignupForm
