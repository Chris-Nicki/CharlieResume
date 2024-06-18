
const image = <img class="img-fluid" src="https://i.kym-cdn.com/photos/images/original/001/430/367/007.gif"></img>

function Header() {
  return (
    <div id="navBar" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3>Charlie Kelly</h3>
        <div class="m-4">
        {image}
        </div>
      
    </div>
  )
}

export default Header
