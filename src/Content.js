const Content =() =>{

    const handleNameChange =() => {
        const names =["vikas", "kumar", "singh"];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
      const handleClick = () => {
          console.log( 'you have clicked it')
      }

      const handleClick2 = (name) => {
        console.log( `${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target)
    }

    return (
        <main>

                <p onDoubleClick={handleClick}>
                    hello { handleNameChange() }
                </p>
                
                <form action="handleClick()">
                    <label>
                    Enter Name
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />

                </form>

                <button onClick = { handleClick}> click it</button>
                <button onClick = {() => handleClick2('vikas')}> click it</button>
                <button onClick = {(e) => handleClick3(e)}> click it</button>

        </main>
    )
}

export default Content