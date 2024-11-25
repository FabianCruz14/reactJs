// crea una app donde muestre informacion sobre 3 jugadores de volei

// creamos un arreglo de objetos, donde cada objeto sera un jugador
// al que le asignaremos nombre, posicion, edad, altura, peso y nacionalidad
const players = [
    {
        name: 'Alessandro Micheletto',
        position: 'Outside Hitter',
        age: 22,
        height: 2.11,
        weight: 88,
        nationality: 'Italian'
    },
    {
        name: 'Darlan Souza',
        position: 'Opposite Hitter',
        age: 22,
        height: 1.93,
        weight: 97,
        nationality: 'Brazilian'
    },
    {
        name: 'Ran Takahashi',
        position: 'Outside Hitter',
        age: 23,
        height: 1.88,
        weight: 84,
        nationality: 'Japanese'
    }
]


// despues exportamos la funcion por defecto en la cual usaremos 
// la funcion map para poder acceder a los jugadores dinamicamente
export default function InfoPlayer() {
    return (
        <div>
            <li>Name: {players.[1]}</li>
            <li>Position: {players.position}</li>
            <li>Age: 30 years </li>
            <li>Height: 1.96m</li>
            <li>Weight: 96kg</li>
        </div>
    )
}