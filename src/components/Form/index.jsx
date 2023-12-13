import React, { useState } from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [agencia, setAgencia] = useState('');

  function sendEmail(e){
    e.preventDefault();

    
    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email
    }

    emailjs.send("service_9rsq7em", "template_x24pj3g", templateParams, "ahymwD3VgOF0jiRZW")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setNome('')
      setEmail('')
      setAgencia('')
      setMensagem('')
    }, (erro) => {
      console.log("ERRO", erro)
    })
  }

  return (
    <section className='form-area'>
      <h1>ENTRE EM CONTATO COMIGO</h1>

      <form className='form'  id='contact' onSubmit={sendEmail}>
        <label htmlFor="form-nome">Seu nome *</label>
        <input
          name='form-nome'
          className='input'
          type="text" 
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          required
         />

        <label htmlFor="form-email">E-mail *</label>
        <input
          name='form-email'
          className='input'
          type="text" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
         />

        <label htmlFor="form-msg">Mensagem *</label>
        <textarea
          name='form-msg'
          className='textarea'
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
          required  
         />

        <button className='form-button' type="submit">Enviar mensagem</button>

      </form>
    </section>
  )
}
