import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, FlatList, Alert} from 'react-native';

import {Button} from '../../components/Button';
import {SkillCard, ISkill} from '../../components/SkillCard';

import {styles} from './styles';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<ISkill[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const nameSkillExists = mySkills.find(skill => skill.name === newSkill);

    if (nameSkillExists) {
      Alert.alert(
        'Skill já cadastrada',
        'Você não pode cadastrar uma Skill com o mesmo nome',
      );
    } else {
      const data = {
        id: new Date().getTime(),
        name: newSkill,
      };
      setMySkills([...mySkills, data]);
      setNewSkill('');
    }
  }

  function handleRemoveSkill(id: number) {
    /*   const mySkillsUpdate = mySkills.filter(skill => skill.id !== id);
    setMySkills(mySkillsUpdate); */
    // ou fazer a mesma coisa em uma linha como abaixo
    Alert.alert('Remover skill', 'Tem certeza que deseja remover essa skill?', [
      {
        text: 'Sim',
        onPress: () => {
          setMySkills(oldState => oldState.filter(skill => skill.id !== id));
        },
      },
      {
        text: 'não',
        onPress: () => {
          return;
        },
      },
    ]);
  }

  function handleEditSkill(skillEdit: ISkill) {
    const skillsCopied = mySkills.map(skill => ({...skill}));
    const indexFounded = skillsCopied.findIndex(
      skill => skill.id === skillEdit.id,
    );
    if (indexFounded !== -1) {
      skillsCopied[indexFounded].name = skillEdit.name;
      setMySkills(skillsCopied);
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    if (currentHour < 12) {
      setGreeting('Bom dia,');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde,');
    } else {
      setGreeting('Boa noite,');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{greeting} Fábio.</Text>

      <Text style={[styles.greetings, {marginVertical: 20}]}>
        Seja bem vindo!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="nova skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button title="Adicionar" onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 40}]}>
        {/* {newSkill} */}
        Minhas Skills
      </Text>

      {/*   mySkills.map((skill,index) =>(
              <SkillCard key ={index} skill={skill}/>
            )) */}
      <FlatList
        data={mySkills}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SkillCard
            skill={item}
            removeSkill={handleRemoveSkill}
            editSkill={handleEditSkill}
          />
        )}
      />
    </View>
  );
};
