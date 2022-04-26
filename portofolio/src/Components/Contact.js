
import {  Container } from "react-bootstrap";

const Contact = () => {
    return (
       <Container>

        <div className="Aboute">
            <h1 > Contact me</h1>
            <form>
            <label for="email">Email</label><br />
            <input type="email" name="email" placeholder="alamat email"/>
            <br />
            <label for="message">Pesan</label><br />
            <textarea name="message" placeholder="Tulis pesan anda..." rows="4" cols="80"></textarea>
            <br />
            <br />
            <input type="submit" value="Kirim" />
        </form>
         
        </div>

        </Container>
    );
};

export default Contact;
