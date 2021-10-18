var Form = document.querySelector("#Password")
Form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    var length = document.querySelector("#Password_Length").value
    var lowerCase = document.querySelector("#Password_Lowercase").checked
    var upperCase = document.querySelector("#Password_Uppercase").checked
    var numeric = document.querySelector("#Password_Numeric").checked
    var symbol = document.querySelector("#Password_Symbol").checked
    if((length >= 8 && length <= 128)&&(lowerCase || upperCase || numeric || symbol)){
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "1234567980";
        var special = "!@#$%^&*()_+-=[]{};':,./<>?";
        var characters = (lowerCase? lowercase:"") + (upperCase? uppercase:"") + (numeric? numbers:"") + (symbol? special:"");
        var password = "";
        for (var i = 0;i < length; i++) {
            var roll= Math.floor(Math.random()*characters.length)
            var character = characters[roll]
            password +=character
        }
        document.querySelector("#Password_Output").value=password
    }
}