// crea una app donde muestre informacion sobre 3 jugadores de volei

// primero creamos una funcion donde le agregamos todas la props que necesitamos, este caso, un array
// esto es similar a cuando creamos clases, fuera de ella tenemos la clase o metodo constructor
// en este caso, la funcion que se explorta por default

function ProfilePlayer ({player}){
    return (
        <div className="player">
            {/* accedemos a las props (que en realidad es un objeto) mediante . seguido de la prop  */}
            <h2>{player.name}</h2>
            <img src="../react-app/src/componentes/img/michiel.webp" alt="" />
            <ul>
                <li>
                    Position: {player.position}
                </li>
                <li>
                    Nationality: {player.nationality}
                </li>
                <li>
                    Age: {player.age}
                </li>
            </ul>

        {/* creamos otro div para quitar el adorno del list */}
            <div className="height-weight">
                <li>Height: {player.height}</li>
                <li>Weight: {player.weight}</li>
            </div>
        </div>
    );
}

export default function Galery (){
    return(
        <div>
            <h1>BEST U23</h1>
            <ProfilePlayer player={
                {
                    id: 'michiel',
                    name: 'Alessandro Micheletto',
                    position: 'Outside Hitter',
                    age: 22,
                    height: 2.11,
                    weight: 88,
                    nationality: 'Italian'
                }
            } />
        </div>
    );
}





// {
//     name: 'Darlan Souza',
//     position: 'Opposite Hitter',
//     age: 22,
//     height: 1.93,
//     weight: 97,
//     nationality: 'Brazilian'
// },
// {
//     name: 'Ran Takahashi',
//     position: 'Outside Hitter',
//     age: 23,
//     height: 1.88,
//     weight: 84,
//     nationality: 'Japanese'
// }