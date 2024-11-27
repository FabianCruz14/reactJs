// crea una app donde muestre informacion sobre 3 jugadores de volei

// creamos un arreglo de objetos, donde cada objeto sera un jugador
// al que le asignaremos nombre, posicion, edad, altura, peso y nacionalidad


// primero creamos una funcion donde le agregamos todas la props que necesitamos
// esto es similar a cuando creamos clases y fuera de ella tenemos la clase o metodo constructor
// en este caso, la funcion que se explorta por default


function ProfilePlayer ({player}){
    return (
        <div className="player">
            <h2>{player.name}</h2>
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