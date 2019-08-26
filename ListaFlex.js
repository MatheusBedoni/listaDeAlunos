import React from 'react'
import { ScrollView , View , FlatList , Text   } from 'react-native'

const alunos = [
    { id: 1, nome: 'Joao',desc:'Um bom aluno', nota: 7.9},
    {id: 2, nome: 'Ana',desc:'Um bom aluno', nota: 9.1},
    {id: 3, nome: 'Bia',desc:'Um bom aluno', nota: 5.4},
    {id: 4, nome: 'Claudia',desc:'Um bom aluno', nota: 7.6},
    {id: 5, nome: 'Roberto',desc:'Um bom aluno', nota:6.8},
    {id: 6, nome: 'Rafael',desc:'Um bom aluno', nota: 9.9},
    {id: 7, nome : 'Guilherme',desc:'Um bom aluno', nota:8.8},
    {id:9 ,nome: 'Tobias',desc:'Um bom aluno', nota:8.8},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    //flex
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-between',
   // justifyContent: 'space-around',
   // alignItems:'flex-start'
}

export const Aluno = props =>
<View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text>Desc: {props.desc}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
</View>

export default props => {
    const renderItems = ({item}) => {
        return <Aluno {...item} />
    }
    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItems}
            keyExtractor={(_,index) => index.toString()}>
            </FlatList>
            </ScrollView>
    )
}