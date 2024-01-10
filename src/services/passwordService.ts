export default function generatePass () {
    let password: string = ''
    const characters: string = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ1234567890'
    const passwordLength = 10

    for(let i = 0; i < passwordLength;  i++){
        const numberRandom = Math.ceil(Math.random() * characters.length)
        let arrayPass:string[] = []
        arrayPass.push( characters[numberRandom])

        password = password + arrayPass.toString()    
    }

   return password
}