const ContactProfile = ({ profile }) => {
    return (
        <div className="contact-profile">
            <img src={`/images/profile/${profile.image}`} alt="" />
            <p>{profile.firstName + " " + profile.lastName}</p>
            <div className="social-media">
                <i className="fa fa-user" aria-hidden="true" />
            </div>
        </div>

    )
}

export default ContactProfile
