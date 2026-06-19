import axios from 'axios'
import type { TrackingResponse } from '../types/tracking'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function getTracking(code: string) {
  const response = await api.get<TrackingResponse>('/get_order_info', {
    params: {
      spx_tn: code,
      language_code: 'pt',
    },
  })

  return response.data
}

export const translate = (type: string) => {
    switch (type.toLowerCase()) {
      case 'delivered':
        return 'Entregue'
      case 'in transit':
        return 'Em trânsito'
      case 'out for delivery':
        return 'Saiu para entrega'
      case 'in transit update':
        return 'Em processamento no centro de distribuição'
      case 'enter domestic sorting center':
        return 'Entrou no centro de triagem doméstica'  
      case 'unsuccessful pickup attempt':
        return 'Tentativa de coleta sem sucesso'  
      case 'pickup from domestic seller':
        return 'Retirada no endereço do vendedor'
      case 'preparing to ship':
        return 'Preparando para envio'
      case 'courier assigned':
        return 'Transportador localizado'
      case 'slstn created':
        return 'Solicitação criada'
      case 'manifested':
        return 'Disponível para coleta'
      case 'domestic line haul end':
        return 'Chegou ao centro de triagem doméstica'  
      case 'left domestic first mile hub':
        return 'Saiu do primeiro centro de triagem'
      case 'loaded to truck in first mile hub':
        return 'Carregado para transporte no primeiro centro de triagem'
      case 'enter domestic first mile hub':
        return 'Entrou no primeiro centro de triagem'
      case 'packed in domestic sorting centre':
        return 'Empacotado no centro de triagem doméstica'  
      case 'loaded to truck in sorting centre':
        return 'Carregado para transporte no centro de triagem doméstica'
      case 'left domestic sorting center':
        return 'Saiu do centro de triagem doméstica'
      case 'slstn has been created, sending request to logistic partners':
        return 'Solicitação criada, enviando para um parceiro logístico'        
      case 'system reminder: not in use, no need edit yet.':
        return ''  
      default:
        return type
    }
}
