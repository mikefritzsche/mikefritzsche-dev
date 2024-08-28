import MenuItem from "./MenuItem.jsx";
const Menu =  () => {
  return (
    <ul className="menu">
      <MenuItem item={{ title: 'Home'}}/>
      <MenuItem item={{ title: 'Service' }}/>
      <MenuItem item={{ title: 'About' }}/>
      <MenuItem item={{ title: 'Resume' }}/>
    </ul>
  )
}

export default Menu
