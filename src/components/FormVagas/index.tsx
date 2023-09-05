import React, { FormEvent, useState, ChangeEvent } from 'react'
import { Form, Button, Input } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <>
      <Form onSubmit={aoEnviarForm}>
        <Input
          placeholder="Front-end, fullstack, node, design"
          onChange={handleInputChange}
          type="search"
        />
        <Button type="submit">Pesquisar</Button>
      </Form>
    </>
  )
}

export default FormVagas
