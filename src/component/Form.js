import React from 'react'

const styles = {
    input: {
        border: '1px solid #ccc'
    }
}

function Form() {
    return (
        <form method="POST" encType="multipart/form-data" action="https://fileservice2.herokuapp.com/rest/upload">
            <input type="file" name="file" style={styles.input}></input>
            <br></br>
            <input class="rm" type="submit" value="Отправить"></input>
        </form>
    )
}

export default Form