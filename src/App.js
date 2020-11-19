import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import FamylyRow from './famylyRow';

function App() {
  const [families, setFamilies] = useState([])
  const [members, setMembers] = useState([])

  useEffect(() => {
    async function callApi() {
      const {data: familiesData} = await axios.get('https://my-json-server.typicode.com/ajd01/demo/families')
      const {data: membersData} = await axios.get('https://my-json-server.typicode.com/ajd01/demo/memebers')
      
      setMembers(membersData)
      setFamilies(familiesData)
    }
    callApi()
  }, [])

  function getFAmilyRows(){
    return families.map( family => {
      let familyMembers = family.memebersIds
      familyMembers = members.filter(({id}) => familyMembers.includes(id))

      return (
        <tr key={family.id}>
          <FamylyRow family={family} members={familyMembers}/>
        </tr>
      )
    })
  }
  
  return (
    <div className="App">
      <h1>Table exercise</h1>
      <table>
        <tbody>
          {getFAmilyRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
