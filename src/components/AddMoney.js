import React from "react";

export default function AddMoney() {
        return (
            <div className="container">
                <form>
                    <div>
                        <h2>Total $ In</h2>
                            <div className="form-group">
                                <input type="text" readonly id="moneyInput" className="form-control" />
                            </div>
                            </div>
                            <div className="row text-center"> 
                                <div className="col">
                                    <button type="button"
                                    id="addDollarButton"
                                    className="btn btn-info">
                                    Add Dollar
                                    </button>
                                </div>
                                <div className="col">
                                    <button type="button"
                                    id="addQuarterButton"
                                    className="btn btn-info">
                                    Add Quarter
                                    </button>
                                </div>
                                </div>
                                    <br />
                                <div className="row text-center"> 
                                    <div className="col">
                                        <button type="button"
                                        id="addDimeButton"
                                        className="btn btn-info">
                                        Add Dime
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button type="button"
                                        id="addNickelButton"
                                        className="btn btn-info">
                                        Add Nickel
                                    </button>
                                </div>
                            </div>
                        <br />
                    </form>
                <hr />
            </div>
        );                   
}
