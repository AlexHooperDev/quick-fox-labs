import React, { useEffect, useState, useContext } from 'react';

import { ModalContext } from '../components/PopupState'

import './modal.scss'

export default function Modal({ contactModal }) {

    const state = useContext(ModalContext);

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
                <button
                    onClick={() => state.setModal(false)}
                    className="modal__wrapper__close"></button>
                {/* <div className="modal__wrapper__upper">
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
                </div> */}
                <div>
                    {/* Begin Mailchimp Signup Form */}
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
                    <div id="mc_embed_signup">
                        <form action="https://quickfoxlabs.us4.list-manage.com/subscribe/post?u=b8d03c20e961115a18311bb3c&id=6f966dddfa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                                    </label>
                                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-FNAME">First Name </label>
                                    <input type="text" name="FNAME" className id="mce-FNAME" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-LNAME">Last Name </label>
                                    <input type="text" name="LNAME" className id="mce-LNAME" />
                                </div>
                                <div className="mc-field-group size1of2">
                                    <label htmlFor="mce-PHONE">Phone Number </label>
                                    <input type="text" name="PHONE" className id="mce-PHONE" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-MMERGE6">What would you like to talk to us about?  <span className="asterisk">*</span>
                                    </label>
                                    <select name="MMERGE6" className="required" id="mce-MMERGE6">
                                        <option value />
                                        <option value="I’m new to digital, and would like to explore how it may help my business">I’m new to digital, and would like to explore how it may help my business</option>
                                        <option value="I know what I am doing with digital, I just need more hands to get it done">I know what I am doing with digital, I just need more hands to get it done</option>
                                        <option value="I’d like to learn how to do digital marketing">I’d like to learn how to do digital marketing</option>
                                        <option value="I’d like to talk to you about something else">I’d like to talk to you about something else</option>
                                    </select>
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                                    <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_b8d03c20e961115a18311bb3c_6f966dddfa" tabIndex={-1} defaultValue /></div>
                                <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                            </div>
                        </form>
                    </div>
                    {/*End mc_embed_signup*/}
                </div>
            </div>
        </aside>
    );
}