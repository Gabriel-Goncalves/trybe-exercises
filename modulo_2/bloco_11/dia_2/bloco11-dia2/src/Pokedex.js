import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
    render () {
        return (
            <div className='div-pokedex'>
                {pokemons.map(poke => <Pokemon pokemon = {poke}/>)}
            </div>
        );
    }
}

export default Pokedex;