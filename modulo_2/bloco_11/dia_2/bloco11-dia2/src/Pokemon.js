import React from 'react';


class Pokemon extends React.Component {
    render () {
        return (
            <div className='poke-flex'>
                <div>
                    <p>{this.props.pokemon.name}</p>
                    <p>{this.props.pokemon.type}</p>
                    <p>Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
                </div>
                <img src={this.props.pokemon.image}/>
            </div>
        );
    }
}

export default Pokemon;