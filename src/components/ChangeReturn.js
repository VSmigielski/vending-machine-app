import React from "react";

export default function ChangeReturn() {
    return (
        <div className="container" id="changeContainer">
            <form>
                <div>
                    <h2>Change</h2>
                    <div className="form-group">
                        <textarea type="text" 
                        readonly id="changeInputBox" 
                        className="form-control">
                        </textarea>
                    </div>
                    <div className="form-group row"> 
                <button type="button"
                id="returnChangeButton"
                className="btn btn-info">
                    Change Return
                </button>
             </div>                
            </div>
        </form>
    </div>
    );
}