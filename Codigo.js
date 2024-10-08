function exibidos(){
    const cartas = [
      {
        "Nome": "Cavalaria Aeronaútica",
        "Custo": "4/1 enfaitaria",
        "Tipo": "Criatura - Humano Soldado",
        "Poder": "3/4",
        "Quantidade": "2",
        "Habilidade": "Vôo Quando a Cavalaria Aeronauta entrar, coloque um marcador +1/+1 em outro Soldado alvo que você controla."
      },
      {
        "Nome": "Elite do Senhor da Guerra ",
        "Custo": "2/1 enfaitaria",
        "Tipo": "Criatura - Humano Soldado",
        "Poder": "4/4",
        "Quantidade": "2",
        "Habilidade": "Como custo adicional para conjurar esta magia, vire dois artefatos, criaturas e/ou terrenos desvirados que você controla."
      },
      {
        "Nome": "Cachorro Salvador",
        "Custo": "3",
        "Tipo": "Criatura - Cachorro Soldado",
        "Poder": "",
        "Quantidade": "2",
        "Habilidade": "Clarao Quando o Rescue Retriever entrar, coloque um marcador +1/+1 em cada outro Soldado que você controla. Previna todo o dano que seria causado a outros Soldados atacantes que você controla."
      },
      {
        "Nome": "Oficial de Recrutamento",
        "Custo": "",
        "Tipo": "Criatura - Humano Soldado",
        "Poder": "2/1",
        "Quantidade": "2",
        "Habilidade": "Olhe para os quatro cards do topo do seu grimório. Você pode revelar um card de criatura com valor de mana 3 ou menos dentre eles e colocá-lo na sua mão. Coloque o resto no fundo do seu grimório em uma ordem aleatória."
      },
      {
        "Nome": "Capelã de Transporte Aéreo",
        "Custo": "2/1 enfantaria",
        "Tipo": "Criatura - Humano Clerigo",
        "Poder": "1/1",
        "Quantidade": "2",
        "Habilidade": "Vôo Quando Capelão de Transporte Aéreo entrar, triture três cards. Você pode colocar um card de Planície ou um card de criatura com valor de mana 3 ou menos dentre os cards triturados dessa forma na sua mão. Se não o fizer, coloque um marcador +1/+1 em Capelão de Transporte Aéreo. "
      },
      {
        "Nome": "Vanguarda da Falange",
        "Custo": "1/1 enfataria",
        "Tipo": "Criatura - Humano Soldado",
        "Poder": "2/2",
        "Quantidade": "2",
        "Habilidade": "Vigilância Toda vez que um artefato que você controla entra, a Vanguarda da Falange recebe +1/+0 até o final do turno."
      },
      {
        "Nome": "Veterano da Vítoria",
        "Custo": "2/1 enfataria",
        "Tipo": "Criatura - Humano Soldado",
        "Poder": "2/2",
        "Quantidade": "1",
        "Habilidade": "No início do combate, no seu turno, coloque um marcador +1/+1 na criatura alvo que você controla.  Toda vez que outro Soldado que não seja uma ficha que você controla morrer, crie uma ficha de criatura artefato Soldado incolor 1/1."
      },
      {
        "Nome": "Powerblade Do Veterano",
        "Custo": "3",
        "Tipo": "Artefato-Equipamento",
        "Poder": "",
        "Quantidade": "2",
        "Habilidade": "A criatura equipada recebe +2/+0."
      },
      {
        "Nome": "Tropa Reconstruida",
        "Custo": "3",
        "Tipo": "Artefato-Creatura",
        "Poder": "",
        "Quantidade": "2",
        "Habilidade": "Vôo Desenterrar{2} ({2}: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele deixaria o campo de batalha. Desenterre apenas como um feitiço.)"
      },
      {
        "Nome": "Comandante Kayla",
        "Custo": "1/2 enfataria",
        "Tipo": "Feitiço",
        "Poder": "",
        "Quantidade": "2",
        "Habilidade": "Escolha dois —• Crie uma ficha de criatura artefato Construto incolor 2/2. • Coloque um marcador +1/+1 em uma criatura que você controla. Ela ganha golpe duplo até o final do turno. • Procure em sua biblioteca por um card básico das Planícies, revele-o, coloque-o em sua mão e embaralhe-o.• Você ganha 2 pontos de vida e vidência 2."
     },
     {
        "Nome": "Rede Estática",
        "Custo": "3/1 enfataria",
        "Tipo": "Encantamento",
        "Poder": "",
        "Quantidade": "2",
        "Habilidade": "Quando Static Net entrar, exile o permanente alvo que não seja um terreno e que um oponente controla até que Static Net deixe o campo de batalha.Quando Static Net entra, você ganha 2 pontos de vida e cria uma ficha de Powerstone virada."
    },
        {
        "Nome": "Reentrar em Serviço",
        "Custo": "1/1 enfataria",
        "Tipo": "Feitiço",
        "Poder": "",
        "Quantidade": "2",
        "Habilidade": "Retorne o card de artefato ou criatura alvo com valor de mana 3 ou menos do seu cemitério para o campo de batalha. Se uma criatura entrar dessa forma, ela entra com um marcador +1/+1 adicional sobre ela."
      },
      {
        "Nome": "Armas Para baixo",
        "Custo": "1 enfantaria",
        "Tipo": "Feitiço",
        "Poder": "",
        "Quantidade": "2",
        "Habilidade": "Exile a criatura alvo com valor de mana menor ou igual ao número de Planícies que você controla. Seu controlador ganha 3 pontos de vida."
      },
    ]
};
      console.log(JSON.stringify(deck, null, 2));
