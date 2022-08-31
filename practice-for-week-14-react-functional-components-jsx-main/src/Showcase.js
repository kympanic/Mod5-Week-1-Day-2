import image from './images/bulbasaur.jpg'

function Showcase() {
    const favPokemon = 'Charizard';

    const imgStyle = {
        paddingRight: "50px",
        width: '250px'
    }

    const span1 = {
        backgroundColor: 'red',
        color: 'white'
    }

    const span2 = {
        backgroundColor: '#FFFFFF',
        color: '#FF0000'
    }

    const pokeCharacteristics = {
        type: 'Fire',
        move: 'Solar Power'
    }
    
    return (
      <div>
        <h1>{ favPokemon }'s Showcase Component</h1>
        <h2>{ favPokemon } type is <span style = { span1 } >{ pokeCharacteristics.type }</span> and the move is <span style = { span2 } >{ pokeCharacteristics.move }</span></h2>
        <img alt = 'Charizard' src = { image } style = { imgStyle }></img>
      </div>
    );
}
  
  export default Showcase;