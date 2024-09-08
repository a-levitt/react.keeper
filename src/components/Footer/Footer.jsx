function Footer() {
    const name = "Artemis Levitt";

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <>
            <p>Created by {name}</p>
            <p>Copyright {currentYear}</p>
        </>
    )
}

export default Footer