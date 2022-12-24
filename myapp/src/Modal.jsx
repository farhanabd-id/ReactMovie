import React from 'react'

function Modal({show}) {
    if (!show) {
        console.log(show)
      return null;
    }
    console.log(show)
    return (
        <div>
        
        <div id="myModaltopup" className="modala">

<div className="modala-content">

  <button onClick={() => show()} className="close">&times;</button>

      <form>
      <div className="form-group mt-2">
        <label for="exampleInputPassword1">Top Up Ammount</label>
        <input type="number" className="form-control" id="ammount" placeholder="Ammount" />
      </div>
      <button onclick="topup()" id="btn-ticket" type="button" className="btn btn-primary">Submit</button>
  </form>
</div>
</div>
    </div>
    )
    
  }

export default Modal