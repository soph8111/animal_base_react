export default function RemoveOther() {
  return (
    <div id="remove_other" className="modal hide">
      <div className="dialog">
        <button className="closebutton">X</button>
        <h1>Warning!</h1>
        <p>
          There can be oly one winner of each type! <br />
          Do you want to remove the other winner?
        </p>
        <button id="remove_other_button">
          Remove <span data-field="otherwinner">other</span>
        </button>
      </div>
    </div>
  );
}
