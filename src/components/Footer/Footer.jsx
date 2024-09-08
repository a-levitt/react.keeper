function Footer() {
    const name = "Artemis Levitt";

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <>
            <footer>
                <p>Created by {name} © {currentYear}</p>
            </footer>
        </>
    )
}

export default Footer