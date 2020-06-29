import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';



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
          <form  onSubmit={handleSubmit}>
          <TextField
              onChange={event => setEmail(event.target.value)}
                id="filled-basic" label="Digite o seu E-mail" variant="filled"
                fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                    endAdornment:<Button type="submit" variant="contained" color="primary">INSCREVER</Button>

                  }}
            />
                 <br /><Checkbox
                    required={true}
                    id="group_11610_1"
                    name="group[11610][1]"
                    onChange={event => setCheckBoxManual("2")}
                    color="primary"
                    value="2"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  /> Ao marcar este checkbox você indica autorizar a inscrição do seu e-mail e estar ciente da nossa política de Cookies.
              <div className="uk-margin">
              <p>{message}</p>

              </div>
          </form>

    </div>
  )
}

export default SignupForm
