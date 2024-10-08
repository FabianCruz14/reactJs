function Square ({value}){
  return <button className="square">{value}</button>;
}


export default function Board() {
  // firstly, we create a component that call square who display a one of all squares in the board
  return (
    <> 
    {/* we using this sign to create a fragment in the board */}
    {/* we create a div in who display a one row of the board, nextly create 2 more */}

    {/* create a first row */}
    <div className="board-row">
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
    </div>

    {/* create a second row */}
    <div className="board-row">
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
    </div>

    {/* create a third row */}
    <div className="board-row">
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
    </div>

    </>
  );
}
