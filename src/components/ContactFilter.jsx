import React from 'react';

const ContactFilter = (props) => {
    return (
        <section className="ContactFilter">
            <div className="ContactFilter-container">
                <input onKeyUp={props.filter} type="text" placeholder="Search..." />
            </div>
        </section>
    )
}
export default ContactFilter;