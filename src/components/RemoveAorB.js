export default function RemoveAorB() {
  return (
    <div id="remove_aorb" className="modal hide">
      <div className="dialog">
        <button className="closebutton">X</button>
        <h1>Warning!</h1>
        <p>
          There can not be any more than to winners! <br />
          Do you wish to remove one of the existing winners?
        </p>
        <div className="sidebyside">
          <button id="removea">
            Remove <span data-field="winnerA">A</span>
          </button>
          <button id="removeb">
            Remove <span data-field="winnerB">B</span>
          </button>
        </div>
      </div>
    </div>
  );
}
