import React from 'react'

import './modal.scss'

export default function Modal({ contactModal }) {
    return (
        <aside className="modal">
            <div className="modal__wrapper">
                <button onClick={() => contactModal()}>close</button>
                Contact us Modal
            </div>
        </aside>
    );
}