function MemberCard({ name, role, skills, isOnline }) {
    return (
        <div className = "card">
            <div className = "card-header">
                <h1>{name}</h1>
                <span className = {isOnline ? "status online" : "status offline"}>
                    {isOnline ? " Online" : " Offline"}
                </span>
            </div>

            <p className="role">{role}</p>

            <div className="skills">
                {skills.map((skill, index) => (
                    <span key={index} className = "skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default MemberCard;