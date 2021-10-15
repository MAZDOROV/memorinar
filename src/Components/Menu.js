import React from 'react'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-secondary">New Game</button>
                    <button type="button" class="btn btn-secondary">Pause</button>
                    <button type="button" class="btn btn-secondary">Stop</button>
                    <button type="button" class="btn btn-secondary">Save</button>
                </div>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Time
                        <span class="badge bg-secondary rounded-pill">00:00:00</span>
                    </li>
                </ul>
            </div>
        );
    }
}