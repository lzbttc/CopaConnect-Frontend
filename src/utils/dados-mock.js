// dados temporários utilizados enquanto o backend não está integrado
export const dadosMock = {
  // lista de partidas utilizada na tela inicial
  partidas: [
    {
      id: 1,
      status: 'AO_VIVO',
      fase: 'Fase de Grupos',
      grupo: 'D',
      minuto: 67,
      data: '2026-06-18',
      horario: '16:00',
      estadio: 'Lusail Stadium',
      selecaoA: { nome: 'Brasil', codigo: 'BR', gols: 2 },
      selecaoB: { nome: 'Alemanha', codigo: 'DE', gols: 1 },
    },
    {
      id: 2,
      status: 'AGENDADA',
      fase: 'Fase de Grupos',
      grupo: 'A',
      minuto: null,
      data: '2026-06-19',
      horario: '13:00',
      estadio: 'MetLife Stadium',
      selecaoA: { nome: 'França', codigo: 'FR', gols: null },
      selecaoB: { nome: 'Argentina', codigo: 'AR', gols: null },
    },
    {
      id: 3,
      status: 'FINALIZADA',
      fase: 'Fase de Grupos',
      grupo: 'B',
      minuto: 90,
      data: '2026-06-17',
      horario: '10:00',
      estadio: 'Rose Bowl',
      selecaoA: { nome: 'Espanha', codigo: 'ES', gols: 3 },
      selecaoB: { nome: 'Portugal', codigo: 'PT', gols: 2 },
    },
  ],
  
  // estrutura preparada para receber os bolões cadastrados pelo usuário
  boloes: [
    {
      id: 1,
      nome: 'Família',
      totalParticipantes: 8,
      posicaoParcial: 1,
      pontuacaoParcial: 24,
      posicaoFinal: 2,
      pontuacaoFinal: 67,
      palpite: { golsSelecaoA: 9, golsSelecaoB: 4 },
      resultado: {
        descricao: 'Acertou o placar',
      },
    },
    {
      id: 2,
      nome: 'Trampo',
      totalParticipantes: 12,
      posicaoParcial: 7,
      pontuacaoParcial: 18,
      posicaoFinal: 5,
      pontuacaoFinal: 30,
      palpite: { golsSelecaoA: 5, golsSelecaoB: 2 },
      resultado: {
        descricao: 'Acertou vencedor',
      },
    },
  ],

  // simula os amigos online até a integração com a API
  amigos: [
    { id: 1, nome: 'Marta G.', online: true },
    { id: 2, nome: 'Matheus N.', online: true },
    { id: 3, nome: 'Tiago C.', online: true },
    { id: 4, nome: 'Carla S.', online: false },
    { id: 5, nome: 'Bruno L.', online: false },
    { id: 6, nome: 'Fernanda R.', online: true },
    { id: 7, nome: 'Ricardo M.', online: false },
  ],
};
