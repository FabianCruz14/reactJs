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
];
                                                                 
// despues exportamos la funcion por defecto en la cual usaremos 
// la funcion map para poder acceder a los jugadores dinamicamente
export default function InfoPlayer() {
    return (
        <div className="players">

            <div className="player">
                <div className="pic">
                    <img src="../public/michiel.webp" alt="Alessandro Michieletto" />
                </div>
                    <h2>{players[0].name}</h2>
                    <li>Position: {players[0].position}</li>
                    <li>Age: {players[0].age}</li>
                    <li>Nationality: {players[0].nationality}</li>   

                    <div className="height-weight">
                        <li>Height: {players[0].height} mts</li>
                        <li>Weight: {players[0].weight} kg</li>
                    </div>
            </div>

            <div className="player">
                <div className="pic">
                    <img src="../public/darlan.webp" alt="Darlan Souza" />
                </div>
                    <h2>{players[1].name}</h2>
                    <li>Position: {players[1].position}</li>
                    <li>Age: {players[1].age}</li>
                    <li>Nationality: {players[1].nationality}</li>   

                    <div className="height-weight">
                        <li>Height: {players[1].height} mts</li>
                        <li>Weight: {players[1].weight} kg</li>
                    </div>
            </div>

            <div className="player">
                <div className="pic">
                    <img src="../public/ran.jpg" alt="Ran Takahashi" />
                </div>
                    <h2>{players[2].name}</h2>
                    <li>Position: {players[2].position}</li>
                    <li>Age: {players[2].age}</li>
                    <li>Nationality: {players[2].nationality}</li>   

                    <div className="height-weight">
                        <li>Height: {players[2].height} mts</li>
                        <li>Weight: {players[2].weight} kg</li>
                    </div>
            </div>
        </div>
    );
}