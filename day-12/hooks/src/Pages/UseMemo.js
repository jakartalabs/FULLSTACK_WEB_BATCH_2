import React, {useState, useMemo} from 'react'

export default function UseMemo() {
  const users =[
    {id: 'a', name: 'Julio'},
    {id: 'b', name: 'Rosid'}
  ];
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleSearch = () => {
    setSearch(text);
  }

  const filteredUsers = useMemo(
    () => users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(search.toLowerCase());
    }),
    [search]
  )

  const ListItem = ({ item }) => {
    return <li>{item.name}</li>
  }

  const List = ({ list }) => {
    return (<ul>
      {
        list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))
      }
    </ul>)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleText}/>
      <button type="button" onClick={handleSearch}>Search</button>
      <List list={filteredUsers}/>
    </div>
  )
}
