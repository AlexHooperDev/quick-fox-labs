import React, { useEffect, useState } from 'react'

import './modal.scss'

export default function Modal({ contactModal }) {

    useEffect(() => {
        // if mounted isnt true then wait 2 secs and set to true
        if (mounted) {
            setTimeout(() => {
                setMounted(false);
            }, 500);
        } else if (!mounted) {
            setMounted(true);
        }
    }, [mounted]);

    const [mounted, setMounted] = useState(false);

    return (
        <aside className="modal" style={{ opacity: `${mounted ? '1' : '0'}` }}>
            <div className="modal__wrapper" style={{ transform: `translateY(${mounted ? '0%' : '20%'})`, opacity: `${mounted ? '1' : '0'}` }}>
                <button className="modal__wrapper__close" onClick={() => contactModal()}></button>
                <div className="modal__wrapper__upper">
                    <h3>
                        Contact us
                    </h3>
                    <p>
                        Fill in the form below and we'll get in contact
                </p>
                </div>
                <div className="modal__wrapper__form">
                    <form>
                        <div>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </aside>
    );
}