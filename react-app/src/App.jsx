function Square (){
  return <button className="square">1</button>;
}


export default function Board() {
  // firstly, we create a component that call square who display a one of all squares in the board
  return (
    <> 
    {/* we using this sign to create a fragment in the board */}
    {/* we create a div in who display a one row of the board, nextly create 2 more */}

    {/* create a first row */}
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>

    {/* create a second row */}
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>

    {/* create a third row */}
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>

    </>
  );
}
