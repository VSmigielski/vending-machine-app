import React from "react";

export default function PurchaseCenter() {
    
    return (
        <div id="purchaseContainer" className="PurchaseCenter container">
            <form>
                <div>
                    <h2>Messages</h2>
                <div className="form-group">
                    <textarea type="text" 
                    readonly id="vendingMessage" 
                    className="form-control">
                    </textarea>
                </div>
                <div id="itemDiv" className="form-group row">
                    <label>
                        Item:&nbsp;&nbsp;
                    </label>
                    <input id="itemToVend" type="text" readonly />
                </div>
                </div>
                <br />
                <div className="form-group row">
                    <button type="button"
                    id="purchaseButton"
                    className="btn btn-info">
                        Make Purchase
                    </button>
                </div>
            </form>
        <hr />
    </div>
    );
}