import React from 'react';

const ContactPreview = (props) => {
    return (
        <section className="ContactPreview">
            <div className="ContactPreview-img">
                <img src="https://www.goldate.co.il/images/male.png" alt="" />
            </div>
            <div className="ContactPreview-txt">
                <h1>{props.contact.name}</h1>
            </div>
        </section>
    )
}
export default ContactPreview