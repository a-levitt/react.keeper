import './Heading.css'

function Heading() {
    const currentTime = new Date().getHours();

    let timeColor = "black";
    let timeOfDay = "";
    const customStyle = {
        color: ""
    }

    if (currentTime >= 0 && currentTime < 6 ) {
        timeColor = customStyle.color = "violet";
        timeOfDay = "Night";
    } else if (currentTime >= 6 && currentTime < 12) {
        timeColor = customStyle.color = "yellow";
        timeOfDay = "Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
        timeColor = customStyle.color = "green";
        timeOfDay = "Afternoon";
    } else if (currentTime >= 18 && currentTime < 24) {
        timeColor = customStyle.color = "blue";
        timeOfDay = "Evening";
    }

    return (
        <>
            <h1 className="heading" style={customStyle}>Good {timeOfDay}!</h1>
        </>
    )
}

export default Heading