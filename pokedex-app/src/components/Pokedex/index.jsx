import React from 'react'
import Pokecard from '../Pokecard'

function Pokedex() {
  return (
    <div className="pokedex-container">
        <ul className="pokedex">
            <Pokecard />
            {/* {props.todos.map((todo, idx) => {
                return <Pokecard todo={todo} key={idx} deleteFn={deleteTodo} completeFn={completeTodo}/>
            })} */}
        </ul>
    </div>
  )
}

export default Pokedex