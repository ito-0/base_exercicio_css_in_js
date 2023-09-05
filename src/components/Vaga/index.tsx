import { Vaga, VagaTitulo, VagaLink } from './styles'

type VagaProps = {
  vaga: {
    titulo: string
    localizacao: string
    nivel: string
    modalidade: string
    salarioMin: number
    salarioMax: number
    requisitos: string[]
  }
}

const VagaComponent = ({ vaga }: VagaProps) => (
  <Vaga>
    <VagaTitulo>{vaga.titulo}</VagaTitulo>
    <p>Localização: {vaga.localizacao}</p>
    <p>Nível: {vaga.nivel}</p>
    <p>Modalidade: {vaga.modalidade}</p>
    <p>Salário Mínimo: R${vaga.salarioMin}</p>
    <p>Salário Máximo: R${vaga.salarioMax}</p>
    <p>Requisitos: {vaga.requisitos.join(', ')}</p>
    <VagaLink href="#">Link da Vaga</VagaLink>
  </Vaga>
)

export default VagaComponent
